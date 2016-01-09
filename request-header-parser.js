var express = require('express')
//var bodyParser = require('body-parser')
var app = express()

//app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
    var langArr = req.headers["accept-language"].split(";")
    var lang = langArr[0].split(",")
    var regExp = /\(([^)]+)\)/
    var os = regExp.exec(req.headers["user-agent"])
    
  var json = {
      ipaddress: req.headers["x-forwarded-for"],
      language: lang[0],
      software: os[1]
  }
  res.send(json)
})

app.listen(process.env.PORT)