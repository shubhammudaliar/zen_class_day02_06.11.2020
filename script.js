
// 1. create a request variable
var request = new XMLHttpRequest();

// open a conncetion
request.open("GET", "https://restcountries.eu/rest/v2/all", true)

// sending a request
request.send();

// load the response
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    data.forEach(element => {
        console.log(element.flag)
    });
}
