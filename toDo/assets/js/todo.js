$('ul').on('click', 'li', function () {
  $(this).toggleClass('done');
});

$('i').click(function (e) {
  e.stopPropagation();
  $(this)
    .parent()
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});

$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    $('ul').append('<li>' + $(this).val() + '</li>');
    // console.log($(this).val());
    $(this).val('');
  }
});
