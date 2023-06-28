
import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');




formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let position = 0;
 let delay = Number(e.currentTarget.delay.value);
  const inputStep = Number(e.currentTarget.step.values);
  const inputAmount = Number(e.currentTarget.amount.values);

  if (
  delay<0||inputStep<0||inputAmount<0
  ) {
    
    return
}
  for (let i = 0; i < delay; i += 1) {
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

