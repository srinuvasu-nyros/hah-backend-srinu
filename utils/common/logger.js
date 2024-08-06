const { createLogger, format, transports } = require("winston");
const { white_listed_params } = require("./helpers");
require("winston-daily-rotate-file");
const { combine, timestamp, label } = format;

// Define your custom format
const logFormat = format.printf((info) => {
  return `${info.timestamp} [${info.label}] ${info.level.toUpperCase()}: ${info.message
    }`;
});

// Create a daily rotate file transport for 'info' level
const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: "./logs/%DATE%-development.log",
  datePattern: "YYYY-MM",
  maxSize: "20m",
  level: "info",
});

// Create a file transport for 'error' level logs
const errorFileTransport = new transports.File({
  filename: "./logs/error.log",
  level: "error",
});

const logger = createLogger({
  levels: {
    error: 0,
    info: 2,
  },
  format: combine(label({ label: "HeavenAtHand" }), timestamp(), logFormat),
  transports: [
    new transports.Console(),
    dailyRotateFileTransport,
    errorFileTransport,
  ],
});

// Log requests like URL, headers, params etc.
const log_requests = (req, res, next) => {
  const headers = JSON.parse(JSON.stringify(req.headers));
  const whitelisted_headers = whitelist(headers);
  const body = JSON.parse(JSON.stringify(req.body));
  const whitelisted_body = whitelist(body);
  // logger.info(JSON.stringify(whitelisted_headers));
  logger.info(`${req.method}-${req.url}`);
  logger.info(JSON.stringify(whitelisted_body));
  next();
};

// Whitelist sensitive params to hide in logs
const whitelist = (req) => {
  white_listed_params.map(param => req[param] ? req[param] = "HIDDEN" : '')
  return req;
}

module.exports = {
  logger,
  log_requests
};