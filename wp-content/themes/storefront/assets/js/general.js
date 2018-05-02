
var $ = jQuery;
var console;
console.log('waddup');

var countries = [
  {
    flag:'sweden.png',
    link: 'http://www.vardskapet.se',
    text: 'Välkommen in',
    video: 'swe.mp4'
  },
  {
    flag: 'denmark.png',
    link: 'http://xn--vrtskabet-g3a.dk/',
    text: 'Velkommen',
    video: 'norge.mp4'
  },
  {
    flag: 'uganda.png',
    link: 'http://uganda.hostmanship.com',
    text: 'Welcome',
    video: 'uganda.mp4'
  },
  {
    flag: 'norway.png',
    link: 'http://www.vertskapet.no/',
    text: 'Velkommen',
    video: 'norge.mp4'
  },
  {
    flag: 'turkey.png',
    link: '/contact#turkey',
    text: 'Karşılama',
    video: 'turkey.mp4'
  }
];
var currentCountry = 0;
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

  $('.mobile-logo').click(function(){
    window.location.href = "/";
  });

  var hash = window.location.hash;
  if(hash.length > 1){
    setTimeout(function(){
      $('html, body').animate({
          scrollTop: ($('.' + (hash.replace('#', ''))).offset().top) - 30
      }, 500);
    },500);
  }

  $('#select-right').click(function(){
    currentCountry++;
    if(currentCountry >= countries.length){
      currentCountry = 0;
    }
    swapCountry();
  });
  $('#select-left').click(function(){
    currentCountry--;
    if(currentCountry <= 0){
      currentCountry = countries.length-1;
    }
    swapCountry();
  });

  function swapCountry(){
    $('.country-select .country-flag').attr('src','/wp-content/themes/storefront/assets/images/' + countries[currentCountry].flag);
    $('video.video').attr('src','/wp-content/themes/storefront/assets/videos/' + countries[currentCountry].video);
    $('.country-button').text(countries[currentCountry].text)
  }
  $('.country-button,.country-flag').click(function(){
    window.location.href = countries[currentCountry].link;
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

  $('.expandable .entry-title').click(function(){
    var isActive = $(this).parent().hasClass('active');
    if(isActive){
      $(this).parent().find('.entry-expanded').slideUp();
    }
    else {
      $(this).parent().find('.entry-expanded').slideDown();
    }
    $(this).parent().toggleClass('active');

  });

  if(window.location.hash){
    $(window.location.hash + '.entry-title').trigger('click');
  }

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