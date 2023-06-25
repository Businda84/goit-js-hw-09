
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
    onClose(selectedDates) {
        if (selectedDates[0]<=currentTime) {
           Notiflix.Notify.failure("Please choose a date in the future");
        } else startBtn.disabled = false;
  console.log(selectedDates[0]);
  },
};

const inputDateEl = document.getElementById('datetime-picker')
const startBtn = document.querySelector('[data-start]')
const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('data-hours'),
    minutes: document.querySelector('data-minutes'),
    seconds:document.querySelector('data-seconds'),
}
const delay = 1000;

startBtn.disabled = true;

let currentTime = new Date();


flatpickr(inputDateEl, options);


startBtn.addEventListener('click', clickBtnStart);
function clickBtnStart() {
    intervalId = setInterval(() => {
    
       
        if (currentTime === null || intervalId === null) {
            return;
        }
        currentTime -= delay;
        if (currentTime < 0) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }
          
        timer();
    }
)};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function timer() {

    const differenceInTime = selectedDates[0] - currentTime;
    if (currentTime === null || intervalId === null) {
        return;
    }
    currentTime -= delay;
    if (currentTime < 0) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }

}
   
function addLeadingZero(value){
return String(value).padStart(2, '0');
}


