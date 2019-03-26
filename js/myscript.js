$(function() {
	var toggler = $('.toggler');

	toggler.on('click', function(event) {
		var scrollHeight = document.getElementsByClassName('nav')[0].scrollHeight;
		var maxHeight = parseInt($('.nav').css('max-height'));

		if(maxHeight) {
			$('.nav').css('max-height', 0);
		} else {
			$('.nav').css('max-height', scrollHeight + 'px');
		}
	});

	$('.people').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="icon-angle-left"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="icon-angle-right"></i></button>',
	  responsive: [
    {
      breakpoint: 1200,
      settings: {
      	slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
      	slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
      	slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
      	slidesToShow: 1,
      }
    },
  ]
	});
  $('.clients').slick({
    arrows: false,
    dots: true,
  });
});