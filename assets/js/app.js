
// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Close mobile & tablet menu on item click
$('.navbar-item').each(function(e) {
  $(this).click(function(){
    if($('.navbar-burger').hasClass('is-active')){
      $('.navbar-burger').removeClass('is-active');
      $('#navMenu').removeClass('is-active');
    }
  });
});

// Open or Close mobile & tablet menu
$('.navbar-burger').click(function () {
  if($('.navbar-burger').hasClass('is-active')){
    $('.navbar-burger').removeClass('is-active');
    $('#navMenu').removeClass('is-active');
  }else {
    $('.navbar-burger').addClass('is-active');
    $('#navMenu').addClass('is-active');
  }
});
