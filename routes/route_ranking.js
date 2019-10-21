const express = require('express'),
    router = express.Router(),
    RankingModel = require("../modules/ranking");

router.get("/", async function(req,res, next){
        const rankingData = await RankingModel.getAll();
        const statusData = await RankingModel.getClassStatus();
        console.log("This is ranking data", rankingData);
        console.log("This is the status:", statusData)
    res.status(200)
    .render('template',{
        locals:{
            // TODO Change title to something else
            title: "",
            data:   rankingData,
            dataStatus : statusData,
           
        },
        partials: {
            partial: "partial-ranking"
        }
    });


});


module.exports = router;