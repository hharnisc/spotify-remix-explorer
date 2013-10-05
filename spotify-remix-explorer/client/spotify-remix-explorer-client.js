remixStream = new Meteor.Stream('remixStream');

if (Meteor.isClient) {
  Meteor.startup(function () {
      // do stuff at startup here
  });
}
