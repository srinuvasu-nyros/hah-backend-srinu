const bcrypt = require("bcrypt");
const passport = require('passport');
const LocalStrategy = require('passport-local');
// const User = require("../models/user");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { logger } = require("../utils/common/logger");
const jwt = require('jsonwebtoken');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY
};

passport.use(new LocalStrategy({usernameField:"email", passwordField:"password"}, async function verify(email, password, cb) {
    const admin = await User.findOne({ email }).populate('role');
    if (!admin || !(await admin.has_admin_access())) {
        return cb(null, false, { message: 'Incorrect Email or password' });
    }
    bcrypt.compare(password.toString(), admin.password?.toString(), function(err, res) {
        if (err) { logger.error(err);return cb(err); }
        if (!res) { return cb(null, false, { message: 'Incorrect email or password' }); }
        return cb(null, admin);
    });
}));

passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
    try {
        const user = await User.findOne({ _id: jwt_payload._id }).populate('role');
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
    } catch(e) {
        logger.error(e);
        return done(null, false);
    }
  }));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { _id: user._id, email: user.email, username: user.full_name, role: user.role, mobile: user.mobile });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

module.exports = passport;