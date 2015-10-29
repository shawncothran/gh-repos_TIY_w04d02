$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

var tabBtns = $('.tabs a');

$.ajax('https://api.github.com/users/shawncothran').done(function(data){
  console.log(data);

  var name = $('.name');
  name.html(data.name);

  var avatar = $('.avatar');
  avatar.attr('src', data.avatar_url);

  var username = $('.username');
  username.html(data.login);

  var joined = $('.joined');
  joined.append(data.created_at);


});

$.ajax('https://api.github.com/users/shawncothran/repos').done(function(repoList){
  console.log(repoList);

  repoList.forEach(function(arr, index, array){
    var time = arr.updated_at;
    var repos = $('.repos');
    repos.append(
      "<article class='repo'><h2><a href='"
      + arr.html_url +
      "'>"
      + arr.name +
      "</a></h2><h3>Updated "
      + moment(time).fromNow() +
      "</h3></article>"
    );
  })
});

tabBtns.on('click', function(event){
  tabBtns.removeClass('active');
  $(this).addClass('active');

  event.preventDefault()
});
