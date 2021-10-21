import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import authorRouter from "./services/authors/index.js";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());
console.log(listEndpoints(server));
server.use("/authors", authorRouter);

server.get('/middleware', (req, res, next) => {
    const { number } = req.query;
    let number = parseInt(number);
    req.number = number;
    next();
}, (req, res, next) => {
    req.number++;
    next();
})



server.listen(port, () => {
    console.log("Server running on port: ", port)
});

server.on("error", (error) => {
    console.log("Server not running due to: ${error}")
});
