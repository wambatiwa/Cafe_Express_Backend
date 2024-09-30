const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentification');
var roleCheck = require('../services/checkRole');

router.post('/add',auth.authentificationToken,roleCheck.checkRole,(req,res,next) => {
    let cat = req.body;
    var query = "insert into category(name) values(?)";
    connection.query(query,[cat.name],(err,results) => {
        if(!err) {
            return res.status(200).json({message: "Category Added Successfully"})
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.get('/get',auth.authentificationToken,(req,res,next) => {
    var query = "select * from category order by name";
    connection.query(query,(err,results) => {
        if(!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.patch('/update', auth.authentificationToken,roleCheck.checkRole,(req,res,next) => {
    let product = req.body;
    var query = "update category set name=? where id=?";
    connection.query(query,[product.name,product.id],(err,results) => {
        if(!err) {
            if(results.affectedRows == 0) {
                return res.status(404).json({message:"Category Id not found"})
            }
            return res.status(200).json({message:"category Updated Successfully"})
        }
        else {
            return res.status(500).json(err);
        }
    })
})
module.exports = router;