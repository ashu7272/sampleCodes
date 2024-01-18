

const appEl = document.getElementById("app");
const containerEl = document.createElement("div");
   containerEl.classList.add("container");
   

const textFieldEl = getText();
appEl.append(textFieldEl);
const buttonEl = creatButton();
appEl.append(buttonEl);


containerEl.style.height = "100px"
containerEl.style.width = "200px"
containerEl.style.background = "lightcoral"
containerEl.style.marginTop = "50px"
appEl.append(containerEl);

function handleTodo(){
   const task = document.getElementsByTagName("input")[0];
   let taskEl = task.value;
   const span = document.createElement("span");
   span.style.background = "white";
     
   containerEl.prepend(span);
   span.innerHTML = taskEl;
   saveTaskEl()
}



  


function getText (){
  const textField = document.createElement("input");
  textField.placeholder = "Enter your Task";
  textField.style.height = "100px";
  textField.style.width = "200px"
  

  return textField;
}

function creatButton(){
   const buttonEl = document.createElement("button");
   buttonEl.innerHTML = "TO DO";
   buttonEl.style.marginLeft ="20px";
   buttonEl.style.height = "50px";
   buttonEl.style.width = "100px";
   buttonEl.addEventListener("click",handleTodo);
   

   return buttonEl;
}

function saveTaskEl(taskEl){
   const previousTaskEl = getTaskEl();
    previousTaskEl = [taskEl,...previousTaskEl]
   window.localStorage.setItem("taskEl",previousTaskEl.join(","));
}

function getTaskEl(){
    const getStr = window.localStorage.getItem("taskEl");
    return getStr.split(",");
}