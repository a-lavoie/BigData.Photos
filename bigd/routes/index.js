var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'File from renamer' });
});

router.get('/#/Users', function(req, res) {
	res.send({"res":"gogo"});
});


//To have launchd start mongodb at login:
//    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
//Then to load mongodb now:
//    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
//Or, if you don't want/need launchctl, you can just run:
//    mongod --config /usr/local/etc/mongod.conf
//    >mongod --dbpath


mongoose.connect("mongodb://localhost/files");

// See files.js


mongoose.model('files', {
	path: String,
	filename: String,
	size: Number,
	owner: String,
	created: Date,
	modified: Date
});

router.get("/files", function(req,res){
	console.log("Entering in REST api");
	mongoose.model('files').find(function(err,files){
		res.send(files);
	});
});


router.get("/ls/:node/:dir(*)", function(req,res){
	console.log("Entering in REST api");
	var out = {};
	console.log("Dir=" + req.params.dir);
	console.log("Node=" + req.params.node);
	//out.network = req.params.node; 
	out.directoryListing = []; 
	try {
		var counter=0;
		fs.readdirSync("/" + req.params.dir).forEach(function(filename){
			out.directoryListing.push({
				"index": counter++,
				"filename": filename, 
				"Owner": "alainlavoie",
				"lastModification": 4332,
				"fileSize": 142
			});
		});
		res.send(out.directoryListing);
	} catch (dirError){
		if (dirError instanceof Error && dirError.code === 'ENOENT'){
			res.send(404);
		} else {
			res.send({Error: dirError});
		}
	}

});






































module.exports = router;
