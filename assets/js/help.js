// Developer: Aaron Landry
// Built by: Envoc (envoc.com)

$.fn.gridBox = function() {
	var $gridbox = $(this).imagesLoaded( function() {
		$gridbox.each(function(){  
			 var $columns = $('.item',this);
			 var maxHeight = Math.max.apply(Math, $columns.map(function(){
				 return $(this).height();
			 }).get());
			 $columns.height(maxHeight);
		});
	});
};


$(function () {
	
	$('.grid-box').gridBox();
	
	$(window).resize(function() {
		$('.grid-box .item').removeAttr('style');
		$height = $('.grid-box .item').height();
		$('.grid-box .item').height($height);
		$('.parallax').parallax();
	});
	
	//Masonry Grid
	var $grid = $('.grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
		itemSelector: '.item'
	  });
	});
	
	$('.animate').inview();

	//Navigation helper
    $(".navigation-inner ul li").hover(function(){
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    }, function(){
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    });
	
	
	if ($('.sticky').length > 0) {
		// Sticky Element - Sticks the element to the top of the site
		$(".sticky").wrap("<div class='sticky-container'></div>");
		$(".sticky").wrap("<div class='sticky-container-inner'></div>");
		$(window).on('scroll', function () {
			var scrollTop	= $(window).scrollTop(),
			elementOffset	= $('.sticky-container').offset().top,
			distance		= (elementOffset - scrollTop);
			$(".sticky-container").height($(".sticky-container-inner").height());
			if(distance < 0){
				$('.sticky-container-inner').addClass('container-fixed');
			} else {
				$('.sticky-container-inner').removeClass('container-fixed');
			}
		});
		
	}
	// PARALLAX
	if ($('.parallax').length > 0) {
		$('.parallax').parallax();
	}
	
	// Push Navigation Menu
	$('.toggle-menu').jPushMenu({
		closeOnClickLink   : false,
		closeOnClickOutside: false
	});
	
	// Ticker
	if ($('#webticker').length > 0) { 
		$("#webticker ul").webTicker();
	}
	
	
	// Headers
	$('.page-header-inner').appendTo( $('.page-header') );
	// Sidebars
	 $('.sidebar-section').wrapAll('<div class="col-md-3 sidebar"/>');
	$('.sidebar-section').appendTo($('.sidebar-inner'));
	$('.sidebar').appendTo( $('.content-inner') );
	
	if ($('.sidebar').length > 0) { 
		$('.content-col').wrapAll('<div class="col-md-9"/>');
	}
	
	if ($('.cycle-carousel-wrap .box').length <= 5) { 
		$('.areas .controls').hide();
	}
	
	//responsive Tabs
	if ($('.responsiveTabs').length > 0) { 
		$('.responsiveTabs').responsiveTabs({
			rotate: false,
			startCollapsed:	'accordion',
			collapsible: 	'accordion',
			setHash: 		true,
			active:			0,
			scrollToAccordion: true
		});
	}

	
	
});



$(document).ready(function() {
	$('.pager .slide1').addClass('active');
	$('.cycle-slideshow').on('cycle-after', function(e, opts) {
		//console.log(opts.slideNum);
		var current = opts.slideNum;
		var previous = current - 1;
		//console.log(previous + '|' + current);
		$('.pager a').removeClass('active');
		$('.pager .slide' + current).addClass('active');
	});
	
	
	if ($('.nav-accordion').length > 0) {
		$(".nav-accordion li:has(ul li)").find("a:first").addClass("subs");
		$( "<i class='fa fa-angle-down'></i>" ).appendTo( ".nav-accordion .subs" );
		$('.nav-accordion .subs i').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('ul:first').toggle();
		});
	}
	
    $("img").error(function(){
        $(this).remove();
    });
	
	$(".fancy").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: true,
		width		: '70%',
		height		: '70%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	$(".fancy.ajax").fancybox({type: 'ajax'});
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0,
		margin		: 0
	});
	$(".signin-box").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0,
		margin		: 0
	});
	
	var offset = 220;
    var duration = 500;
	var scrollContainer = '.back-to-top';
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > offset) {
            $(scrollContainer).fadeIn(duration);
        } else {
            $(scrollContainer).fadeOut(duration);
        }
    });
    
	$(scrollContainer + ' a[data-link]').each(function() {
		$(this).on("click",function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
	});
});


