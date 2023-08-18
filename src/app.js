$.ajax({
  url: 'https://fakestoreapi.com/products/category/jewelery',
  // beforeSend: function (xhr) {
  //   xhr.overrideMimeType('text/plain; charset=x-user-defined');
  // },
}).done(function (data) {
  $("#img-5").attr('src', data[0].image);
  $("#img-6").attr('src', data[1].image);
  $("#img-7").attr('src', data[2].image);
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


