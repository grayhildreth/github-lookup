(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "06f50f521f2e91875e2f38f00baf9d5dfc943206";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Github(){
}

Github.prototype.getUser = function(user, userResults) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){

    var avatarUrl = response.avatar_url;
    var name = response.name;
    var login = response.login;

    userResults(avatarUrl, name, login);

    // $('#gh-user-pic').empty();
    // $('#gh-fullname').empty();
    // $('#gh-username').empty();
    // $('#gh-user-pic').append('<img src=' + response.avatar_url + '>');
    // $('#gh-fullname').append('Name: ' + response.name);
    // $('#gh-username').append('Username: ' + response.login);
  }).fail(function(error){
    $('#gh-username').text("<h3>No username found...</h3>");
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/github.js":2}]},{},[3]);
