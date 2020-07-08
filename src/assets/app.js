$(document).ready(function() {
  var urls = ['./assets/images/background1p.jpg', './assets/images/background2p.jpg', './assets/images/background3p.jpg'];
  var cout = 1;
  $('header').css('background-image', 'url("' + urls[0] + '")');
  setInterval(function() {
    $('header').css('background-image', 'url("' + urls[cout] + '")');
    cout == urls.length-1 ? cout = 0 : cout++;
  }, 5000);
});

