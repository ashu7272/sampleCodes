
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click",addPage);
const apiUrl = " https://127.0.0.1:5000/chatAPI";


 async function addPage(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
}