import express from "express";
import fs from "fs";
import uniqid from "uniqid";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const authorsFilePath = path.join(__dirname, "authors.json");
const authorRouter = express.Router();

authorRouter.post("/:id", (req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message });
    }
});

authorRouter.get("/", (req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message });
    }
});

authorRouter.get("/:id", (req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message });
    }
});

authorRouter.put("/:id", (req, res, next) => {
    res.send("Put")
});

authorRouter.delete("/:id", (req, res, next) => {
    res.send("Delete")
});

export default authorRouter;