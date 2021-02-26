var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', data);
  console.log("working?");
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
  res.render('canvas');
};