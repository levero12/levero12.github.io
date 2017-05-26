$(function() {


	$(".owl-carousel").owlCarousel({
		loop : true,	
		nav : true,
		navText : ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
		responsive:{
		0:{
			items:1
		},
		480:{
			items:2
		},
		768:{
			items:2
		},
		992:{
			items:3
		},
		1200:{
			items:4
		}
	}
		}
		);





	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

$('.sl').slick({
	  arrows:false,
	  infinity:true,
	  autoplay: true
	  });

/*$('.qwerty').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	  });*/

$('.qwerty').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,

        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.nappp').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});




