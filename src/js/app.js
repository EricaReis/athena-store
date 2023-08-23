/* Populate New Arrivals section */
$.ajax({
  url: 'https://fakestoreapi.com/products/category/jewelery',
}).done(function (data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var imageId = $('#img-' + i);
    var titleId = $('#title-' + i);
    var priceId = $('#price-' + i);

    $(imageId).attr('src', item.image);
    $(titleId).text(item.title.substring(0, 30) + '...');
    $(priceId).text('$' + item.price.toFixed(2));
    $(".loader-jewelry").css('display','none');
  }
});

/* Scroll animation */
$('nav a').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset
  }, 500);
});

/* Carousel Config */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

/* Populate Products list section */
$.ajax({
  url: 'https://fakestoreapi.com/products/category/electronics',
}).done(function (data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var imageId = $('#eletronic-img-' + i);
    var titleId = $('#eletronic-title-' + i);
    var priceId = $('#eletronic-price-' + i);

    $(imageId).attr('src', item.image);
    $(titleId).text(item.title.substring(0, 30) + '...');
    $(priceId).text('$' + item.price.toFixed(2));
    $(".loader-eletronics").css('display','none');
  }
});

/* Set mobile header */
var width = $(window).width();
var height = $(window).height();

if (width < 1024) {
  for (var i = 0; i <= 2; i++) {
    var mobileBannerId = $('#swiper-image'+i)

    $(mobileBannerId).attr('src', './assets/'+'mobile-banner'+i+'.png');
  }
}

/* Verify screen size changes */
$(window).resize(function () {
  if ($(window).width() < 1024) {
    for (var i = 0; i <= 2; i++) {
      var mobileBannerId = $('#swiper-image'+i)

      $(mobileBannerId).attr('src', './assets/'+'mobile-banner'+i+'.png');
    }
  } else if ($(window).width() >= 1024) {
    for (var i = 0; i <= 2; i++) {
      var bannerId = $('#swiper-image'+i);

      $(bannerId).attr('src', './assets/'+'banner'+i+'.png');
    }
  }
});

/* Handle mobile header menu */
$(document).ready(function() {
  $('.btn-open-mobile').click(function () {
      $('.mobile-navbar').addClass('open');
      $("body").css('overflow','hidden');
  });

  $('.link-menu').click(function () {
    $('.mobile-navbar').removeClass('open');
    $("body").css('overflow','visible');
  });

  $('.btn-close-menu').click(function () {
    $('.mobile-navbar').removeClass('open');
    $("body").css('overflow','visible');
  });
});
