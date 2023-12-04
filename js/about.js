
let row1text = document.querySelector(".row1text");





window.onload = () => {

    let timeout1=window.setTimeout(()=>{
        row1text.classList.add("abouttextAnimation");
    },800);
  
    

};
window.clearTimeout(timeout1);