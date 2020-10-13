var express = require('express');
const { route } = require('.');
var router = express.Router();

//DEMO 1 - render template
router.get('/demo1',function(req, res, next){
    res.render('demo/demo1',{
        message : 'my profile',
        user    : {
            name    : 'Hanif Muhammad Tsabit',
            email   : 'hanifmtsabit@gmail.com',
            git     : 'hanifmt'
        }
    });
});

//DEMO 2 - parameter di URL
router.get('/demo2/(:id)/(:category)',function(req, res, next){
    res.render('demo/demo2',{
        id          : req.params.id,
        category    : req.params.category,
    });
});

//DEMO 3 - menampilkan respon JSON
router.get('/demo3',function(req, res, next){
    res.json({
        message : 'my profile',
        user    : {
            name    : 'Hanif Muhammad Tsabit',
            email   : 'hanifmtsabit@gmail.com',
            git     : 'hanifmt'
        }
    });
});

//DEMO 4 - menerima request method POST dari form
router.get('/demo4/',function(req, res, next){
    res.render('demo/demo4');
});

router.post('/demo4/',function(req, res, next){
    res.json({
        message : "request POST is executed",
        data    : {
            username    : req.param('username'),
            email       : req.param('email'),
        }
    });
});

//DEMO 5 - menerima request method PUT
router.put('/demo5/',function(req, res, next){
    res.json({
        message : "request PUT is executed",
        data    : {
            username    : req.param('username'),
            email       : req.param('email'),
        }
    });
});

//DEMO 6 - menerima request method DELETE
router.delete('/demo6/',function(req, res, next){
    res.json({
        message : "request DELETE is executed"
    });
});

//DEMO 7 - redirect URL
router.get('/demo7',function(req, res, next){
    res.redirect('/demo/demo7_result');
});

router.get('/demo7_result',function(req, res, next){
    res.render('demo/demo7');
});

module.exports = router;