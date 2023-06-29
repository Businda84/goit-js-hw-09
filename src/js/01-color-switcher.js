const bodyEl=document.querySelector("body")
const startBtnEl = document.querySelector("button[data-start]");
const stopBtnEl = document.querySelector("button[data-stop]");
let timer = null;
startBtnEl.addEventListener("click",onClickStart);
stopBtnEl.addEventListener("click",onClickStop);
const delay = 1000;

function getRandomHexColor() {
             return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
        }


function onClickStart() {
    
  timer=setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor()
  }, delay);
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  }

function onClickStop() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
    clearInterval(timer);
  return;
};