var express = require('express');
var app = express();

var cities = {
    "abad": {
        "city": "abad",
        "accentcity": "Abad",
        "region": "28",
        "population": null,
        "latitude": "22.432778",
        "longitude": "88.777778"
    },
    "abadgarh": {
        "city": "abadgarh",
        "accentcity": "Abadgarh",
        "region": "36",
        "population": null,
        "latitude": "29.581389",
        "longitude": "77.39"
    },
    "abadpura": {
        "city": "abadpura",
        "accentcity": "Abadpura",
        "region": "23",
        "population": null,
        "latitude": "31.316667",
        "longitude": "75.566667"
    }
};


app.get('/',function(req,res){
	console.log("----------------------");
	console.log("Here is the first city");
	console.log("Name: "+cities.abad.city);
	console.log("Region: "+cities.abad.region);
	console.log("Latitude: "+cities.abad.latitude);
	console.log("Longitude: "+cities.abad.longitude);
	console.log("----------------------");
	console.log("----------------------");
	console.log("----------------------");
	console.log("----------------------");
	console.log("Here is the second city");
	console.log("Name: "+cities.abadgarh.city);
	console.log("Region: "+cities.abadgarh.region);
	console.log("Latitude: "+cities.abadgarh.latitude);
	console.log("Longitude: "+cities.abadgarh.longitude);
	console.log("----------------------");
	res.send("Please check your console");
});

app.listen(5000);