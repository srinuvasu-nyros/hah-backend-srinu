const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
const { logger } = require("../utils/common/logger");

const auth_check = async(req, res, next) => {
	passport.authenticate('jwt', { session: false }, async(err, user, info) => {
		try {
			if (err) {
				return res.status(500).json({msg: err.message});
			} else if (!user) {
				return res.status(401).json({msg: 'Unauthorized access'});
			} else if (!user.is_verified && (req.url != '/user/verify' && req.url != '/user/otp')) {
				return res.status(401).json({msg: 'Email Not verified'});
			} else {
			  req.user = user;
			  next();
			}
		} catch(e) {
			logger.error(e);
			return next(new Error(e.message));
		}
	})(req, res, next);
}

const admin_check = async(req, res, next) => {
	passport.authenticate('jwt', { session: false }, async(err, user, info) => {
		try {
			if (err) {
				return res.status(500).json({msg: err.message});
			} else if (!user) {
				return res.status(401).json({msg: 'Unauthorized access'});
			} else if (!await user.has_admin_access()) {
				return res.status(401).json({msg: 'Unauthorized access'});
			} else {
			  req.user = user;
			  next();
			}
		} catch(e) {
			logger.error(e);
			return next(new Error(e.message));
		}
	})(req, res, next);
}

module.exports = {
	auth_check,
	admin_check
};