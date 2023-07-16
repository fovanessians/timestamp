// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
let bodyParser = require('body-parser');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get('/api/:date?', function(req, res) {
  let {date} = req.params;
  console.log(date);
  console.log(typeof date);
  //lengthOfDate = date.length;
  //console.log(lengthOfDate);
  
    let dateUTC = new Date(date);
    let dateUNIX = dateUTC.getTime(); 

    //let dateUTC = new Date(date).toISOString();
    console.log(dateUTC);
    console.log(dateUTC.getTime());
    console.log(typeof dateUTC);
    console.log(dateUTC.toString());
    stringDateUTC = dateUTC.toString();
    console.log(typeof stringDateUTC);
    //console.log(stringDateUTC.length);
    console.log(dateUNIX);
    console.log(typeof dateUNIX);
    dateNewValueOf = new Date(date).valueOf(); //UNIX
    console.log(dateNewValueOf)
    console.log(typeof dateNewValueOf);
  
    stringToNumDate = Number(date);
    console.log(typeof stringToNumDate);
    console.log(stringToNumDate);
    dateUTCFromString = new Date(stringToNumDate);
    
    console.log('_______________');
  if(date === undefined) {
    nowDateUTC = new Date(Date.now());
    res.json({unix: Date.now(), utc: nowDateUTC.toGMTString()}); 
  }

    else if(!isNaN(dateUTC.getTime())) {
    res.json({unix: dateUNIX, utc: dateUTC.toGMTString()});
  } else if(!isNaN(date)) {
    res.json({unix: stringToNumDate, utc: dateUTCFromString.toGMTString()}); //given UNIX date
  } else {
    res.json({ error : "Invalid Date" });
  }
    
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
