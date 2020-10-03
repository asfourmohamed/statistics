const express = require('express');
var router = express.Router();
var {iframe} = require('../../metabase');

router.get('/', function(req, res){
    return res.render('dashboard', { title: 'dashboard',menu: req.session});
});

module.exports = router;