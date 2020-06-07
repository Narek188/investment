var containerTag = '.modal';

//Show modal
$('header nav .navbar_items .companies_btn').on('click', function () {
    // $(containerTag).fadeIn();
    alert("companies_btn");
});

$('header nav .navbar_items .login_btn').on('click', function () {
    $(containerTag).fadeIn();
    // alert("login_btn");

    $(containerTag + ' .register_container').hide();
    $(containerTag + ' .login_container').slideDown();


    $(containerTag + ' .loginButton').removeClass('passive');
    $(containerTag + ' .loginButton').addClass('active');

    $(containerTag + ' .registerButton').removeClass('active');
    $(containerTag + ' .registerButton').addClass('passive');
    
});

$('header nav .navbar_items .regsiter_btn').on('click', function () {
    $(containerTag).fadeIn();

    $(containerTag + ' .login_container').hide();
    $(containerTag + ' .register_container').slideDown();
    
    $(containerTag + ' .registerButton').removeClass('passive');
    $(containerTag + ' .registerButton').addClass('active');

    $(containerTag + ' .loginButton').removeClass('active');
    $(containerTag + ' .loginButton').addClass('passive');

    // alert("regsiter_btn");
});

//Hide modal in close icon click
$(containerTag + ' .modalHeader .close_icon').on('click', function () {
    $(containerTag).fadeOut();
});

//Hide modal in outside click
$(containerTag).on('click', function (e) {
    if ($(e.target).parents(".modalContainer").length === 0) $(containerTag).fadeOut();
});

//Hide modal in escape click
$(document).keydown(function(e) {
    if ($(containerTag).css('display') == 'block') {
        if (e.keyCode == 27) $(containerTag).fadeOut();
    }
})

$(containerTag + ' .registerButton').on('click', function () {

    $(containerTag + ' .login_container').hide();
    $(containerTag + ' .register_container').slideDown();

    if ($(this).hasClass('passive')) {

        $(this).removeClass('passive');
        $(this).addClass('active');

        $(containerTag + ' .loginButton').removeClass('active');
        $(containerTag + ' .loginButton').addClass('passive');
    }
});

$(containerTag + ' .loginButton').on('click', function () {

    $(containerTag + ' .register_container').hide();
    $(containerTag + ' .login_container').slideDown();

    if ($(this).hasClass('passive')) {

        $(this).removeClass('passive');
        $(this).addClass('active');

        $(containerTag + ' .registerButton').removeClass('active');
        $(containerTag + ' .registerButton').addClass('passive');
    }
});