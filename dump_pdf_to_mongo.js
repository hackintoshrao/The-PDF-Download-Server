var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/windedb",function(err,db){
	fs.readdir('./pdf',function(err,files){

	console.log(files);
	for(i=0;i<files.length;i++){
		var doc = {"name":files[i]};
		db.collection('wines').insert(doc,function(err,inserted){
			if(err){
				throw err;
			}

		});
	}
	
	});

	

});