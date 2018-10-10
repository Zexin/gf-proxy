var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var CROS_OK=function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Method","POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers","Content-Type,X-Requested-With");
    res.header('Access-Control-Max-Age','1000');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires",0);
    next();
}

app.use(CROS_OK);
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() );
app.options("*",function(req,res){res.end('Good day');});

exports.initAppOnPort=function(port){
    app.listen(port);
    console.log(('HTTP SERVICE STARTED ON PORT '+ port).green)
    return app;
};