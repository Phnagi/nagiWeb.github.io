let container = document.querySelector(".container");
let container2 = document.getElementsByClassName("container");
let sections =gsap.utils.toArray(".container section");
let containerWrapper = document.getElementsByClassName(".containerWrapper");
//
let photoBtn = document.querySelector(".photoBtn");
let worksBtn = document.querySelector(".worksBtn");
let otherBtn = document.querySelector(".otherBtn");
let html = '';
let imageData ={

            "photo":[
                {
                    type:"image",
                    title:"photo1",
                    url:"./image/1.jpg",
                    web:"./image/1.jpg",
                },
                {
                    type:"image",
                    title:"photo2",
                    url:"./image/2.jpg",
                    web:"./image/2.jpg",
                },
                {
                    type:"image",
                    title:"photo3",
                    url:"./image/3.jpg",
                    web:"./image/3.jpg",
                },
                {
                    type:"image",
                    title:"photo4",
                    url:"./image/4.jpg",
                    web:"./image/4.jpg",
                },
                {
                    type:"image",
                    title:"photo5",
                    url:"./image/5.jpg",
                    web:"./image/5.jpg",
                },
                {
                    type:"image",
                    title:"photo6",
                    url:"./image/6.jpg",
                    web:"./image/6.jpg",
                },
                {
                    type:"image",
                    title:"photo7",
                    url:"./image/7.jpg",
                    web:"./image/7.jpg",
                },
                {
                    type:"image",
                    title:"photo8",
                    url:"./image/8.jpg",
                    web:"./image/8.jpg",
                },
                {
                    type:"image",
                    title:"photo9",
                    url:"./image/9.jpg",
                    web:"./image/9.jpg",
                },
                {
                    type:"image",
                    title:"photo10",
                    url:"./image/10.jpg",
                    web:"./image/10.jpg",
                }
            ],

            "works":[

                {
                    type:"image",
                    title:"works1",
                    url:"./image/works1.jpg",
                    web:"./image/works1.jpg",
                },
                {
                    type:"image",
                    title:"works2",
                    url:"./image/works2.jpg",
                    web:"./image/works2.jpg",
                },
                {
                    type:"image",
                    title:"works3",
                    url:"./image/works3.jpg",
                    web:"./image/works3.jpg",
                },
                {
                    type:"image",
                    title:"works4",
                    url:"./image/works4.jpg",
                    web:"./image/works4.jpg",
                },
                {
                    type:"image",
                    title:"works5",
                    url:"./image/works5.jpg",
                    web:"./image/works5.jpg",
                },
                {
                    type:"image",
                    title:"works6",
                    url:"./image/works6.jpg",
                    web:"./image/works6.jpg",
                },
                {
                    type:"image",
                    title:"works7",
                    url:"./image/works7.jpg",
                    web:"./image/works7.jpg",
                },
                {
                    type:"image",
                    title:"works8",
                    url:"./image/works8.jpg",
                    web:"./image/works8.jpg",
                },
                {
                    type:"image",
                    title:"works9",
                    url:"./image/works9.jpg",
                    web:"./image/works9.jpg",
                },
                {
                    type:"image",
                    title:"works10",
                    url:"./image/works10.jpg",
                    web:"./image/works10.jpg",
                }
            ],
            "others":[
                {
                    type:"image",
                    title:"P3-1",
                    url:"./image/P3-1.jpg",
                    web:"./image/P3-1.jpg",
                },
                {
                    type:"image",
                    title:"P3-2",
                    url:"./image/P3-2.jpg",
                    web:"./image/P3-2.jpg",
                },
                {
                    type:"image",
                    title:"P3-3",
                    url:"./image/P3-3.jpg",
                    web:"./image/P3-3.jpg",
                },
                {
                    type:"image",
                    title:"P3-4",
                    url:"./image/P3-4.jpg",
                    web:"./image/P3-4.jpg",
                },
                {
                    type:"image",
                    title:"P3-5",
                    url:"./image/P3-5.jpg",
                    web:"./image/P3-5.jpg",
                },
                {
                    type:"image",
                    title:"P3-6",
                    url:"./image/P3-6.jpg",
                    web:"./image/P3-6.jpg",
                },
                {
                    type:"image",
                    title:"P3-7",
                    url:"./image/P3-7.jpg",
                    web:"./image/P3-7.jpg",
                },
                {
                    type:"image",
                    title:"P3-8",
                    url:"./image/P3-8.jpg",
                    web:"./image/P3-8.jpg",
                },
                {
                    type:"image",
                    title:"P3-9",
                    url:"./image/P3-9.jpg",
                    web:"./image/P3-9.jpg",
                },
                {
                    type:"image",
                    title:"3-10",
                    url:"./image/P3-10.jpg",
                    web:"./image/P3-10.jpg",
                }
            ]

}


let imgHref="";
let innerImg = document.querySelectorAll(".innerImg");

function begin() {
    html = '';
    container = document.querySelector(".container");
    imageData.photo.forEach((e) => {
        // console.log(e);
        html += `<section>
                    <img class="innerImg" src="${e.url}" alt="" data-href="${e.web} " >
                </section>`

    
    });
    // html = "<p>hello</p>";
    console.log(html);


    container.innerHTML=html;
    innerImg = document.querySelectorAll(".innerImg");
    innerImg.forEach((e) => {
        

        e.addEventListener("click",()=>{
            imgHref=e.getAttribute("data-href")
            console.log(imgHref);
            window.open(`${imgHref}`);
        });
    });
    
}
begin();



