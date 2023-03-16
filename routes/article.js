const express = require("express")
const router = express.Router()
const {articles} = require("../models")

router.get("/:articleId", async (req, res) => {
    const articleList = await articles.findAll({where: {id: req.params.articleId}})
    res.json(articleList)
});


module.exports = router
