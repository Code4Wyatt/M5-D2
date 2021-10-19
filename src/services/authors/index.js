import express from "express"

const authorRouter = express.Router()

authorRouter.post("/", (req, res) => {
    res.send("Post")
})

authorRouter.get("/", (req, res) => {
    res.send("Get")
})

authorRouter.get("/:id", (req, res) => {
    res.send("Get")
})

authorRouter.put("/:id", (req, res) => {
    res.send("Put")
})

authorRouter.delete("/:id", (req, res) => {
    res.send("Delete")
})

export default authorRouter