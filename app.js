// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function build table
function buildTable(data){
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

        console.table(Object.values(dataRow));
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Event that calls a function name it handleClick
function handleClick(){
    d3.event.preventDefault() 
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if (date){
        // Apply filter to table data to keep the rows where datetime value = filter value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);