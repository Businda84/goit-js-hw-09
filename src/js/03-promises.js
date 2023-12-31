
import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');
const delayEl=document.querySelector('input[name="delay"]')
const stepEl=document.querySelector('input[name="step"]')
const amountEl=document.querySelector('input[name="amount"]')

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let position = 0;
 let delay = Number(delayEl.value);
  const inputStep = Number(stepEl.value);
  const inputAmount = Number(amountEl.value);

 
  for (let i = 0; i < inputAmount; i += 1) {
    position += 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += inputStep;
  }
  };
 function createPromise(position, delay) {
return new Promise((resolve, reject) => {
       const shouldResolve = Math.random() > 0.3;
     setTimeout(() => {
       if (shouldResolve) {
         resolve({position, delay})
       } else {
         reject({position, delay})
       }
     }, delay);
  
  
   });

};

