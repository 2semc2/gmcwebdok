//Back to top funktion
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 50,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
    //Få fat på back to top linket
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


//Spil lydfil på scroll
var playing = false;
var audioElm = $('#soundTour').get(0);
$(window).scroll(function() {
  var pageScroll = $(window).scrollTop();
  if(!playing && pageScroll > 1100 && pageScroll < 90000){
    audioElm.play();
    playing = true;
  }else if(pageScroll > 90000 || pageScroll < 500){
    audioElm.pause();
    playing = false;
  }
});
