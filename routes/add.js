var data = require("../data.json");
var newInfo = require("../newProject.json");

exports.addProject = function(request, response) {   
	// Your code goes here
	data.projectName = request.query.name;
	data.description = request.query.description;
	//data.newInfo.push(data); we didn't really need this, since we weren't planning on implementing having more than one project
	console.log(data);
	response.render('canvas', data);
}