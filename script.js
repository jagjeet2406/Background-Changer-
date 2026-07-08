console.log("JavaScript Loaded");
const buttons = document.querySelectorAll('button')
console.log(buttons);
const body = document.body;

 buttons.forEach((button ) => {
    
    button.addEventListener('click', ()=>{

        body.style.backgroundColor = button.id;

    });
 });

 