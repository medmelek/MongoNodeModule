var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/:name', function(req, res, next) {

    db.get().collection('users', function (err, collection) {

        collection.find({name:req.param('name')}).toArray(function(err, items) {

            if(err) throw err;
            res.send(items);
            console.log(items) ;
            res.end() ;
        })

    });

});

module.exports = router;