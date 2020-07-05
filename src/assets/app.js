
// $(document).ready(function() {
//   var urls = ['./assets/images/background1p.jpg', './assets/images/background2p.jpg', './assets/images/background3p.jpg'];
//   var cout = 1;
//   $('header').css('background-image', 'url("' + urls[0] + '")');
//   setInterval(function() {
//     $('header').css('background-image', 'url("' + urls[cout] + '")');
//     cout == urls.length-1 ? cout = 0 : cout++;
//   }, 5000);

// });

var timeWaiting = 1000;

$(document).ready(function() {
  var urls = ['./assets/images/background1p.jpg', './assets/images/background2p.jpg', './assets/images/background3p.jpg'];
  var cout = 1;
  var firstTime = true;
  $('header').css('background-image', 'url("' + urls[0] + '")');
  setInterval(function() {
    if(firstTime){
      $('html').css('background-image', 'url("' + urls[cout] + '")');   
    } else {
      $('header').css('background-image', 'url("' + urls[cout] + '")');
    }
    if(cout == urls.length-1){
      timeWaiting = 5000;
      firstTime = false;
      cout = 0;
      console.log(timeWaiting);
    } else {
      cout++;
    }
  }, timeWaiting);

});

