var express = require('express');
var http = require('http');
var app = express();
app.get('/download',function(req,res){
	res.download('./pdf/beginning_css3.pdf');
});

http.createServer(app).listen(3000);