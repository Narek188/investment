$("#change_name").on('click', function () {    
    if (!$(this).hasClass('fa-times')) {
        $(this).parent().prev().find('span').hide();
        $(this).parent().prev().find('input').show();
        $(this).attr('class', 'fa fa-times');
    } else {
        $(this).parent().prev().find('span').show();
        $(this).parent().prev().find('input').hide();
        $(this).attr('class', 'fa fa-pencil');
    }    
});

$('.change_inp').on('input', function () {
    console.log($(this).parent().next().html('<i class="fa fa-check" aria-hidden="true"></i>'));
});