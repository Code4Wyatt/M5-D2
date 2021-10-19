import express from "express"
import authorsRouter from "./services/authors/index.js"
import authorRouter from "./services/authors"

const server = express()

server.use( authorRouter)

const port = 3001

server.listen(port, () => {
    console.log("Server running on port: ", port)
})

export default server