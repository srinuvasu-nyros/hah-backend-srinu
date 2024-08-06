const error_handler = (err, req, res, next) => {
    // if no status or message in error use default 500 code and message
    const status_code = err.status ?? 500;
    const message = err.message.toString() || "Something went wrong";
    // returns error status code and message
    return res.status(status_code).json({msg: message})
}
module.exports = error_handler;