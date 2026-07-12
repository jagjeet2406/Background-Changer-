// console.log("JavaScript Loaded");
// const buttons = document.querySelectorAll('button')
// const body = document.body;

//  buttons.forEach((button ) => {
    
//     button.addEventListener('click', ()=>{

//         body.style.backgroundColor = button.id;

//     });
//  });

const body = document.getElementById('main')
body.addEventListener('click',(event)=> {
    if( event.target.tagName === 'BUTTON')
     document.body.style.backgroundColor = event.target.id;

})

 