const { response } = require('express');
var data = require('../data.json');


exports.view = function(req, res){
  res.render('index', data);
  console.log(data);
};

exports.login = function(req, res){
  res.render('login');
};

exports.friends = function(req, res){
  res.render('friends');
};

exports.newProject = function(req, res){
  res.render('newProject');
};

exports.canvas = function(req, res){
  res.render('canvas', data);
};