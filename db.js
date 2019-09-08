const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@<cluster path>?useUnifiedTopology=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
//todo:: change uri project (for more information visit your cluster .)
function connect () {
    client.connect(err => {
        if (err){
            console.log("mongo error");
            throw err ;
        }else{

            console.log("mongo worked")
        }
    });
}

function get(){
    //todo:: change database name (dbName) project
    const collections = client.db("mydatabase");
    return collections;
}

function close(){
    client.close();
}

module.exports = {
    connect ,
    get,
    close
};
/*
//todo:: to access your shared connection from outside

    const db = require('./db');
    db.connect();
    db.get() ;
        -- make some stuff
    db.close();

*/