
// -----------------Live RELOAD----------------
// document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
// 	$('#starLogo').hide();
// --------------------------------------------



//Creating Name, Email, Task into a Array

var formNewMemberArray = [];


var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var tasksInput = document.getElementById('tasks');

var formNewMemberAdd = document.getElementById('form');


// (e) for event
formNewMemberAdd.addEventListener('submit', function(e) {
	e.preventDefault();
	formNewMemberArray.push({
       Name : nameInput.value,
       Email : emailInput.value,
       Tasks : tasksInput.value,
       
   });
	console.log(formNewMemberArray[0].Name);
	console.log(formNewMemberArray[0].Email);
	console.log(formNewMemberArray[0].Tasks);

});



// -----------------------------------------------------------------------

//Adding Classes & Removing from the Array































