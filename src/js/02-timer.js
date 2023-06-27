
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";


const inputDateEl = document.getElementById('datetime-picker')
const startBtnEl = document.querySelector('[data-start]')
const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}
console.dir(refs.hours);
const delay = 1000;
startBtnEl.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
    onClose(selectedDates) {
      onInputDate(selectedDates[0]);
     
  },
};

const datePicker = flatpickr(inputDateEl, options);

startBtnEl.addEventListener('click', clickBtnStart);


function onInputDate(date) {
  const currentTate = new Date();
  console.log(date);
  console.log(currentTate);
  if (currentTate >= date) {
    Notiflix.Notify.failure("Please choose a date in the future");
  } else {
    startBtnEl.disabled = false;
  }
}

function clickBtnStart() {
  const restOfTime = 0;
  const selectedDates = datePicker.selectedDates[0].getTime();
  let intervalId = setInterval(() => {
  const  diff = selectedDates - Date.now();
  const convertedTime = convertMs(diff);
    
    console.log(convertedTime);
    
    convertMs(diff);
    updateInterface(convertMs(diff))
    if (diff < 1000) {
        clearInterval(intervalId);
        intervalId = null;
        return;
    }
  
},delay)
  if (restOfTime<0) {
    clearInterval(intervalId)
    return
}

};
function updateInterface({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
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
   
function addLeadingZero(value){
return String(value).padStart(2, '0');
}


