function startBar (text, time, options) {
	$('#loading-text').html(text)
	$('#preloader-1').fadeIn(300)
	$('.preloader-1').removeAttr('style')
	if (options) {
		if (options.color)
			$('.preloader-1').css('background-color', options.color)
		if (options.customCSS)
			$('.preloader-1').css(options.customCSS)
	}
	$('.preloader-1').stop().css({ width: '0px' }).animate({
		width: '98%',
	}, time, 'linear',
		function () {
			$('#preloader-1').fadeOut(600)
		});
};

$(function () {
	window.onload = (e) => {
		window.addEventListener('message', (event) => {
			var data = event.data;
			startBar(data.text, data.time, data.options)
		});
	};
});