const express = require('express'),
    router = express.Router(),
    RankingModel = require("../modules/ranking");

router.get("/", async function(req,res, next){
        const rankingData = await RankingModel.getAll();
        console.log("This is ranking data", rankingData);
    res.status(200)
    .render('template',{
        locals:{
            title: "Rate how you feel about each topic",
            data: rankingData
           
        },
        partials: {
            partial: "partial-ranking"
        }
    });


});


module.exports = router;