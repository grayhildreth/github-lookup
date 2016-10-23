var apiKey = require('./../.env').apiKey;

function Github(){
}

Github.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#gh-user-pic').append('<img src=' + response.avatar_url + '>');
    $('#gh-fullname').append('Name: ' + response.name);
    $('#gh-username').append('Username: ' + response.login);
  }).fail(function(error){
    $('#gh-username').append("<h3>No username found...</h3>");
  });
    $('#gh-username').text("");
}

Github.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey, function(response){
    for(var i = 0; i < response.length; i++) {
      var description = response[i].description;
      var repo = response[i].name;
      if (description === null) {
        description = "";
        $('#gh-repo').append("<li>Repository: " + repo + "</li>");
      } else {
        $('#gh-repo').append("<li>Repository: " + repo + ": " + description + "</li>");
      }
    }
  }).fail(function(error){
    $('#gh-repo').text("");
  });
    $('#gh-repo').text("");
}

exports.githubModule = Github;
