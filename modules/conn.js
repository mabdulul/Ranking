const pgp = require('pg-promise')({
    query: function(e){
        console.log('Query:', e.query)
    }          
});

const options = {
    host: 'localhost',
    database: "ranking",
    user: "mulkuser",
    password: "mulk"
}

const db = pgp(options);
module.exports = db;


