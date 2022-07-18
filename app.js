let counter = 0;

const count = document.querySelector('.count');

const value = document.querySelector('.value');

const sign = document.querySelector('.sign');

const btns = document.querySelectorAll('.btn');

btns.forEach((items) => {
  items.addEventListener("click", () => {
 const increase = items.classList.contains('increase');
 if (increase ){
  counter++;
  
 }
 
 const reset = items.classList.contains('reset');
 if (reset) {
   counter = 0;
 }
 
 const decrease = items.classList.contains('decrease');
 if (decrease) {
   counter--;
 
 }
 

 if(counter > 0){
  value.style.color = 'teal';
  count.style.color = 'teal';
 sign.textContent = '(+ mode)';
 }
 
 if(counter === 0){
  value.style.color = '#222';
  count.style.color = '#222';
  sign.textContent = '';
 }
 
 
 if( counter < 0 ){
   value.style.color = '#ef4444';
   count.style.color = '#ef4444';
  sign.textContent = '(- mode)';
 }
 
 value.textContent = counter;
  });
});