function getScrollAmount(){
    let containerWidth = container.offsetWidth;
    return -(containerWidth - window.innerWidth) ;
}
function refleshAnimation(){
    containerWrapper = document.getElementsByClassName(".containerWrapper");
    container = document.querySelector(".container");
    sections =gsap.utils.toArray(".container section");
    
}
refleshAnimation();


// let container2 = document.querySelector(".container");

let sectionNum = 1 ;

photoBtn.addEventListener("click",(e)=>{
    sectionNum = 1 ;
    containerWrapper = document.getElementsByClassName(".containerWrapper");
    container = document.querySelector(".container");
    // html = '';
    // container.innerHTML=html;
    // imageData.photo.forEach((e) => {
   
    //     html += `<section>
    //                 <img src="${e.url}" alt="">
    //             </section>`
    // });
    
    // console.log(html);
    // container.innerHTML=html;
    sections.forEach((e) => {
       
        // console.log(sections.indexOf(e));
        // let index= sections.indexOf(e)+1;
        // e.innerHTML=`\n <img src=\"./image/${index}.jpg\" alt=\"\">\n `
        let index= sections.indexOf(e);
        let photoUrl3 = imageData.photo[index].url;
        let photoWeb1 =imageData.photo[index].web;
        let sectionType = imageData.photo[index].type;
        // console.log(photo);
        if(sectionType == "video"){
            e.innerHTML=`\n <video src=\"${photoUrl3}\" autoplay loop mute ></video>\n  `
        }else if(sectionType == "image"){
            e.innerHTML=`\n <a class="imgClass" href="#"><img class="innerImg" src=\"${photoUrl3}\" alt=\"\" data-href="${photoWeb1}" ></a>\n `

        }

    });

    
    link2();
    refleshAnimation();

});
worksBtn.addEventListener("click",(e)=>{
    sectionNum = 2 ;
    containerWrapper = document.getElementsByClassName(".containerWrapper");
    container = document.querySelector(".container");
    // html = '';
    // container.innerHTML=html;
    // imageData.photo2.forEach((e) => {
    //     // console.log(e);
    //     html += `<section>
    //                 <img src="${e.url}" alt="">
    //             </section>`
    // });
    // // html = "<p>hello</p>";
    // console.log(html);
   
    sections.forEach((e) => {
       
       
        // let index= sections.indexOf(e);
        // let photoUrl = imageData.works[index].url;
       
        
        // e.innerHTML=`\n <img src=\"${photoUrl}\" alt=\"\">\n `
        let index= sections.indexOf(e);
        let photoUrl2 = imageData.works[index].url;
        let photoWeb2 =imageData.works[index].web;
        let sectionType = imageData.works[index].type;
        // console.log(photo);
        if(sectionType == "video"){
            e.innerHTML=`\n <video src=\"${photoUrl2}\" autoplay loop mute ></video>\n  `
        }else if(sectionType == "image"){
            e.innerHTML=`\n <a class="imgClass" href="#"><img class="innerImg" src=\"${photoUrl2}\" alt=\"\" data-href="${photoWeb2}" ></a>\n `

        }
    });

    
    link2();
 
    refleshAnimation();

});

otherBtn.addEventListener("click",(e)=>{
    sectionNum = 3 ;
    containerWrapper = document.getElementsByClassName(".containerWrapper");
    container = document.querySelector(".container");
    // html = '';
    // container.innerHTML=html;
    // imageData.photo2.forEach((e) => {
    //     // console.log(e);
    //     html += `<section>
    //                 <img src="${e.url}" alt="">
    //             </section>`
    // });
    // // html = "<p>hello</p>";
    // console.log(html);
    // console.log(sections);
    sections.forEach((e) => {
       
        // console.log(sections.indexOf(e));
        let index= sections.indexOf(e);
        let photoUrl = imageData.others[index].url;
        let photoWeb3 =imageData.others[index].web;
        let sectionType = imageData.others[index].type;
        // console.log(photo);
        if(sectionType == "video"){
            e.innerHTML=`\n <video src=\"${photoUrl}\" autoplay loop mute ></video>\n  `
        }else if(sectionType == "image"){
            e.innerHTML=`\n <a class="imgClass" href="#"><img class="innerImg" src=\"${photoUrl}\" alt=\"\" data-href="${photoWeb3}" ></a>\n `

        }
        
        // <video src="clip.mp4" controls></video>
        //href="index.html"
    });

    

    link2();
    refleshAnimation();

});
// console.log(sections)



function link2(){
    innerImg = document.querySelectorAll(".innerImg");
    innerImg.forEach((e) => {
        

        e.addEventListener("click",()=>{
            imgHref=e.getAttribute("data-href")
            console.log(imgHref);
            window.open(`${imgHref}`);
        });
    });
    

}




let tween = gsap.to(sections,{
    delay:2.8,
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

    //       <section>
    //          <img src="image/1.jpg" alt="">
    //          <!-- <P>One</P> -->
    //       </section>