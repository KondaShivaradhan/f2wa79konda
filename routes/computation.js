var express = require('express');
var router = express.Router();
/*
30. Math.pow()
31. Math.sign()
32. Math.tanh()
33. Math.trunc()
/* GET Bonus page. */
var random = Math.floor(Math.random)
router.get('/', function(req, res, next) {
    res.render('computation', { title: 'Bonus', heading: 'Computation' });
});

module.exports = router;