
var Botkit = require('botkit');
var Forecast = require('forecast.io');
var ip = require('ip');
var makeid = require('getlocation');
var options = {APIKey:process.env.FORECASTTOKEN};
var forecast = new Forecast(options);

//var childProcess = require("child_process");

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.ALTCODETOKEN,
}).startRTM()

// give the bot something to listen for.
//controller.hears('string or regex',['direct_message','direct_mention','mention'],function(bot,message) {
controller.hears('weather',['mention', 'direct_mention','direct_message'], function(bot,message) 
{
  console.log(message);
  var latitude = "48.208579"
  var longitude = "16.374124"

  var ip2location = require('ip-to-location');
 
ip2location.fetch('209.58.139.51', function(err, res){
    console.log(res);
    //  {  
    //     ip: '209.58.139.51', 
    //     country_code: 'US', 
    //     country_name: 'United States', 
    //     region_code: 'CA', 
    //     region_name: 'California', 
    //     city: 'San Jose', 
    //     zip_code: '95131', 
    //     time_zone: 'America/Los_Angeles', 
    //     latitude: 37.3874, 
    //     longitude: -121.9024, 
    //     metro_code: 807  
    // } 
})
 
  
  forecast.get(latitude, longitude, function (err, res, data) 
	{
      if (err) throw err;
      //console.log('res: ' + JSON.stringify(res));
      //console.log('data: ' + JSON.stringify(data));
      var w = data.currently.summary + " and feels like " + data.currently.apparentTemperature;
  	  bot.reply(message,w);
   });

});

