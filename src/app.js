$.ajax({
  url: 'https://fakestoreapi.com/products/category/jewelery',
  beforeSend: function (xhr) {
    xhr.overrideMimeType('text/plain; charset=x-user-defined');
  },
}).done(function (data) {
  console.log('retorno datadd', data)
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


