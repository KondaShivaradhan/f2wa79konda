var express = require('express');
var router = express.Router();
/*
30. Math.pow()
31. Math.sign()
32. Math.tanh()
33. Math.trunc()
/* GET Bonus page. */

router.get('/', function(req, res, next) {
    rand = Math.floor(Math.random() * 360);
    result = `Math.sign() applied to ${rand} is ${Math.sign(rand)} `
    res.render('computation', { title: 'Bonus', heading: 'Computation', output: result });
});

module.exports = router;