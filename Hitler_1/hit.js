

const questions = [

    {question:"what is the capital of france?",
      options:["paris","washington","maskow","tokiyo","milan"], 
      answer: "paris"
    },

    {question:"which planet is known as red planet?",
    options:["venus","marsh","maskow","tokiyo","milan"], 
    answer: "paris"
    }
];


  const questionEl = document.getElementById("question");
  console.log(questionEl)
  const optionEl = document.getElementById("option");
  const resultEl = document.getElementById("result");
  const btnEl = document.getElementById("nextBtn");

  let currentquestion = 0;
  let score = 0;
  
  
    function displayquestion(){
      let n = questions[currentquestion];
      questionEl.textContent = n.question;
      optionEl.innerHTML  = " ";

      n.options.forEach((option)=>{
        const button = document.createElement("button");
        button.textContent = option;

        optionEl.append(button)
      })
      
    }
    displayquestion()
  