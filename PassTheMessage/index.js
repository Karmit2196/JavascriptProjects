const btn=document.querySelector('.btn');
const getMessage=document.querySelector('.message');
const setMessage=document.querySelector('.message-deliver');


btn.addEventListener('click',()=>{
    let value=getMessage.value;
    setMessage.innerText=value;
    getMessage.value='';
})
