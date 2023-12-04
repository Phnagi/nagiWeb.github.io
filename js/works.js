const contianer = document.querySelector(".container");
const sections =gsap.utils.toArray(".container section");

function getScrollAmount(){
    let containerWidth = contianer.offsetWidth;
    return -(containerWidth - window.innerWidth) ;
}

// const tween = gsap.to(contianer,{
//     x: getScrollAmount,
//     duration:3,
//     ease:"none",

// });

// ScrollTrigger.create({
//     trigger:".containerWrapper",
//     start:"0%",
//     end: () => `+=${getScrollAmount() * -1}`,
//     pin:true,
//     animation:tween,
//     scrub:1,
//     // markers:true,

//     snap: {
// 			snapTo: 1 / (sections.length - 1),
// 			inertia: false,
// 			duration: {min: 1, max: 1}
// 	},
// })

// const tween = gsap.to(sections,{
//     xPercent: -100 * (sections.length -1 ),
//     ease: "none",
//     scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
// 		snap: {
// 			snapTo: 1 / (sections.length - 1),
// 			inertia: false,
// 			duration: {min: 1, max: 1}
// 		},
//     start:"top top",
//     end: "+=3000",
//     //snap: 1 / (sections.length - 1),
//     // markers: true,
    
//   }

// });

const tween = gsap.to(sections,{
    xPercent: -100 * (sections.length -1 ),
    ease: "none",
    scrollTrigger: {
    trigger: ".containerWrapper",
    pin: true,
    scrub: 1,
		snap: {
			snapTo: 1 / (sections.length - 1),
			inertia: false,
			duration: {min: 2, max: 2}
		},
    start:"top top",
    end: () => `+=${getScrollAmount() * -1}`,
    //snap: 1 / (sections.length - 1),
    // markers: true,
    
  }

});
