import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function() {
  //accordion js
  $('.accordion__row').each(function() {
    $(this).click(function() {
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        $(this).removeClass('active');
        panel.style.display = "none";
      } else {
        $(this).addClass('active');
        panel.style.display = "block";
      }
    })
  })

  //fetch js
  fetch('https://retoolapi.dev/StDACM/bodrogi')
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
    console.log(datas);
    var cardElement = '';

    datas.map(function(data) {
      cardElement += '<a class="col-lg-3 card__box" href="'+ data.link +'">';
      cardElement += '<div class="card__image"><img src="'+ data.image +'" /></div>';
      cardElement += '<div class="card__info"><div class="card__title">'+ data.title +'</div><div class="card__category">'+ data.category +'</div><div class="card__button">'+ data.button_title +'</div></div>';
      cardElement += '</a>';
    })

    $('.card__row').append(cardElement);
  });
});