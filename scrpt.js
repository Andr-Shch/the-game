const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['#00FFFF','#FF00FF', '#FF0099', '#6E0DD0', '#00FF66'];

for(let i = 0; i<SQUARE_NUMBER;i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=>{setColor(square)})
    square.addEventListener('mouseleave', ()=>{removeColor(square)})
    board.append(square);
}

function setColor(el){
    const color = getRandomColor();
    el.style.backgroundColor=color;
    el.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`;
    console.log(el.style.boxShadow)
}
function removeColor(el){
    el.style.backgroundColor='#1d1d1d';
    el.style.boxShadow=`0 0 2px #000`
}

function getRandomColor(){
   const  index = Math.floor(Math.random()*colors.length)
   return colors[index]
}