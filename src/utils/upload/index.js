import { fileURLToPath } from "url";

import multer from "multer";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const publicDirectory = path.join(__dirname, "../../../public");

const parseFile = multer();

const uploadFile = (req, res, next) => {
    try {
        console.log(req.file);
        console.log(publicDirectory);
        res.send("ok");
    } catch (error) {
        next(error)
    }
}