var express = require('express');
var router = express.Router();
const url = require('url');
const querystring = require('querystring');
/* GET Bonus page. */
router.get('/', function(req, res, next) {
    link = url.parse(req.url)
    params = link.query
    searchParams = new URLSearchParams(params);
    const x = searchParams.get('x')
    console.log(x);
    if (x) {
        console.log(" X value is " + x);
        result = `Math.sign() applied to ${x} is ${Math.sign(x)} ||  
        Math.tanh() applied to ${x} is ${Math.tanh(x)} || 
        Math.trunc() applied to ${x} is ${Math.trunc(x)} `
        res.render('computation', { title: 'Bonus', heading: 'Computation', output: result })
    } else {
        rand = Math.floor(Math.random() * 360);
        result = `Math.sign() applied to ${rand} is ${Math.sign(rand)} ||  
        Math.tanh() applied to ${rand} is ${Math.tanh(rand)} || 
        Math.trunc() applied to ${rand} is ${Math.trunc(rand)} `
        res.render('computation', { title: 'Bonus', heading: 'Computation', output: result });
    }

});

module.exports = router;