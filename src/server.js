import express from "express";

import cors from "cors";

import listEndpoints from "express-list-endpoints";

import authorRouter from "./services/authors/index.js";

import blogsRouter from "./services/blogs/index.js";

import { notFound, forbidden, catchAllErrorHandler } from "./errorHandlers.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const publicDirectory = path.join(__dirname, "../public");

const server = express();

const port = 3001;

server.use(cors());

server.use(express.json());

server.use(expres.static(publicDirectory));

server.use("/authors", authorRouter);

server.use("/blogs", blogsRouter);

server.use(notFound);

server.use(forbidden);

server.use(catchAllErrorHandler);

console.log(listEndpoints(server));

server.listen(port, () => {
    console.log("Server running on port: ", port)
});

server.on("error", (error) => {
    console.log("Server not running due to: ${error}")
});




