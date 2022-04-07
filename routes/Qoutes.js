const express = require('express');
//const Quotes = require('../models/Quotes');
const router = express.Router();
const Qoute = require('../models/Quotes')

router.get('/',async(req,res)=>{
    const quotes = await Qoute.find()
    res.json(quotes);
    //res.send("Hi");
});

router.get('/quote/:id',async(req,res)=>{
    const quotes = await Qoute.findById({_id:req.params.id})
    res.json(quotes);
});

router.post('/new',async(req,res)=>{

    const newQuote = new Qoute(req.body);
    const savedQuote = await newQuote.save();
    res.json(newQuote);
});

router.patch('/quote/:id',async(req,res)=>{
    const quotes = await Qoute.updateOne({_id:req.params.id},{$set:req.body})
    res.json(quotes);
});

router.delete('/quote/:id',async(req,res)=>{
    const result = await Qoute.findByIdAndDelete({_id:req.params.id})
    res.json(result);
});

router.get('/random',async(req,res)=>{
    const count = await Qoute.countDocuments();
    const random = Math.floor(Math.random() * count)
    const q = await Qoute.findOne().skip(random); 
    res.json(q);
});



module.exports = router;