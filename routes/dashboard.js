const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentification');

router.get('/details',auth.authentificationToken,(req,res,next) => {
    var categoryCount;
    var productCount;
    var billCount;
    var query = "select count(id) as categoryCount from category";
    connection.query(query,(err,results)=> {
        if(!err){
            categoryCount = results[0].categoryCount;
        }
        else {
            res.status(500).json(err);
        }
    })
    var query = "select count(id) as productCount from product";
    connection.query(query,(err,results)=> {
        if(!err){
            productCount = results[0].productCount;
        }
        else {
            res.status(500).json(err);
        }
    })
    var query = "select count(id) as billCount from bill";
    connection.query(query,(err,results)=> {
        if(!err){
            billCount = results[0].billCount;
            var data = {
                category: categoryCount,
                product: productCount,
                bill: billCount
            }
            return res.status(200).json(data);
        }
        else {
            res.status(500).json(err);
        }
    })
})

module.exports = router;