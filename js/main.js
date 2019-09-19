jQuery(document).ready(function($) 
{
	// INITIALISATION DU SLIDER
	// $('.bxslider').bxSlider({
	// 	//mode: 'fade'
	// });

	mainTl = new TimelineMax();
	var $city = $('.lisbonne');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	mainTl
		.set($city, { autoAlpha: 1, height: '0px', padding: '0px', transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });

	$('h3').click(function() 
	{
		mainTl
			.to($city, 1.5, {height: '300px', padding: '40px', ease: Power2.easeOut})
			.to($cityOverlay, 1, {autoAlpha: 0, ease: Power2.easeOut})
			.to($cityTitle, 2, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
			.staggerTo($cityBullets, 2, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.5')
			.to($cityBtn, 2, {autoAlpha: 1, ease: Power4.easeOut}, '-=1.0');
	});

	
		// .to($sideContainer, transitionTiming, {width: 0, ease: Power4.easeOut, className:"-=is-visible"}, '-=' + transitionTiming);

	// var transitionTiming = 1;

	// mainTl = new TimelineMax();
	// var $mapContainer = $('.map-container');
	// var $sideContainer = $('.side-container');

	// $mapContainer.click(function() 
	// {
	// 	if($sideContainer.hasClass('is-visible'))
	// 	{
	// 		mainTl
	// 			.to($mapContainer, transitionTiming, {width: '100%', ease: Power4.easeOut, className:"-=is-visible"})
	// 			.to($sideContainer, transitionTiming, {width: 0, ease: Power4.easeOut, className:"-=is-visible"}, '-=' + transitionTiming);
	// 	}
	// 	else
	// 	{
	// 		mainTl
	// 			.to($mapContainer, transitionTiming, {width: '50%', ease: Power4.easeOut, className:"-=is-visible"})
	// 			.to($sideContainer, transitionTiming, {width: '50%', ease: Power4.easeOut, className:"+=is-visible"}, '-=' + transitionTiming);
	// 	}
	// });

	 // $('.city').tilt({
	 // 		maxTilt: 10,
	 // 		perspective: 500,
	 // 		speed: 1500,
  //           glare: false,
  //           maxGlare: .2
  //       });




});
