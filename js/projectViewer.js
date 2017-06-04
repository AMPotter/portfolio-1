'use strict';

var projectView = {};

projectView.pageLoader = function () {
    $('.project-template, .about-template, main section, #site-heading nav').hide();
    $('section[data-category="home"]').fadeIn(500);
};

projectView.tabSelector = function () {
    $('nav div').on('click', function() {
        var selected = $(this).attr('name');
        $('main section').hide();
        $(`section[data-category="${selected}"]`).fadeIn(500);
        $('#site-heading nav').slideToggle(400);
    });
};

projectView.togglePhoneMenu = function () {
    $('.icon-menu').on('click',function(){
        $('#site-heading nav').slideToggle(400);
    });
};

projectView.limitBlurb = function () {
    $('.blurb-body').hide();
    $('article').on('click', '.read-more', function(e){
        e.preventDefault();
        console.log( 'link got clicked' );
        if ($(this).text() === 'Read more →') {
            $(this).parent().find('*').fadeIn(500);
            $(this).html('Show less &larr;');
            $('body').animate({
                scrollTop: $(this).parent().offset().top
            }, 400);
        } else {
            $('body').animate({
                scrollTop: $(this).parent().offset().top
            }, 400);
            $(this).html('Read more &rarr;');
            $(this).parent().find('.blurb-body').hide();
        }
    });
};

$(document).ready(function () {
    projectView.togglePhoneMenu();
    projectView.pageLoader();
    projectView.tabSelector();
    projectView.limitBlurb();
});