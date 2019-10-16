let count = 0;
const td = document.querySelectorAll('td');
let playerTurn = true;

let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9],

    [1,4,7],
    [2,5,8],
    [3,6,9],

    [1,5,9],
    [3,5,7],
    ];

function newGame(){   
    let num = this.id.split('box')[1];
    console.log(num);

     count += 1 ;

const box =  document.querySelector('#'+ this.id);
    
    if(playerTurn === true){
        
        box.innerText = "X"

        setMessge(" O Turn Now ")
        
        playerTurn = !playerTurn

        box.removeEventListener('click', newGame)

        for(let i = 0; i < board.length; i++){
           for (let j = 0 ; j < board[i].length ; j++){
               if( num == board[i][j]){
                   board[i][j] = "X"
               }
           }
        }
        console.log(board)
    }else{
        console.log(this.id)
        box.innerText = "O"

        setMessge(" X Turn Now ")
        
        playerTurn = !playerTurn

        box.removeEventListener('click', newGame)

        for(let i = 0; i < board.length; i++){
            for (let j = 0 ; j < board[i].length ; j++){
                if( num == board[i][j]){
                    board[i][j] = "O"
                }
            }
         }
    }   
    checkWinning();
    console.log('box', box) 
};

function setMessge(msg){
    document.getElementById("message").innerText = msg ;
    console.log(msg);
}

const checkWinning = function(){

if ( board[0][0]== board[0][1] && board[0][0] == board[0][2]){
    setMessge(board[0][1] + " WINS Congrat")
    removeEvent()
   
}else if( board[1][0]== board[1][1] && board[1][0] == board[1][2]){
    setMessge(board[1][0] + " WINS Congrat")
    removeEvent()
    
} else if (board[2][0]== board[2][1] && board[2][0]==board[2][2]){
    setMessge(board[2][0] + " WINS Congrat")
    removeEvent()
    
} else if( board[3][0]== board[3][1] && board[3][0] == board[3][2]){
    setMessge(board[3][0] + " WINS Congrat")
    removeEvent()
   
} else if( board[4][0]== board[4][1] && board[4][0] == board[4][2]){
    setMessge(board[4][0] + " WINS Congrat")
    removeEvent()
   
} else if( board[5][0]== board[5][1] && board[5][0] == board[5][2]){
    setMessge(board[5][0] + " WINS Congrat")
    removeEvent()
    
} else if( board[6][0]== board[6][1] && board[6][0] == board[6][2]){
    setMessge(board[6][0] + " WINS Congrat")
    removeEvent()   
   
} else if( board[7][0] == board[7][1] && board[7][0] == board[7][2]){
    setMessge(board[7][0] + " WINS Congrat")
    removeEvent()    
         
} else if (count == 9 ){
    setMessge("tie")
    removeEvent()  
}
}
for(let i=0;i<td.length;i++){
td[i].addEventListener('click', newGame)}

const removeEvent = function(){
    for(let i=0;i<td.length;i++){
        td[i].removeEventListener('click', newGame)}

}

const rst = document.querySelector('#rst')
    const refresh = function(){
           window.location.reload();
    }
rst.addEventListener('click',refresh)