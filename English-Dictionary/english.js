
const inputEl = document.getElementById("input");
const infotext = document.getElementById("info-text");


const apiKey = "QozncEX3k0ZQcKJEv99bFa6D5MWYURRyISQIuKsv";
const option = {
   method:"GET",
   headers:{
    'X-Api-Key': apiKey,
   },
}



  async function getApi(words){
  const apiURL =`https://api.api-ninjas.com/v1/dictionary?word=${words}`;
  
  const response = await fetch(apiURL,option);
  const data = await response.json();
  //  console.log(data.definition);
   const meaning = data.definition.trim();
    
    console.log(meaning);
   

  }


inputEl.addEventListener("keyup",(elm)=>{
  if( elm.currentTarget.value && elm.key === "Enter"){
    getApi(elm.currentTarget.value)

  }
})

