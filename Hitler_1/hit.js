

const questions = [

    {question:"what is the capital of france?",
      options:["paris","washington","maskow","tokiyo","milan"], 
      answer: "paris"
    },

    {question:"which planet is known as red planet?",
    options:["venus","marsh","maskow","tokiyo","milan"], 
    answer: "venus"
    }
];


  const questionEl = document.getElementById("question");
  
  const optionEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const btnEl = document.getElementById("nextBtn");

 const  currentquestion = 0;
 const  score = 0;
 const n = questions[currentquestion];
 
 
 function displayquestion(){
   questionEl.textContent = n.question;
   optionEl.innerHTML = "";
   n.options.forEach((option)=>{
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click",(option)=>{
      //  console.log(option);
      checkAnswer(option)


    })
  
    optionEl.appendChild(button);

  })


  function checkAnswer (answer){
    const n = questions[currentquestion];
    if(answer === n.answer){
      score++;
    }
  
    currentquestion;
    if(currentquestion<questions.length){
      displayquestion();

    }else{

    }

  }

  
 }
 displayquestion();