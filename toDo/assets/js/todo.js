$('ul').on('mouseenter', 'li', function () {
  let htmlCont = $(this).html();
  $(this).html('<span><a href="#"><i class="fas fa-trash-alt delete"></i></a> </span>' + htmlCont);
  addClick();
});

$('ul').on('mouseleave', 'li', function () {
  $('span').remove();
});

$('ul').on('click', 'li', function () {
  $(this).toggleClass('done');
});

function addClick() {
  $('a').click(function (e) {
    e.stopPropagation();
    $(this)
      .parent()
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
  });
}

$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    $('ul').append('<li>' + $(this).val() + '</li>');
    // console.log($(this).val());
    $(this).val('');
  }
});
