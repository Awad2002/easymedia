$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
      loop:true,
      margin:84,
      nav:true,
      animateIn:true,
      items:3,
      autoplay:true,
      autoplayTimeout:4000
    });
    
    owl.on('changed.owl.carousel', function(event) {
      setTimeout(function(){
        var activeEls = $('.owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
        setCarouselCaption( activeEls ); 
      },1);
    });
  
    function setCarouselCaption(el){
      $(".owl-item").removeClass("target");
      el.addClass("target");
    }
  
});

$(document).ready(function(){
    $('.2020-btn').click(function(){
      $(this).addClass('active');
      $('.2021-btn').removeClass('active');
      $('.2020').show();
      $('.2021').hide();
    })
});

$(document).ready(function(){
    $('.2021-btn').click(function(){
      $(this).addClass('active');
      $('.2020-btn').removeClass('active');
      $('.2021').show();
      $('.2020').hide();
    })
});

$('.zzzzzzz').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$('.btata').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  autoplayTimeout:1600,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.fgfg').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  autoplayTimeout:5000,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true
	});

	$.fn.fullpage.setAllowScrolling(true);
});