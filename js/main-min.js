jQuery(document).ready(function(e){LisbonneTL=new TimelineMax({paused:!0});var t=e(".city-section"),n=t.find(".city"),a=n.find(".city-overlay"),o=n.find(".city-title"),r=n.find("li"),i=n.find("button");(new TimelineMax).set(t,{height:"0px",transformOrigin:"center center"}).set(n,{opacity:0,transformOrigin:"center center"}).set(o,{autoAlpha:0,x:30,transformOrigin:"center center"}).set(r,{autoAlpha:0,x:30,transformOrigin:"center center"}).set(i,{autoAlpha:0,transformOrigin:"center center"});var s=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".triggerLisbonne",triggerHook:.5,duration:1}).offset(0).on("enter",function(e){LisbonneTL.play()}).addIndicators().addTo(s),LisbonneTL.to(t,.75,{height:"400px",paddingTop:"50px",paddingBottom:"50px",ease:Power2.easeOut}).to(n,.75,{opacity:1,ease:Power2.easeOut},"-=0.3").to(a,.5,{autoAlpha:0,ease:Power2.easeOut},"-=0.5").to(o,1,{autoAlpha:1,x:0,ease:Power4.easeOut}).staggerTo(r,1,{autoAlpha:1,x:0,ease:Power4.easeOut},.5,"-=0.25").to(i,1,{autoAlpha:1,ease:Power4.easeOut},"-=0.5")});