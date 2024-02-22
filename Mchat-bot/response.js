

 export const responseobj = {
    hello:"hey how are you doing?",
    hey:"Hey what's up",
    today:new Date().toDateString(),
    time:new Date().toLocaleDateString(),
 }

   export const fetchBotresponse = (userInput)=>{
        return responseobj[userInput];
   }


 export const chatbotService = {
     chatbotResponse(userInput){
        return fetchBotresponse(userInput)
     }
 }




