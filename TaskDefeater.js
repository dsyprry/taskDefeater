var express = 
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "groot", 
    password: "", 
    database: "TaskDefeater"
});

connection.query('SELECT * FROM Tasks', function connectSelect (err, res) {
    if (err) throw err;

    var t = "\t";

    console.log("ID\tTask\t\tCompletion Status\t\t");
    console.log("=======================================================");

	for (var i = 0; i < res.length; i++) {
	  console.log(res[i].ID + t + res[i].task + t + t +
	    res[i].completion_status);
	}

    console.log("=======================================================");

	});





// $("#addTaskBtn").on("click", function(){

// 	alert("clickd button");

// 	var task = $("#taskName").val();

// 	$("#taskList").append(task + "\n");
	
// });


// $("#baddie").on("click", function() {

// 	alert("baddie clicked");			        	      	
// });//end click the baddie, make a victory

