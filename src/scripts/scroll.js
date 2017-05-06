$(function() {
    $('a.page-scroll[href^="#"], a.page-scroll[href^="."], #feedback').click( function(){ 
	    var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });
    
    $('#feedback').click( function() {
        $('.tabs a[href="#tab-1"]').tab('show');
    });
    
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });
    
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

});