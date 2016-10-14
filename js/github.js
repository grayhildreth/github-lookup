var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){

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
