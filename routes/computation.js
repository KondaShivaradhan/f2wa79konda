var express = require('express');
var router = express.Router();
const url = require('url');
const querystring = require('querystring');
/*
30. Math.pow()
31. Math.sign()
32. Math.tanh()
33. Math.trunc()
/* GET Bonus page. */
router.get('/', function(req, res, next) {
    link = url.parse(req.url)
    params = link.query
    searchParams = new URLSearchParams(params);
    const x = searchParams.get('x')
    console.log(x);
    if (x) {
        console.log(" X value is " + x);
        result = `Math.sign() applied to ${x} is ${Math.sign(x)} `
        res.render('computation', { title: 'Bonus', heading: 'Computation', output: result })
    } else {
        rand = Math.floor(Math.random() * 360);
        result = `Math.sign() applied to ${rand} is ${Math.sign(rand)} `
        res.render('computation', { title: 'Bonus', heading: 'Computation', output: result });
    }

});

module.exports = router;