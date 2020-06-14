$(".contacts-container table select").find('option').each(function (e) {
    if ($(this).text() == $(".contacts-container table select").next().text()) {
        $(this).attr('selected', true);
    }
});

$(".contacts-container table").find('i').each(function () {
    $(this).on('click', function () {
        if (!$(this).hasClass('fa-times')) {
            if ($(this).attr('id') == 'select_country') {
                $(this).parent().prev().find('select').show();
                $(this).parent().prev().find('span').hide();
                $(this).attr('class', 'fa fa-times');
            } else if ($(this).attr('id') == 'select_gender') {
                $(".contacts-container table #gender_td label").css('display', 'block');
                $(this).parent().prev().find('input').show();
                $(this).parent().prev().find('span').hide();
            } else {
                $(this).parent().prev().find('input').val($(this).parent().prev().find('span').text());
                $(this).parent().prev().find('span').hide();
                $(this).parent().prev().find('input').show();
                $(this).attr('class', 'fa fa-times');
            }
        } else {
            $(this).parent().prev().find('span').show();
            $(this).parent().prev().find('span').prev().hide();
            $(this).attr('class', 'fa fa-pencil');
        }    
    });
});

// $("#change_name").on('click', function () {    
//     if (!$(this).hasClass('fa-times')) {
//         $(this).parent().prev().find('span').hide();
//         $(this).parent().prev().find('input').show();
//         $(this).attr('class', 'fa fa-times');
//     } else {
//         $(this).parent().prev().find('span').show();
//         $(this).parent().prev().find('input').hide();
//         $(this).attr('class', 'fa fa-pencil');
//     }    
// });

// $('.change_inp').on('input', function () {
//     $(this).parent().next().html('<i class="fa fa-check" id="save_change" aria-hidden="true"></i>');

//     $(this).parent().next().find('i').on('click', function () {
//         $(this).parent().prev().find('span').show();
//         $(this).parent().prev().find('input').hide();
//         $(this).attr('class', 'fa fa-pencil');
//     });
// });