var apiKey = require('./../.env').apiKey;

function Github(){
}

Github.prototype.getUser = function(user, userResults) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){

    var avatarUrl = response.avatar_url;
    var name = response.name;
    var login = response.login;

    userResults(avatarUrl, name, login);


  }).fail(function(error){
    $('#gh-username').text("No username found...");
  });
    $('#gh-username').text("");
};

Github.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey, function(response){
    $('#gh-repo').empty();
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
};

exports.githubModule = Github;
