
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click",addPage);
const apiUrl = " http://127.0.0.1:8000/chatAPI";
const jokeEl = document.getElementById("joke");


 async function addPage(){

    try {
        const response = await fetch(apiUrl);
       const data = await response.json();
      // console.log(data.result);
      jokeEl.innerText = data.result;

    } catch (error) {
        console.log("error occured");
    }
}