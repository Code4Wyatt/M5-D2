import express from "express"

const server = express()

const port = 3003

server.listen(port, () => {
    console.log("Server running on port: ", port)
})

export default server