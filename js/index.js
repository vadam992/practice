import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function() { 
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
});