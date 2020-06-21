$(".contacts-container table select").find('option').each(function (e) {
    if ($(this).text() == $(".contacts-container table select").next().text()) {
        $(this).attr('selected', true);
    }
});

$(".contacts-container table").find('i').each(function () {
    $(this).on('click', function () {
        if ($(this).hasClass('fa-pencil')) {
            if ($(this).attr('id') == 'select_country') {
                $(this).parent().prev().find('select').show();
                $(this).parent().prev().find('span').hide();
                $(this).attr('class', 'fa fa-times');
            } else if ($(this).attr('id') == 'select_gender') {
                $(".contacts-container table #gender_td .gender_container").show();
                $(".contacts-container table #gender_td .gender_container input").show();

                $(this).parent().prev().find('span').hide();
                $(this).attr('class', 'fa fa-times');
            } else {
                $(this).parent().prev().find('input').val($(this).parent().prev().find('span').text());
                $(this).parent().prev().find('span').hide();
                $(this).parent().prev().find('input').show();
                $(this).attr('class', 'fa fa-times');
            }
        } else if ($(this).hasClass('fa-check')) {
            if (!$(this).parent().prev().find('input').length) {
                $(this).parent().prev().find('select').hide();
                $(this).parent().prev().find('span').text($(this).parent().prev().find('select option:selected').text());
            } else {
                if ($(this).parent().prev().find('input').attr('type') == 'radio') {
                    if ($(this).parent().prev().find('input:checked').attr('id') == 'female') {
                        $(this).parent().prev().find('span').text('Female');
                    } else if ($(this).parent().prev().find('input:checked').attr('id') == 'male') {
                        $(this).parent().prev().find('span').text('Male');
                    }

                    $(".contacts-container table #gender_td .gender_container").hide();
                    $(this).parent().prev().find('span').show();
                } else {
                    $(this).parent().prev().find('input').hide();
                    $(this).parent().prev().find('span').text($(this).parent().prev().find('input').val());
                    $(this).parent().prev().find('span').show();
                }

                $(this).attr('class', 'fa fa-pencil');
            }
        } else {
            $(this).parent().prev().find('span').show();
            $(this).parent().prev().find('span').prev().hide();
            $(this).attr('class', 'fa fa-pencil');
        }    
    });
});

$(".contacts-container table").find('input').each(function () {
    $(this).on('input', function () {
        $(this).parent().next().find('i').attr('class', 'fa fa-check');
    });
});

$(".contacts-container table").find('select').each(function () {
    $(this).on('change', function () {
        $(this).parent().next().find('i').attr('class', 'fa fa-check');
    });
});

$(".contacts-container table #gender_td .gender_container").find('input').each(function () {
    $(this).on('change', function () {
        $(this).parent().parent().parent().next().find('i').attr('class', 'fa fa-check');
    });
});