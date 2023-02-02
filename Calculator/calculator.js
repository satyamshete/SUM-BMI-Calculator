const express = require("express")
const app = express()
const bodyPaser = require ("body-parser")
app.use(bodyPaser.urlencoded({extended: true}))

app.listen(3000,function(){
    console.log("server listen on port 3000");
})

app.get("/", function(req, res){
    //res.send("Hello world")
    //console.log(__dirname);
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req, res){
//console.log(req.body);
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2)
var result  = num1 + num2;
res.send("the resut of calculation is " + result)
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var height = req.body.height;
    var weight = req.body.weight;
    var result = height+weight
    res.send("result= "+ result)
})