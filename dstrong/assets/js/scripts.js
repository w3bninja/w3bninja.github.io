$(function () {
	function vidH( element, height ) {
	  $( ".square" ).text(height);
	}
	function vidW( element, width ) {
	  $( ".square" ).text(width);
	}
	
	TweenLite.defaultEase = Linear.easeNone;
	
	
	//show the square only once js has run
	//visibility set to hidden in css panel
	TweenLite.set(".square", {visibility:"visible"});
	
	
	//320 - iPhone5
	var tl = new TimelineLite();
	tl.fromTo(".sq1 .b1", 10, {height:0}, {height:290})
	.fromTo(".sq1 .b2", 10, {width:0}, {width:290})
	.fromTo(".sq1 .b3", 10, {height:0}, {height:290})
	.fromTo(".sq1 .b4", 10, {width:0}, {width:290})
	
	tl.timeScale(4) //play faster
	
	//375 - iPhone6
	var tl = new TimelineLite();
	tl.fromTo(".sq2 .b1", 10, {height:0}, {height:345})
	.fromTo(".sq2 .b2", 10, {width:0}, {width:345})
	.fromTo(".sq2 .b3", 10, {height:0}, {height:345})
	.fromTo(".sq2 .b4", 10, {width:0}, {width:345})
	
	tl.timeScale(4) //play faster
	
	//414 - iPhone6 Plus
	var tl = new TimelineLite();
	tl.fromTo(".sq3 .b1", 10, {height:0}, {height:355})
	.fromTo(".sq3 .b2", 10, {width:0}, {width:355})
	.fromTo(".sq3 .b3", 10, {height:0}, {height:355})
	.fromTo(".sq3 .b4", 10, {width:0}, {width:355})
	
	tl.timeScale(4) //play faster
	
	//full - Desktop
	var tl = new TimelineLite();
	tl.fromTo(".sq4 .b1", 10, {height:0}, {height:590})
	.fromTo(".sq4 .b2", 10, {width:0}, {width:590})
	.fromTo(".sq4 .b3", 10, {height:0}, {height:590})
	.fromTo(".sq4 .b4", 10, {width:0}, {width:590})
	
	tl.timeScale(4) //play faster
	
	
	$('.panel.toggle .panel-heading').click(function(e){
		e.preventDefault();
		$(this).parent().find('.show-hide').toggle();
    });
    $('#mypanel').enhanceWithin().panel();
	
	$(".nav-accordion li:has(ul li)").find("a:first").addClass("subs");
	$( "<i class='fa fa-chevron-down'></i>" ).appendTo( ".nav-accordion .subs" );
	$('.nav-accordion .subs i').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('ul').toggle();
    });
	
	$( "body>[data-role='panel']" ).panel();
	
	$('.nav-accordion .video-container .subs').click(function(){
	  $('i').toggleClass('pause play');
	});
	
	
	$(".nav-accordion-video li:has(ul li)").find("a:first").addClass("subs");
	$('.nav-accordion-video .subs i').click(function(e){
		e.preventDefault();
    });
	
	
	$.fn.makeItFit = function() {
		$(this).each(function() {
			var set = $(this);
			var setVideo = set.find('.video');
			var setPlay = set.find('.play');
			var setPause = set.find('.pause');

			set.fitVids();
			// Iframe/player variables
			var iframe = $(setVideo)[0];
			var player = $f(iframe);
			// Open on play
			$(setPlay).click(function(){
				$(setPause).addClass('show')
				$(setPlay).addClass('hide')
				player.api("play");
				$(setPlay).parent().parent().find('ul').toggle();
			})

			// Closes on click outside
			$(setPause).click(function(){
				$(setPause).removeClass('show')
				$(setPlay).removeClass('hide')
				setTimeout(function() {}, 300);
				player.api("pause");
				$(setPause).parent().parent().find('ul').toggle();
			});
		});
	};
	if ($('.video-container').length > 0) {
		$('.video-container').makeItFit();
	}
	
	
	
	
	
	// Setting default page transition to slide
    $.mobile.defaultPageTransition = 'slide';
//	$.mobile.transitionFallbacks.slideout = "none";

});

