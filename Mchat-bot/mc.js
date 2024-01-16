const sendEl = document.querySelector(".send");
const txtinputEl = document.querySelector("#txtinput");
const chatbodyEl = document.querySelector(".chat-body");



sendEl.addEventListener("click",()=>{
    getMessage()
});

 txtinputEl.addEventListener("click",(elm)=>{
    if(elm.target.value == 13){
     getMessage()
    }

 })

const getMessage = ()=>{
    userMessage = txtinputEl.value ;
    RMessageEl(userMessage);
    txtinputEl.value = " ";
    MilegaChat(userMessage);
}

const MilegaChat = ()=>{
    const res = chatbotresponse(userMessage);
    RMessageEl(res);
}

const RMessageEl = (txt)=>{
  const wrapper = document.createElement("div");
  const txtNode  = document.createTextNode(txt);
   wrapper.classList.add("user-message");
   wrapper.append(txtNode);
   chatbodyEl.append(wrapper);
}

const chatbotresponse =(userMessage)=>{

    return responseobj[userMessage] == undefined?"Please use another method":responseobj[userMessage]

}