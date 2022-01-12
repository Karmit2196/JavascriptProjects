let quote=document.querySelector('.quote');
let getQuote=document.querySelector('.new-quote');
let author=document.querySelector('.author-name');

let url=`https://goquotes-api.herokuapp.com/api/v1/random?count=1`;
getQuote.addEventListener('click',()=>{
    fetch(url)
  .then(response => response.json())
  .then(data => {
      quote.innerText=`"${data.quotes[0].text}"`;
      author.innerText=data.quotes[0].author;
  });
})