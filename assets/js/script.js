$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  window.onabort('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
  });
})