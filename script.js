
// 1. create a request variable
var request = new XMLHttpRequest();

// open a conncetion
request.open("GET", "https://restcountries.eu/rest/v2/all" , true)

// sending a request
request.send();

// load the response
request.onload= function(){
    var data= JSON.parse(this.response);
    console.log(data);
}

// we are filtering flag key from all the object present in the url.
var flagurl = request.filter(newflag => newflag.flag);
console.log(flagurl);




