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
    $(titleId).text(item.title.substring(0, 50) + "...");
    $(priceId).text('$'+item.price.toFixed(2));
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
