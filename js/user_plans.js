var range = $('.price_search #range');
var rangeV = $('.price_search #rangeV');

//Changing range value and set value to span
function setValue() {
    var newValue = (range.val() - range.attr('min')) * 100 / (range.attr('max') - range.attr('min'));
    var newPosition = 10 - (newValue * 0.2);

    rangeV.html("<span>" + range.val() + "$</span>");

    rangeV.css('left', "calc(" + newValue + "% + (" + newPosition + "px))");
}

$(document).ready(function() {
    setValue();
});

$("#range").on('input', function() {
    !+range.val() ? $('.price_search .search_container button').fadeOut() : $('.price_search .search_container button').fadeIn();

    setValue();
});

//https://css-tricks.com/value-bubbles-for-range-inputs/

$('.mainContent .filter_button').on('click', function () {
    $('.mainContent .all_search_divs').slideToggle('slow');
});

$.getJSON('https://trial.mobiscroll.com/content/countries.json', function(value) {
    for (var i = 0; i < value.length; i++) {
        $('.mainContent .country_search select').append('<option value='+value[i].value+'>'+value[i].text+' <span>(152)</span> </option>');
    }
});

$(window).resize(function () {
    if (window.innerWidth < 900) {
        $('.mainContent .all_search_divs').slideUp('slow');
    }

    if (window.innerWidth > 899 && $('.mainContent .all_search_divs').is(":hidden")) {
        $('.mainContent .all_search_divs').slideDown('slow');
    }
});

//https://demo.mobiscroll.com/jquery/select/localization#
