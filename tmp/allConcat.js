var Github = require('./../js/github.js').githubModule;

function userResults(avatarUrl, name, login){
  $('#gh-user-pic').empty();
  $('#gh-fullname').empty();
  $('#gh-username').empty();
  $('#gh-user-pic').append('<img src=' + avatarUrl + '>');
  $('#gh-fullname').append('Name: ' + name);
  $('#gh-username').append('Username: ' + login);
}

$(document).ready(function() {
  var currentUserObject = new Github();
  $('#searchUsers').click(function() {
    var username = $('#user').val();
    $('#user').val("");
    currentUserObject.getUser(username, userResults);
    currentUserObject.getRepos(username);
  });
});
