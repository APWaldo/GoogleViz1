/**
 * @author
 */


console.log ("Hi there");

//Add dataLoaded function that calls up the data.
function dataLoaded (UNEMPDATA) {
	
	//console log to make sure the data is pulled up.
	console.log (UNEMPDATA);
	
	//Create a loop that is a short cut straight to the observations or what we want to chart. First
	//start by creating a variable.
	var myObsData = UNEMPDATA.observations;
	
	var myDataArray = [];
	//Add the headers of the dataArray. 
	var headerArray = ["Date", "Value"];
	//Push the headers to myDataArray
	myDataArray.push(headerArray);
	
	//Now create a loop that is an ARRAY of an ARRAY. Specify the starting point, or the parameters of the for loop.
	for(var i=0; i<myObsData.length; i++) {
		//You want to get whats in the observations based on its INDEX. Create reference to current object in list.
		var currObj = myObsData[i];
	
		//Now create an array IN an array.
		var currArray = [currObj.date, Number(currObj.value)];
		//Now you have to push the arrays that you're making into the larger array.
		myDataArray.push(currArray);
	}
	console.log(myDataArray);


//feed data to visualization library
var data = google.visualization.arrayToDataTable(myDataArray);

//Create options object to add fanciness to the chart.
var chartOptions = {
	title: "Unemployment since 1980"
};
//tell it to create a line chart and give it a div that matches the index.html.
var myChart = new google.visualization.LineChart(document.getElementById('myChartDiv'));

myChart.draw(data, chartOptions);
}

//Add the googleLoaded function.
function googleLoaded(){
	console.log ("Google has loaded")
	
	//Time to load data with get function. After I need to create function dataLoaded.
	$.get("UEMP270V_data.json", dataLoaded, "json");
	
}

function pageLoaded () {
	
	console.log ("Got to page loaded.");
	
	//Load the google visualization library with the callback googleLoaded.
	google.load("visualization", "1", {packages:["corechart"], callback: "googleLoaded"});
	
}



$(document).ready(pageLoaded);
