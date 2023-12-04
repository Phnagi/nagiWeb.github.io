const nav = document.querySelector(".nav");

const imagesBox = document.querySelector(".imagesBox"),
    imagesTittle = document.querySelectorAll(".imagesTittle"),
    imagesBoxGallery = document.querySelector(".imagesBoxGallery"),
    imagesBoxGalleryFrame = document.querySelectorAll(".imagesBoxGalleryFrame");

const animateImages = (event) => {
    imagesBoxGalleryFrame.forEach((e) =>{
        let xPos = event.clientX/window.innerWidth - 0.5,
            yPos = event.clientY / window.innerHeight - 0.5;
            gsap.to(e,{
                duration:0.5,
                rotationY:xPos*10,
                rotationX:yPos*-10,
                stagger:0.055,

            });
    });
};


window.addEventListener("mousemove",(event) => {
   animateImages(event);
});
