var express = require('express');
var router = express.Router();

/* GET Mydata page. */
router.get('/', function(req, res, next) {
    res.render('mydata', { title: 'Konda Shivaradhan' });
});

module.exports = router;