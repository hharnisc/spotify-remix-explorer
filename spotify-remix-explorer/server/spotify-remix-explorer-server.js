remixStream = new Meteor.Stream('remixStream');

if (Meteor.isServer) {
  Meteor.startup(function () {
    //remixStream.emit('update', {coords: data.geo.coordinates, lang: data.lang, msg:data.text});
  });
}
