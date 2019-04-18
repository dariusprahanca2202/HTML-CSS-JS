const buton = document.querySelector('.buton');
const bodyBT = document.querySelector('body');

const colors = ['red','green','blue','purple','yellow','black','gray'];

buton.addEventListener('click',changeColor);

function changeColor (){

    let random = Math.floor(Math.random()*colors.length)
    bodyBT.style.backgroundColor = colors[random];
}