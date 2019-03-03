

module.exports = function (env) {
    return function (req, res, next) {
        let url = req.url;
        let method = req.method;
        let start = +new Date();
        let stream = process.stdout;
        next();
        res.on('finish', () => {
            let end = +new Date();
            let duration = end - start;
            let logMessage = `${method} : ${url} took ${duration} ms \n`
            if (env === 'dev') {
                stream.write(logMessage)
            }
        })

    }
}