class not_found_error extends Error {
    constructor(args) {
        super();
        this.status = 404;
        this.message = `${args.referrer} Not found`
    }
}
module.exports = not_found_error;