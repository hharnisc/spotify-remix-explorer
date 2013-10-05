// file: twitter.js
spotify = Npm.require("spotify");
spotifyFacade = {
  get: function(options) {
    return new spotify(options);
  }
};