console.log("The bottttt iss startingggggg!!!!!!");

var Twit = require('twit');

//path of config.js
var config = require('./config');
var T = new Twit(config);
  
//the message we want to post
var tweet_message = {
  status: 'My First Tweet using #TwitterAPI and #NodeJS'
}

//This posts our tweet
T.post('statuses/update', tweet_message, tweetIt);

//our callback function
function tweetIt(err, data, response){
  if (err) {
    console.log("Something went wrong : " + err);
  } else {
    console.log(tweet);
  }
}
