
const chatbodyEl = document.querySelector(".chat-body");
const txtinputEl = document.querySelector("#txtinput");
const sendEl = document.querySelector(".send");



sendEl.addEventListener("click",()=>{
    renderUserMessage();
});

 txtinputEl.addEventListener("keyup",(elm)=>{
    if(elm.keyCode === 13){
         renderUserMessage();
    }
 })

const renderUserMessage = ()=>{
  
    const userInput = txtinputEl.value;
    // console.log(userInput);
     renderUserMessageEl(userInput);er
     txtinputEl.value = "";
      MResponse(userInput)
 }


  const MResponse = (userInput)=>{
    const res = getchatbotResponse[userInput];
    renderUserMessageEl(res);

  }
  const renderUserMessageEl = (txt)=>{
    const messageEl = document.createElement("div");
     const txtNode = document.createTextNode(txt);
    messageEl.classList.add("user-message");
    messageEl.append(txtNode);
    chatbodyEl.append(messageEl);
  }

  const getchatbotResponse = ()=>{
      return responseobj[userInput] == undefined? "Please try something else":responseobj[userInput]
  }