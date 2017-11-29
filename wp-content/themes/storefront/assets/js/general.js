
var $ = jQuery;
var console;
console.log('waddup');
$(document).ready(function(){
  
  $('.menu-link-expanded').click(function(e){
    //stops sub menu clicks from minimizing
    e.stopPropagation();
  })

  $('.menu-logo,.mobile-logo').click(function(){
    $('body').removeClass('instant-page-active');
    $('.menu').removeClass('fixed');
    $('.instant-page').hide();
    $('body,html').removeClass('popup-active');
    $('.menu').removeClass('expanded');
  });

  var hash = window.location.hash;
  if(hash.length > 1){
    setTimeout(function(){
      $('html, body').animate({
          scrollTop: ($('.' + (hash.replace('#', ''))).offset().top) - 30
      }, 500);
    },500);
  }

  $('.country-arrow').click(function(){
    if($('.country-select').hasClass('sweden')){
      $('.country-select').removeClass('sweden').addClass('english');
    }
    else {
      $('.country-select').removeClass('english').addClass('sweden');
    }
  });
  $('.country-button,.country-flag').click(function(){
    if($('.country-select').hasClass('sweden')){
      window.location.href = "http://www.vardskapet.se/sv/?lang=sv"
    }
    else {
      window.location.href = "http://www.vardskapet.se/?lang=en"
    }
  });

  $('#menu-link-hostmanship').click(function(){
    $('body').addClass('instant-page-active');
    $('.hostmanship-page').show();
    $('.partnership-page').hide();
    $('.menu').addClass('fixed');
  });
  $('#menu-link-partnership').click(function(){
    $('body').addClass('instant-page-active');
    $('.partnership-page').show();
    $('.hostmanship-page').hide();
    $('.menu').addClass('fixed');
  });

  $('.menu-link').click(function(){
    $('body,html').removeClass('popup-active');
    $('.menu').removeClass('expanded');
  })

  $('.get-contacted').click(function(){
    console.log('click');
    $('.get-contacted-popup').addClass('active');
    $('body,html').addClass('popup-active');
  });

  $('.hamburger').click(function(){
    $('.menu').toggleClass('expanded');
    if($('.menu').hasClass('expanded')){
      $('body,html').addClass('popup-active');
    }
    else {
      $('body,html').removeClass('popup-active');
    }
    
  });

  $('.client-modal-close').click(function(){
    $('.client-modal').removeClass('active');
    $('body,html').removeClass('popup-active');
  });

  $(window).scroll(checkMenu);

  function checkMenu(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 0){
      $('.menu').addClass('fixed');
      $('section.main-content').addClass('active');
      $('.video-header').addClass('inactive');
    }
    else {
      $('.menu').removeClass('fixed');
      $('.video-header').removeClass('inactive');
      $('section.main-content').removeClass('active');
    }    
  }

  checkMenu();
});

var slideURL = '';