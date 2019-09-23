jQuery(document).ready(function($) 
{


	setTimeout(function() 
	{
		$('footer').nextAll('div').css('display', 'none');
	}, 5000);

	//********************************************************************************
	
	city1Tl = new TimelineMax({ paused: true });

	var $citySection = $('.city-section.city1');
	var $city = $citySection.find('.city');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	clearLisbonne();

	function clearLisbonne() {
      var clearcity1Tl = new TimelineMax();

      clearcity1Tl
       .set($citySection, { height: '0px', transformOrigin: "center center" })
		.set($city, { opacity: 0, transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearcity1Tl;
    }

	var chartController = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
    triggerElement: ".triggerCity1",
    triggerHook: 0.5,
    duration: 1
 	})
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      city1Tl.play();
    })
    .addIndicators()
    .addTo(chartController);

    city1Tl
		.to($citySection, 0.75, {height: '400px', paddingTop: '50px', paddingBottom: '50px', ease: Power2.easeOut})
		.to($city, 0.75, {opacity: 1, ease: Power2.easeOut}, '-=0.3')
		.to($cityOverlay, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.5')
		.to($cityTitle, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
		.staggerTo($cityBullets, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.25')
		.to($cityBtn, 1, {autoAlpha: 1, ease: Power4.easeOut}, '-=0.5');
	
	//********************************************************************************

	city2Tl = new TimelineMax({ paused: true });

	var $citySection = $('.city-section.city2');
	var $city = $citySection.find('.city');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	clearLisbonne();

	function clearLisbonne() {
      var clearcity2Tl = new TimelineMax();

      clearcity2Tl
       .set($citySection, { height: '0px', transformOrigin: "center center" })
		.set($city, { opacity: 0, transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearcity2Tl;
    }

	var chartController = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
    triggerElement: ".triggerCity2",
    triggerHook: 0.25,
    duration: 1
 	})
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      city2Tl.play();
    })
    .addIndicators()
    .addTo(chartController);

    city2Tl
		.to($citySection, 0.75, {height: '400px', paddingTop: '50px', paddingBottom: '50px', ease: Power2.easeOut})
		.to($city, 0.75, {opacity: 1, ease: Power2.easeOut}, '-=0.3')
		.to($cityOverlay, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.5')
		.to($cityTitle, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
		.staggerTo($cityBullets, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.25')
		.to($cityBtn, 1, {autoAlpha: 1, ease: Power4.easeOut}, '-=0.5');
	
	//********************************************************************************

	city3Tl = new TimelineMax({ paused: true });

	var $citySection = $('.city-section.city3');
	var $city = $citySection.find('.city');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	clearLisbonne();

	function clearLisbonne() {
      var clearcity3Tl = new TimelineMax();

      clearcity3Tl
       .set($citySection, { height: '0px', transformOrigin: "center center" })
		.set($city, { opacity: 0, transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearcity3Tl;
    }

	var chartController = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
    triggerElement: ".triggerCity3",
    triggerHook: 0.25,
    duration: 1
 	})
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      city3Tl.play();
    })
    .addIndicators()
    .addTo(chartController);

    city3Tl
		.to($citySection, 0.75, {height: '400px', paddingTop: '50px', paddingBottom: '50px', ease: Power2.easeOut})
		.to($city, 0.75, {opacity: 1, ease: Power2.easeOut}, '-=0.3')
		.to($cityOverlay, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.5')
		.to($cityTitle, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
		.staggerTo($cityBullets, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.25')
		.to($cityBtn, 1, {autoAlpha: 1, ease: Power4.easeOut}, '-=0.5');
	
	//********************************************************************************

	city4Tl = new TimelineMax({ paused: true });

	var $citySection = $('.city-section.city4');
	var $city = $citySection.find('.city');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	clearLisbonne();

	function clearLisbonne() {
      var clearcity4Tl = new TimelineMax();

      clearcity4Tl
       .set($citySection, { height: '0px', transformOrigin: "center center" })
		.set($city, { opacity: 0, transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearcity4Tl;
    }

	var chartController = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
    triggerElement: ".triggerCity4",
    triggerHook: 0.25,
    duration: 1
 	})
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      city4Tl.play();
    })
    .addIndicators()
    .addTo(chartController);

    city4Tl
		.to($citySection, 0.75, {height: '400px', paddingTop: '50px', paddingBottom: '50px', ease: Power2.easeOut})
		.to($city, 0.75, {opacity: 1, ease: Power2.easeOut}, '-=0.3')
		.to($cityOverlay, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.5')
		.to($cityTitle, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
		.staggerTo($cityBullets, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.25')
		.to($cityBtn, 1, {autoAlpha: 1, ease: Power4.easeOut}, '-=0.5');
	
	//********************************************************************************

	city5Tl = new TimelineMax({ paused: true });

	var $citySection = $('.city-section.city5');
	var $city = $citySection.find('.city');
	var $cityOverlay = $city.find('.city-overlay');
	var $cityTitle = $city.find('.city-title');
	var $cityBullets = $city.find('li');
	var $cityBtn = $city.find('button');

	clearLisbonne();

	function clearLisbonne() {
      var clearcity5Tl = new TimelineMax();

      clearcity5Tl
       .set($citySection, { height: '0px', transformOrigin: "center center" })
		.set($city, { opacity: 0, transformOrigin: "center center" })
		.set($cityTitle, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBullets, { autoAlpha: 0, x: 30, transformOrigin: "center center" })
		.set($cityBtn, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearcity5Tl;
    }

	var chartController = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
    triggerElement: ".triggerCity5",
    triggerHook: 0.5,
    duration: 1
 	})
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      city5Tl.play();
    })
    .addIndicators()
    .addTo(chartController);

    city5Tl
		.to($citySection, 0.75, {height: '400px', paddingTop: '50px', paddingBottom: '50px', ease: Power2.easeOut})
		.to($city, 0.75, {opacity: 1, ease: Power2.easeOut}, '-=0.3')
		.to($cityOverlay, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, '-=0.5')
		.to($cityTitle, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut})
		.staggerTo($cityBullets, 1, {autoAlpha: 1, x: 0, ease: Power4.easeOut}, 0.5, '-=0.25')
		.to($cityBtn, 1, {autoAlpha: 1, ease: Power4.easeOut}, '-=0.5');
	
	//********************************************************************************


});
