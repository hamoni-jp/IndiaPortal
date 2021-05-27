$(document).on('click', '.hamburger', function () {

  if (!$('.drawerNav').is(':visible') && $('.drawerNav').is(':animated') == false) {
    $('.drawerNav').stop().fadeIn();
    $('.hamburger').addClass('active');
  } else if ($('.drawerNav').is(':visible') && $('.drawerNav').is(':animated') == false) {
    $('.drawerNav').stop().fadeOut();
		$('.hamburger').removeClass('active');
  }
  
})