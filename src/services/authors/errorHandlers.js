const catchAllErrorHandler = (err, req, res) => {
    if (err) {
        
        if (!req.headersSent) {
            res.status(err.status || 500).send({ message: err.message || "Something went wrong" });
        }
    }
    next();
};

const notFound = (err, req, res, next) => {
    if (err && err.status === 400) {
        res.status(400).send({ message: err.message || "Not found" });
    }
    next();
};

const forbidden = (err, req, res, next) => {
    if (err && err.status === 400) {
        res.status(403).send({ message: err.message || "Forbidden" });
 }
}