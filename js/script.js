let order=[];
let clickedOrder =[];
let score=0;

// 0 green 1 red 2 yellow 3 blue
const blue=document.getElementById('blue');
const red=document.querySelector('.red');
const green=document.querySelector('.green');
const blue=document.querySelector('.blue');

//embaralha
let shuffleOrder=()=>{
    let colorOrder=Math.floor(Math.random()*4);
    order[order.length]=colorOrder;
    clickedOrder=[];

    for (let i in order){
        let elementcolor=createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1);
    }
}

//proxima cor
let lightColor=(element,number) =>{
time=time*500;
    setTimeout(()=>{
        element.classList.add('selected');

},tempo-250);
    setTimeout(()=>{
        element.classList.remove('selected');
    });
}

//macth click
let checkOrder=()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i]!=order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length==order.length){
        alert(`Score: ${score}\n, Você acertou! Iniciando next level`)
        nextLevel();

    }
}

//user click
let click=(color)=>{
    clickedOrder[clickedOrder.length]=color;
    elementColor(color).classList.add('selected');
    setTimeout(()=>{
        elementColor(color).classList.remove('selected');
    })
    checkOrder();
} 