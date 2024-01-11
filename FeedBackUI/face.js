
const ratingEls = document.querySelectorAll(".image_container .unhappy, .image_container .neutral ,.image_container .satified");
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container");

 let selectedText = " ";

ratingEls.forEach((ratingEl)=>{
  ratingEl.addEventListener("click",(event)=>{
     
     removeClass()
     selectedText = event.currentTarget.querySelector(".photo+p").innerText;
    event.currentTarget.classList.add("active");
     
    // console.log(selectedText)
    
    
  });
});


 btnEl.addEventListener("click",()=>{
   if( selectedText !=  ""){
     containerEl.innerHTML = `<strong>Thank you!</strong>
                                  <strong>feedback: ${selectedText}</strong>`;
   }  
 })
function removeClass(){
    ratingEls.forEach((ratingEl)=>{
       ratingEl.classList.remove("active");
    });

    };
