jQuery(document).ready(function($) 
{


	setTimeout(function() 
	{
		$('footer').nextAll('div').css('display', 'none');
	}, 5000);
	
	LisbonneTL = new TimelineMax({ paused: true });

	var $citySection = $('.city-section');
	var $city = $citySection.find('.city');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	clearLisbonne();

	function clearLisbonne() {
      var clearLisbonneTl = new TimelineMax();

      clearLisbonneTl
       .set($citySection, { height: '0px', transformOrigin: "center center" })
		.set($city, { opacity: 0, transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearLisbonneTl;
    }

	var chartController = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
    triggerElement: ".triggerLisbonne",
    triggerHook: 0.5,
    duration: 1
 	})
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      LisbonneTL.play();
    })
    .addIndicators()
    .addTo(chartController);

    LisbonneTL
		.to($citySection, 0.75, {height: '400px', paddingTop: '50px', paddingBottom: '50px', ease: Power2.easeOut})
		.to($city, 0.75, {opacity: 1, ease: Power2.easeOut}, '-=0.3')
		.to($cityOverlay, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.5')
		.to($cityTitle, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
		.staggerTo($cityBullets, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.25')
		.to($cityBtn, 1, {autoAlpha: 1, ease: Power4.easeOut}, '-=0.5');
	




});
