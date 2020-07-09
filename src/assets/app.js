// $(document).ready(function() {
//   var urls = ['./assets/images/background1p.jpg', './assets/images/background2p.jpg', './assets/images/background3p.jpg'];
//   var cout = 1;
//   $('header').css('background-image', 'url("' + urls[0] + '")');
//   setInterval(function() {
//     $('header').css('background-image', 'url("' + urls[cout] + '")');
//     cout == urls.length-1 ? cout = 0 : cout++;
//   }, 5000);
// });

// Wait 4 seconds to execute the function that changes the background image.
$(document).ready(function() {
  var urls = ['./assets/images/background1p.jpg', './assets/images/background2p.jpg', './assets/images/background3p.jpg'];
  var cout = 1;
  $('header').css('background-image', 'url("' + urls[0] + '")');
  setTimeout(
    setInterval(function() {
      $('header').css('background-image', 'url("' + urls[cout] + '")');
      cout == urls.length-1 ? cout = 0 : cout++;
    }, 5000), 4000)
});

// Dissolve background image
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 500) {
      $('.dissolve').css({'opacity' : '0'})
    } else {
      $('.dissolve').css({'opacity' : '1'})
    }
  })
});

// Scroll from ofertas to HomeComponent
$(document).ready(function () {
  $('#ofertas').click(function() {
  $('html, body').animate({
    scrollTop: $("#home").offset().top
  }, 1000)
})
});


