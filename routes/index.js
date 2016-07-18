var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOM = require('react-dom');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
