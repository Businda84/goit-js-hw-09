
import Notiflix from 'notiflix';

const BtnEl = document.querySelector('button');
const formEl = document.querySelector('.form');




formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
 let inputDelay = Number(delay.values);
  const inputStep = Number(step.values);
  const inputAmount = Number(amount.values);


  for (let i = 1; i <= inputAmount; i += 1){
    inputDelay += inputStep;
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
e.currentTarget.reset()
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
}
