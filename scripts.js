/**
 * @author
 */


console.log ("Hi there");

//Add the googleLoaded function.
function googleLoaded(){
	console.log ("Google has loaded")
	
}

function pageLoaded () {
	
	console.log ("Got to page loaded.");
	//Load the google visualization library with the callback googleLoaded.
	google.load("visualization", "1", {packages:["corechart"], callback: "googleLoaded"});
	
}



$(document).ready(pageLoaded);
