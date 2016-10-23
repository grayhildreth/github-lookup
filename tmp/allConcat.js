var Github = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var currentUserObject = new Github();
  $('#searchUsers').click(function() {
    var username = $('#user').val();
    $('#user').val("");
    currentUserObject.getUser(username);
    currentUserObject.getRepos(username);
  });
});
