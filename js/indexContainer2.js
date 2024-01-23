const aboutH2 = document.querySelector(".aboutH2");
let isPinned = false;
let isPinned2 = false;
let isPinned3 = false;
let begin = document.querySelector(".begin");
let container1 = document.querySelector(".container1");
let textBox = document.querySelector(".textBox");
let scaleText = document.querySelector(".scaleText");
let aboutH2C = document.querySelector(".aboutH2");
let blackWall = document.querySelector(".blackWall");
let worksH2C= document.querySelector(".worksH2");
let workContianer = document.querySelector(".workContianer");
let windowHeight = window.innerHeight;
let scaleText2C = document.querySelector(".scaleText2");
let Y =window.scrollY;
const observer = new IntersectionObserver(([e]) => {
    // console.log(e);
    isPinned = (e.intersectionRatio > 0.9 );
    e.target.classList.toggle("pinned",isPinned);
},{threshold:[0.9]});

const worksH2 = document.querySelector(".worksH2");

const observer2 = new IntersectionObserver(([e]) => {
    isPinned2 = (e.intersectionRatio > 0.9);
    e.target.classList.toggle("pinned",isPinned2);
    // console.log(isPinned2)
},{threshold:[0.9]});
observer2.observe(worksH2);

// const scaleText2 = document.querySelector(".scaleText2");
let worksText = document.querySelector(".worksText");
let scaleTextContentBox = document.querySelector(".scaleTextContentBox");
let scaleTextImg = document.querySelector(".scaleTextImg");
let scale2TextImg = document.querySelector(".scale2TextImg");
// const observer3 = new IntersectionObserver(([e]) => {
//     isPinned3 = (e.intersectionRatio>0.99);
//     // e.target.classList.toggle("worksTextAnimate",isPinned3);
//     worksText.classList.toggle("worksTextAnimate");
//     // console.log(e)
// },{threshold:[0.99]});
// observer3.observe(scaleText2);


observer.observe(aboutH2);
document.addEventListener("scroll",(e) => {
    if(isPinned){
        textBox = document.querySelector(".textBox");
        begin = document.querySelector(".begin");
        container1 = document.querySelector(".container1");
        let topHeight = begin.clientHeight + container1.clientHeight;
        let html = document.documentElement;
        let height =parseInt(getComputedStyle(aboutH2).getPropertyValue("height"))+
        parseInt(getComputedStyle(aboutH2).getPropertyValue("margin-bottom"));//parseInt 因為帶回來會有px單位所以把他轉成數字 
        let marginTop = parseInt(getComputedStyle(aboutH2).getPropertyValue("margin-top")) ;
        let scrolled = (html.scrollTop-topHeight-marginTop)/height;
        // console.log(scrolled);
        aboutH2.style.setProperty("--scale",(1-scrolled))
    }

    if(isPinned2){
        
        begin = document.querySelector(".begin");
        container1 = document.querySelector(".container1");
        scaleText = document.querySelector(".scaleText");
        aboutH2C = document.querySelector(".aboutH2");
        blackWall = document.querySelector(".blackWall");

        let topHeight = begin.clientHeight + container1.clientHeight +scaleText.clientHeight;
        let html = document.documentElement;
        let height =parseInt(getComputedStyle(worksH2).getPropertyValue("height"))+
        parseInt(getComputedStyle(worksH2).getPropertyValue("margin-bottom"));//parseInt 因為帶回來會有px單位所以把他轉成數字 
        let marginTop = parseInt(getComputedStyle(worksH2).getPropertyValue("margin-top")) ;
        let scrolled = (html.scrollTop-topHeight-marginTop)/height;
        // console.log(scrolled);
        worksH2.style.setProperty("--scale",(scrolled-1));
    }

    // if(isPinned3){
    //     // worksText.classList.toggle("pinned3");
    //     console.log(isPinned3)
    //     // worksText.classList.toggle("worksTextAnimate");
    // }

    
    let allHeight = nowHeight();
    Y =window.scrollY;

    // // console.log(windowHeight);
    // // console.log(allHeight);
    // // console.log("container1:"+container1.clientHeight);
    // // console.log("scaleText:"+scaleText.getBoundingClientRect().height);
    // // console.log("aboutH2C:"+aboutH2C.clientHeight);
    // // console.log("blackWall:"+blackWall.clientHeight);
    // // console.log("worksH2C:"+worksH2C.clientHeight);
    // // console.log(Y);
    // console.log("height:"+allHeight);
    // console.log("Y:"+Y);
    
    calcScroll=Y/allHeight;
    console.log(calcScroll);

    if(calcScroll>=0.30){
        scaleTextContentBox.classList.add("worksTextAnimate");
        scaleTextImg.classList.add("worksImgAnimate");
    }else{
        scaleTextContentBox.classList.remove("worksTextAnimate");
        scaleTextImg.classList.remove("worksImgAnimate");
    }
    if(calcScroll>=0.82){
        worksText.classList.add("worksTextAnimate");
        scale2TextImg.classList.add("worksImgAnimate");
    }else{
        worksText.classList.remove("worksTextAnimate");
        scale2TextImg.classList.remove("worksImgAnimate");
    }
})


function nowHeight(){

    begin = document.querySelector(".begin");
    container1 = document.querySelector(".container1");
    scaleText = document.querySelector(".scaleText");
    aboutH2C = document.querySelector(".aboutH2");
    blackWall = document.querySelector(".blackWall");
    workContianer= document.querySelector(".workContianer");
    scaleText2C = document.querySelector(".scaleText2");
    windowHeight = window.innerHeight;
    let beginH = begin.getBoundingClientRect().height;
    let container1H = container1.getBoundingClientRect().height;
    let scaleTextH = scaleText.getBoundingClientRect().height;
    let aboutH2CH = aboutH2C.getBoundingClientRect().height;
    let blackWallH = blackWall.getBoundingClientRect().height;
    let workContianerH = workContianer.getBoundingClientRect().height;
    let scaleText2CH = scaleText2C.getBoundingClientRect().height;

    now=beginH+container1H+scaleTextH+aboutH2CH+blackWallH+workContianerH+scaleText2CH;
    
    // now=(allHeight-windowHeight)/allHeight;
    return now;
}
