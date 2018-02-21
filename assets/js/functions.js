//Back to top funktion
jQuery(document).ready(function($){
	//hvornår "back to top" knappen skal vises frem i pixels 
	var offset = 50,
	        //hvornår "back to top" knappen skal blive gennemsigtig i pixels
		offset_opacity = 1200,
	        //animationen på scroll 
		scroll_top_duration = 700,
                //Få fat på "back to top" knappen 
		$back_to_top = $('.cd-top');

	//Gem eller vis "back to top" knap
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//Når du klikker på knappen bliver taget op til toppen
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 , //toppen af dokumentet
		 	}, scroll_top_duration
		);
	});

});


//Spil lydfil på scroll
var playing = false; //afspilning sat til falsk 
var audioElm = $('#soundTour').get(0); //værdien er sat til 0 
$(window).scroll(function() { //scroll funktionen bliver sat i gang 
  var pageScroll = $(window).scrollTop(); //
  if(!playing && pageScroll > 1100 && pageScroll < 90000){ //når man scroller 1100px nedaf så starter lyden
    audioElm.play();
    playing = true; //så bliver funktionen sat i gang  
  }else if(pageScroll > 90000 || pageScroll < 500){ //hvis den er mindre end 500px, så stopper lyden 
    audioElm.pause();
    playing = false; //så bliver funktionen sat i gang 
  }
});
