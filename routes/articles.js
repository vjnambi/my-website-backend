const express = require("express")
const router = express.Router()
const {articles} = require("../models")

router.get("/", async (req, res) => {
    const articleList = await articles.findAll()
    res.json(articleList)
});


module.exports = router
