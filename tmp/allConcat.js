var apiKey = require('./../.env').apiKey;


var GitHub = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var currentGitHubObject = new GitHub();
  $('#gh-username-button').click(function() {
    var ghUser = $('#gh-username-input').val();
    $('#gh-username-input').val("");
    currentGitHubObject.getRepos(ghUser);
  });
});

var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(ghUser) {
  $.get('https://api.github.com/users/' + ghUser + '?access_token=' + apiKey).then(function(response){
    $('#show-gh-user-profile-pic').empty();
    $('#show-gh-user-profile-pic').append("<img src=" + response.avatar_url + ">");
    $('#show-gh-user-username').empty();
    $('#show-gh-user-username').append("<h3 class='key'>Username: <span class='value'>" + response.login + "</span></h3>");
    $('#show-gh-user-full-name').empty();
    $('#show-gh-user-full-name').append("<h3 class='key'>Name: <span class='value'>" + response.name + "</span></h3>");
    $('#show-gh-user-url').empty();
    $('#show-gh-user-url').append("<h3 class='key'>GitHub URL: <span class='value'><a class='link' href='" + response.html_url + "'>" + response.html_url + "</span></h3>");


  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

exports.githubModule = GitHub;
