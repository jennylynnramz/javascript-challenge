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

// unique dateTime 
var uniqueDatetime = data.map(event => event.datetime)
  .filter((value, index, self) => self.indexOf(value) === index)
console.log(uniqueDatetime)
// unique dateTime, producing functional list.

/////////
// Get dropdown element from DOM
var dropdown = document.getElementById("datetime-select");

// Loop through the array
for (var i = 0; i < uniqueDatetime.length; ++i) {
  // Append the element to the end of Array list
  dropdown[dropdown.length] = new Option(uniqueDatetime[i], uniqueDatetime[i]);
}
/////////

// unique city
var uniqueCity = data.map(event => event.city)
  .filter((value, index, self) => self.indexOf(value) === index)
uniqueCity.sort()
console.log(uniqueCity)
/////////
// Get dropdown element from DOM
var dropdown = document.getElementById("city-select");
// Loop through the array
for (var i = 0; i < uniqueCity.length; ++i) {
  // Append the element to the end of Array list
  dropdown[dropdown.length] = new Option(uniqueCity[i], uniqueCity[i]);
}
/////////

// unique state
var uniqueState = data.map(event => event.state)
  .filter((value, index, self) => self.indexOf(value) === index)
uniqueState.sort()
console.log(uniqueState)
/////////
// Get dropdown element from DOM
var dropdown = document.getElementById("state-select");
// Loop through the array
for (var i = 0; i < uniqueState.length; ++i) {
  // Append the element to the end of Array list
  dropdown[dropdown.length] = new Option(uniqueState[i], uniqueState[i]);
}
/////////

// unique Country
var uniqueCountry = data.map(event => event.country)
  .filter((value, index, self) => self.indexOf(value) === index)
uniqueCountry.sort()
console.log(uniqueCountry)
/////////
// Get dropdown element from DOM
var dropdown = document.getElementById("country-select");
// Loop through the array
for (var i = 0; i < uniqueCountry.length; ++i) {
  // Append the element to the end of Array list
  dropdown[dropdown.length] = new Option(uniqueCountry[i], uniqueCountry[i]);
}
/////////

// unique Shape
var uniqueShape = data.map(event => event.shape)
  .filter((value, index, self) => self.indexOf(value) === index)
uniqueShape.sort()
console.log(uniqueShape)
/////////
// Get dropdown element from DOM
var dropdown = document.getElementById("shape-select");
// Loop through the array
for (var i = 0; i < uniqueShape.length; ++i) {
  // Append the element to the end of Array list
  dropdown[dropdown.length] = new Option(uniqueShape[i], uniqueShape[i]);
}
/////////



/*  Use a date form in your HTML document and write JavaScript code that will listen for events 
and search through the date/time column to find rows that match user input. */


//// DATE FILTER /////
//button button, whose got the button
var button = d3.select("#date-filter-btn");
//select the form where we do the date input
var form = d3.select("#datetime-select");
//event handlers
button.on("click", runDate);
form.on("submit",runDate);
// Complete the event handler function for the form
function runDate() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime-select");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log("FILTERED DATA BELOW:");
  console.log(filteredData);
  //
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
};

////CITY FILTER////
//button button, whose got the button
var button = d3.select("#city-filter-btn"); //check
//select the form where we do the date input
var form = d3.select("#city-select"); //check
//event handlers
button.on("click", runCity);
form.on("submit",runCity);
// Complete the event handler function for the form
function runCity() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#city-select"); //check
  // Get the value property of the input element
  var inputValue = inputElement.property("value"); //check
  console.log(inputValue); //check
  console.log(tableData); //check
  var filteredData = tableData.filter(tableData => tableData.city === inputValue);
  console.log("FILTERED CITY DATA BELOW:");
  console.log(filteredData);
  //
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
};
///end city filter

///BEGIN STATE FILTER///
//button button, whose got the button
var button = d3.select("#state-filter-btn"); //check
//select the form where we do the date input
var form = d3.select("#state-select"); //check
//event handlers
button.on("click", runState);
form.on("submit",runState);
// Complete the event handler function for the form
function runState() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#state-select"); //check
  // Get the value property of the input element
  var inputValue = inputElement.property("value"); //check
  console.log(inputValue); //check
  console.log(tableData); //check
  var filteredData = tableData.filter(tableData => tableData.state === inputValue);
  console.log("FILTERED STATE DATA BELOW:");
  console.log(filteredData);
  //
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
};
/////COUNTRY filter

//button button, whose got the button
var button = d3.select("#country-filter-btn"); //check
//select the form where we do the date input
var form = d3.select("#country-select"); //check
//event handlers
button.on("click", runCountry);
form.on("submit",runCountry);
// Complete the event handler function for the form
function runCountry() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#country-select"); //check
  // Get the value property of the input element
  var inputValue = inputElement.property("value"); //check
  console.log(inputValue); //check
  console.log(tableData); //check
  var filteredData = tableData.filter(tableData => tableData.country === inputValue);
  console.log("FILTERED COUNTRY DATA BELOW:");
  console.log(filteredData);
  //
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
};

//shape filter
//button button, whose got the button
var button = d3.select("#shape-filter-btn"); //check
//select the form where we do the date input
var form = d3.select("#shape-select"); //check
//event handlers
button.on("click", runShape);
form.on("submit",runShape);
// Complete the event handler function for the form
function runShape() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#shape-select"); //check
  // Get the value property of the input element
  var inputValue = inputElement.property("value"); //check
  console.log(inputValue); //check
  console.log(tableData); //check
  var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
  console.log("FILTERED COUNTRY DATA BELOW:");
  console.log(filteredData);
  //
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
};

 








