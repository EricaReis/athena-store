/* Populate New Arrivals section */
$.ajax({
  url: 'https://fakestoreapi.com/products/category/jewelery',
}).done(function (data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var imageId = $('#img-'+i);
    var titleId = $('#title-'+i);
    var priceId = $('#price-'+i);

    $(imageId).attr('src', item.image);
    $(titleId).text(item.title.substring(0, 30) + "...");
    $(priceId).text('$'+item.price.toFixed(2));
  }
});

/* Carousel Config */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
});

/* Populate Products list section */
$.ajax({
  url: 'https://fakestoreapi.com/products/category/electronics',
}).done(function (data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var imageId = $('#eletronic-img-'+i);
    var titleId = $('#eletronic-title-'+i);
    var priceId = $('#eletronic-price-'+i);

    $(imageId).attr('src', item.image);
    $(titleId).text(item.title.substring(0, 30) + "...");
    $(priceId).text('$'+item.price.toFixed(2));
    console.log(item)
  }
});

/* Set mobile header */
if ((width < 1024) ) {
  $("#swiper-image").each(function() {
    $(this).attr("src", "./assets/mobile-banner0.png");
  });
}

/* Verify screen size changes */
var width = $(window).width();
var height = $(window).height();

$(window).resize(function(){
  if($(window).width() < 1024) {
   $("#swiper-image").each(function() {
     $(this).attr("src", "./assets/mobile-banner0.png");
               });
           } else if ($(window).width() >= 1024) {
               $("#swiper-image").each(function() {
               $(this).attr("src","./assets/banner0.png");
               });
   }
});


