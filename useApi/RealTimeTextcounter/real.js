
const textareaEl = document.querySelector("#textarea");
const totalEl = document.querySelector("#total");
const remainEl = document.querySelector("#remain");


    
//  const updateCounter = ()=>{
//      const text = textareaEl.value ;
//      const counterLeng =text.length;
//      totalEl.innerHTML = counterLeng;
//      remainEl.innerHTML = 60-counterLeng;
   
    


//   }

//  textareaEl.addEventListener("input",updateCounter);
const updateCounter = ()=>{
   totalEl.innerHTML = textareaEl.value.length;
}

textareaEl.addEventListener("keyup",updateCounter);