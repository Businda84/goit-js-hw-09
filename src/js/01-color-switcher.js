const bodyEl=document.querySelector("body")
const startBtnEl = document.querySelector("button[data-start]");
const stopBtnEl = document.querySelector("button[data-stop]");
let timer = null;
startBtnEl.addEventListener("click",onClickStart);
stopBtnEl.addEventListener("click",onClickStop);


function getRandomHexColor() {
             return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
        }


function onClickStart() {
    startBtnEl.disabled = true;
  timer=setInterval(() => {
  bodyEl.style.backgroundColor=getRandomHexColor() }, 1000);
  
}

function onClickStop() {
    startBtnEl.disabled = false;
    clearInterval(timer);
    return
}