

const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");

const newGamebtn = document.querySelector('.btn');

let currentPlayer  ;

let gameGrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6.7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];



function init()
{
    currentPlayer='X';
    gameGrid=['','','','','','','','',''];

    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        box.classList=`box box${index+1}`;

    })
    newGamebtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}    
init();

function handleClick(index)
{
    console.log('click on ', index+1);
}


boxes.forEach((box,index) =>{

    box.addEventListener("click",() => {
        handleClick(index);
    })
}
)


function checkGameOver()
{
    let answer="";

    winningPosition.forEach((position)=>{
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !=="" || gameGrid[position[2]] !=="") && (gameGrid[position[0]] === gameGrid[position[1]])  && (gameGrid[position[1]] === gameGrid[position[2]]) ){

            if(gameGrid[position[0]] =='X'){
                answer="X";
            }else{
                answer="O";
            }


            boxes.forEach((box) =>{
                box.style.pointerEvents ='none';
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    })



    if(answer!==""){

        gameInfo.innerText = `Winner Player - ${answer}`;
        newGamebtn.classList.add("active");
        return;

    }

    let fillcnt=0;
    gameGrid.forEach((box) =>{
        if(box !==""){
            fillcnt++;
        }
    })

    if(fillcnt===9){
        gameInfo.innerText = "Game Tied!";
        newGamebtn.classList.add("active");

    }


}

function handleClick(index)
{
    if(gameGrid[index]===""){
        boxes[index].innerHTML=currentPlayer;
        gameGrid[index]=currentPlayer;
        if(currentPlayer=='X'){
            currentPlayer='O';
            gameInfo.innerText = `Current Player - ${currentPlayer}`;
        }else{
            currentPlayer='X';
            gameInfo.innerText = `Current Player - ${currentPlayer}`;
        }
        boxes[index].style.pointerEvents="none";
        checkGameOver();
    }
}



newGamebtn.addEventListener('click',init);