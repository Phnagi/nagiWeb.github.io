const beginBox = document.querySelector(".beginBox"),
      beginBoxLogo = document.querySelector(".beginBoxRowText > h1"),
      beginBoxContent = document.querySelector(".beginBoxRowText > h4"),
      beginBoxRowLine = document.querySelector(".beginBoxRowLine"),
      beginBoxMedia = document.querySelector(".beginBoxMedia"),
      beginBoxRowText2Li = document.querySelectorAll(".beginBoxRowText2Li"),
      beginBoxFigureImg = document.querySelector(".beginBoxFigure >img");



const initBeginBOx = () => {
    gsap.set(beginBoxLogo,{
        y:"101%"
    });
    gsap.set(beginBoxContent,{
        autoAlpha:0
    });
    gsap.set(beginBoxRowLine,{
        width:0
    });
    gsap.set(beginBoxFigureImg,{
        // height:0,
        scale:7,
        autoAlpha:0
    });
    gsap.set(beginBoxRowText2Li,{
        // height:0,
        y:"99%",
        autoAlpha:0
    });
    showBeginBox();

}



const showBeginBox = () => {

    gsap.timeline({defaults : {ease:"expo.out" }})
        // .fromTo(".cell",
        //     {
        //         height:"0",
        //         // scale:0.5,
                
        //     },{
        //         duration:1.25,
        //         height:"100%",
        //         // scale:1,
        //         stagger:0.025,
        //         ease:"expo.inOut",
                
        //     },
        //     0
        // )
        .to(
            beginBoxFigureImg,
            {
                duration:1.75,
                autoAlpha:1,
                scale:1,
                // height:"100%",
                stagger:0.055,
            },
            0
        )
        .to(
            beginBoxLogo,
            {
                duration:1.75,
                y:0,
                stagger:0.055,
            },
            0.75
        )
        .to(
            beginBoxContent,
            {
                duration:1,
                autoAlpha:1,
                y:0,
                ease:"expo.in",
                stagger:0.055,
            },
            0.75
        )
        .to(
            beginBoxRowLine,
            {
                duration:1.75,
                width:"500px",
                stagger:0.095,
            },
            0.75
        )
        .to(
            beginBoxRowText2Li,
            {
                duration:1.75,
                autoAlpha:1,
                y:0,
                stagger:0.095,
            },
            0.75
        );

};

// const splitAnimation = () => {
//     Splitting({
//         target:beginBoxMedia,
//         by:"cells",
//         image:true,
//         rows: 1,
//     });
// };


window.onload = () => {

    // splitAnimation();
    initBeginBOx();

};