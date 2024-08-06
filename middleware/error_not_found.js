const not_found_error  = require("./not_found_error")
const error_not_found = (req, res, next) => next(new not_found_error({referrer: req.originalUrl}));
module.exports = error_not_found;