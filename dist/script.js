const body = document.querySelector("body");

function locomotiv() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smoothMobile: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  let images = gsap.utils.toArray(".z-out");

  images.forEach((item, index) => {
    let exptl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "top 5%",
        scrub: 2,
        markers: true,
        scroller: ".main",
      },
    });
    exptl.from(item, {
      x: 100,
      opacity: 0,
      duration: 1,
    });
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiv();

function animationPart1() {
  var tl1 = gsap.timeline();

  tl1.from(".nav h1", {
    y: -300,
    duration: 0.5,
    opactiy: 0,
  });

  tl1.from(".nav-part2", {
    y: -300,
    duration: 0.5,
    opactiy: 0,
  });

  tl1.from(".nav-part3", {
    y: -300,
    duration: 0.5,
    opactiy: 0,
  });

  // tl1.from(".hero-1 .first-heading",{
  //     x:-150,
  //     duration:0.5,
  //     opactiy:0
  // })

  tl1.from(".first-heading", {
    x: -1500,
    duration: 0.5,
    opactiy: 0,
  });

  tl1.from(".hero-1 .second-heading", {
    x: 2000,
    duration: 0.5,
    opactiy: 0,
  });
}

animationPart1();

function animation2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".all-como",
      scroller: ".main",
      // markers:true,
      start: "top 20%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl2.from(".blur1", {
    y: 100,
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(".blur-2", {
    y: 11000,
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(".head-img", {
    transform: "scale(0)",
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(".hero-1-p", {
    transform: "scale(0)",
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(".all-como button", {
    x: 300,
    duration: 0.5,
    opacity: 0,
  });
}

animation2();

function animation3() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      scroller: ".main",
      start: "top 10%",
      end: "top -10%",
      trigger: ".hero-2",
      scrub: 2,
    },
  });

  tl3.from(".hero-2 .hero-2-heading-1", {
    x: 1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".hero-2-heding2", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".hero-2-pera", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".check-1", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".check-2", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".check-3", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".btn-2", {
    x: -1000,
    duration: 0.8,
    opacity: 0,
  });

  tl3.from(".hero-2-right img", {
    transform: "scale(0)",
    duration: 0.8,
    opacity: 0,
  });
}

animation3();

// gsap.to(".scro h6 ", {
//   transform: " translateX(69%)",
//   duration: 5,
//   repeat: -1,
//   ease: "none"
// },"move")

// gsap.to(".scro i ", {
//   transform: " translateX(69%)",
//   duration: 5,
//   repeat: -1,
//   ease: "none"
// },"move")

function animation4() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      scroller: ".main",
      trigger: ".hero-3",
      start: "top 40%",
      end: "top 20%",
      scrub: 3,
    },
  });

  tl4.from("#hero-3-heading-1", {
    y: 30,
    duration: 1,
    opacity: 0,
  });

  tl4.from("#hero-3-heading-2", {
    y: 30,
    duration: 1,
    opacity: 0,
  });

  tl4.from("#hero-3-heading-3", {
    y: 30,
    delay: 1,
    opacity: 0,
  });

  tl4.from(" #hero-3-heading-4", {
    y: 30,
    delay: 1,
    opacity: 0,
  });
}

animation4();

function animation5(){
  var tl5 = gsap.timeline({
    scrollTrigger: {
      scroller: ".main",
      trigger: ".card-container",
      // markers: true,
      start: "top 70%",
      end: "top 30%",
      scrub: 3,
    },
  });
  
  tl5.from(".card-1", {
    y: 30,
    duration: 1,
    opacity: 0,
  });
  
  tl5.from(".card-2", {
    y: -30,
    duration: 1,
    opacity: 0,
  });
  
  tl5.from(".card-3", {
    y: 30,
    duration: 1,
    opacity: 0,
  });
}


animation5()




var tl6 = gsap.timeline()


tl6.from("footer",{
  
})

