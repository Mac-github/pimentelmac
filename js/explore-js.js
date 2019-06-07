$(document).ready(function(){
	$(window).scroll(function(){
		parallaxDiv();
		parallaxEfx();
		parallax();
	});

	function parallaxEfx(){
		var wScroll = $(window).scrollTop();
		$('.div-relative').css('background-position',
			'center '+(wScroll*0.5)+'px');
	}
	function parallaxDiv(){
		var divScroll = $(window).scrollTop();
		$('#logoDiv').css({
			'transform' : 'translate(0px, '+ divScroll/2 +'%)'
		});
		$('#paraImage').css({
			'transform' : 'translate(0px, -'+ divScroll/15 +'%)'
		});
		$('#mainDis').css({
			'transform' : 'translateX(1px, -'+ divScroll/5 +'% )'
		});
	}
	// function parallax(){
	// 	var pScroll = $(window).scrollTop();
	// 	$('.parallax-bg').css('background-position','center '+ (pScroll/10)+ 'px');
	// }

});