const ejs = require('ejs');
const http = require('http');
const cors = require('cors');
const path = require('path');
const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
const router = require('./routes/index'); // Import routes correctly
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const session = require('express-session');
const error_handler = require('./middleware/error_handler');
const error_logger = require('./middleware/error_logger');
const error_not_found = require('./middleware/error_not_found');
const { logger, log_requests } = require('./utils/common/logger');

// Connect Database
connectDB();

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    key: '_hah_admn_session',
    secret: '_hah_admn_session_secret',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.authenticate('session'));

app.use((req, res, next) => {
    const msgs = req.session.messages || [];
    res.locals.session = req.session;
    res.locals.user = req.session?.passport?.user;
    res.locals.messages = msgs;
    res.locals.error = null;
    res.locals.hasMessages = !!msgs.length;
    req.session.messages = [];
    next();
});

app.use(log_requests);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => logger.info(`Server running on port ${port}`));
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
app.set('io', io);
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
app.use('/api', router);
// app.use('/api/admin', admin_routes);
app.get('/', (req, res) => res.send('Hello world!'));
app.use(error_not_found);
app.use(error_logger);
app.use(error_handler);
