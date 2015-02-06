var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'File from renamer' });
});

router.get('/#/Users', function(req, res) {
  res.send({"res":"gogo"});
});

module.exports = router;
