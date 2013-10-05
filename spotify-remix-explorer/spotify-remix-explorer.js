if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to spotify-remix-explorer.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var request = Meteor.require('request');
    request('http://ws.spotify.com/search/1/track.json?q=artist%3aJustice', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        console.log(data);
      }
    })
  });
}
