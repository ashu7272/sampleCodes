

const btnEl = document.getElementById("btn");
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiKey = "QozncEX3k0ZQcKJEv99bFa6D5MWYURRyISQIuKsv";
const jokeEl = document.getElementById("joke");

const option = {
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};


 async function getJoke(){

    try {
        btnEl.innerText = "uploading"
        const response = await fetch(apiUrl, option);
        const data = await response.json();
//     console.log(data[0].joke);
       jokeEl.innerText = data[0].joke;
        btnEl.innerText = "Tell me a Joke";
        
    } catch (error) {
         jokeEl.innerText = "Some thing went wrong Try after sometimes";
        
    }
    
 }

btnEl.addEventListener("click",getJoke);
    