const loans=document.querySelector('.loan');
const rates=document.querySelector('.rate');
const months=document.querySelector('.month');
const calculate=document.querySelector('.calculate');
const result=document.querySelector('.value');


calculate.addEventListener('click',()=>{
    let loan=loans.value;
    let month=months.value;
    let rate=rates.value;
    const interest = (loan * (rate * 0.01)) / month;
    let payment = ((loan/ month) + interest).toFixed(2); 
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    result.innerHTML=payment;
  
})


