const { logger } = require("../utils/common/logger");
const error_logger = (err, req, res, next) => {
    logger.error(err.stack);
    next(err);
}
module.exports = error_logger;