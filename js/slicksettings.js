$(document).on('ready', function () {
	$('.gallery-slick').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 6000,
		infinite: true,
		mobileFirst: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	})
})
