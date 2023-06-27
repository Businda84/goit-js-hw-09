
import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');




formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();


 let delay = Number(e.currentTarget.delay.value);
  const inputStep = Number(e.currentTarget.step.values);
  const inputAmount = Number(e.currentTarget.amount.values);


  for (let position = 1; position <= delay; position += 1) {
   
    createPromise(position, delay)
      .then(({ position, delay }) => {
         Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += inputStep;
  }
  };
 function createPromise(position, delay) {
const promise= new Promise((resolve, reject) => {
       const shouldResolve = Math.random() > 0.3;
     setTimeout(() => {
       if (shouldResolve) {
         resolve({position, delay})
       } else {
         reject({position, delay})
       }
     }, delay);
  
  
   });
   return promise;
};

