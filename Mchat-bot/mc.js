import * as module from "./response.js";

const sendEl = document.querySelector(".send");

const txtinputEl = document.querySelector("#txtinput");
const chatbodyEl = document.querySelector(".chat-body");


 txtinputEl.addEventListener("keyup",(elm)=>{
     if(elm.keyCode ===13){
      renderMessage();
    }
 })

 const chatbotAnswer = (response)=>{
     const web = response;
     getChat(response);
 }

 const getChat = (userInput,type)=>{
  let className = "usedmessage";
  if(type == "hello"){
      className = "usedMessage";
  }else{
    className = "showMessage"
  }

  const messageEl = document.createElement("div");
  messageEl.classList.add(className);
  // const txtnode = document.createTextNode(userInput)
  //  const um = messageEl.appendChild(txtnode);
  messageEl.textContent = userInput;
  setTimeout(()=>{

  
  chatbodyEl.appendChild(messageEl);
  },1000)
 }
  
const renderMessage = async()=>{
  const userInput = txtinputEl.value ;
  getChat(userInput,"hello");
  txtinputEl.value = "";
  try{
  const response = await module.chatbotService.chatbotResponse(userInput)
                     
     console.log(response)
    setTimeout(()=>{
      chatbotAnswer(response);
    },3000)
  }
  catch(error){
    setTimeout(()=>{
      chatbotAnswer("use correct key for response");
    },5000)
    
  }
}
    



sendEl.addEventListener("click", renderMessage);