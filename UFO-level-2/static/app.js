// from data.js
var tableData = data;

// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).



/* Using the UFO dataset provided in the form of an array of JavaScript objects, 
write code that appends a table to your web page and then adds new rows of data for each UFO sighting. */
var tbody = d3.select("tbody");
///////

//print to test if data is loading
console.log(data);

//loop through to print out each report seperately
data.forEach(function(ufoReport) {
    console.log(ufoReport);
  });

//add format for tr
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var ufoRow = tbody.append("tr");
//log values sepearately
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
      });
    });

//append a cell for each value

data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var ufoRow = tbody.append("tr");
  
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
    
      var cell = ufoRow.append("td");
      //add values to cells
      cell.text(value);
    });
  });


/*  Use a date form in your HTML document and write JavaScript code that will listen for events 
and search through the date/time column to find rows that match user input. */



//button button, whose got the button
var button = d3.select("#filter-btn");

//select the form where we do the date input
var form = d3.select("#datetime");

//event handlers
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {
// Prevent the page from refreshing
  d3.event.preventDefault();

  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

////////
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log("FILTERED DATA BELOW:");
  console.log(filteredData);
  /////////
  filteredData.forEach(function(ufoFilterReport) {
    console.log(ufoFilterReport);
    var ufoFilterRow = tbody.append("tr");
    
    Object.entries(ufoFilterReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the ufo report object
        var cell = ufoFilterRow.append("td");
        //add values to cells
        cell.text(value);
    });
    });





/////////  
};
////begin insert filtered date  //

 








