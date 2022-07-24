const express = require('express')
const router = express.Router()
const db = require('../utils/database')

router.get('/initConstant',(req,res)=>{
    let initConstant={
        activity:[],
        city:[],
        purpose:[],
        gender:[],
        job:[]
    };
    let sql = 
    'select * from activity;'+
    'select * from city;'+
    'select * from purpose;'+
    'select * from gender;'+
    'select * from job;'
    const dbQuery = new Promise((resolve,reject)=>{
        db.query(sql,(err,results)=>{
            if(err){
                reject(err)
            }else{
                initConstant.activity = results[0]
                initConstant.city = results[1]
                initConstant.purpose = results[2]
                initConstant.gender = results[3]
                initConstant.job = results[4]
                resolve(initConstant)
            }
            
        })
    }).then(init=>{
        res.json(init)
    }).catch(err=>{
        res.status(404).send('Internal Error')
    })
})

module.exports = router