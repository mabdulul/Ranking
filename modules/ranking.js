const db = require("./conn");

class Ranking{
   
    constructor(html, css, javaScript, node, express, awesome, great, good,okay, poor, unranked, status_id){

       this.html = html;
       this.css = css;
       this.javaScript = javaScript;
       this. node = node;
       this.express = express;
       this.awesome = awesome;
       this.great = great;
       this.good = good;
       this.okay = okay;
       this.poor = poor;
       this.unranked = unranked;
       this.status_id = status_id;

    }
     static async getAll (){

        try{
            const response = await db.any('select * from topics; ');
            console.log("response:", response)
            return response;
        }
        catch(error){
            return error.message;
        }

     }
   /*  async updateTopicvalue(){
        try{
            // HTML id = 1 , CSS id = 2 , javascript id= 3, postgres id= 4 , node id = 5, express id = 6
            const response = await db.result(`UPDATE topics SET status_id = ${this.html} Where id=1;`);
            console.log("response", response);
        }
        catch(error){
            return error.message
        }
    } */


}

module.exports = Ranking; 

