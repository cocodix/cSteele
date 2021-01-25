$('ul').on('click', 'li', function () {
  $(this).toggleClass('done');
});

$('li span i').click(function (e) {
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

$('#plus').click(function () {
  let inputVar = $('input[type="text"]');
  if (inputVar.css('display') === 'inline-block') {
    inputVar.css('display', 'none');
  } else {
    inputVar.css('display', 'inline-block');
  }
});
