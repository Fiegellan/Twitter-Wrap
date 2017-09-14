const Twitter = require('twitter');

const twitterClient = new Twitter({
  consumer_key: ' ',
  consumer_secret: ' ',
  access_token_key: ' ',
  access_token_secret: ' '
});

var streaming = twitterClient.stream('statuses/filter', {track: 'Autodesk'});
streaming.on('data', function(event) {
  $('#tweets').text(event.text);
  console.log(event && event.text);
});

  streaming.on('error', function(error) {
    throw error;
  });
