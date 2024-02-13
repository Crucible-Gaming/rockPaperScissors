const btnRo = document.getElementById('rock');
const btnPa = document.getElementById('paper');
const btnSc = document.getElementById('scissors');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

 buttons.addEventListener('click', () => {
   buttons.playerSelection ();


 });
}); 
