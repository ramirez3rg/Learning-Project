let firstCard = 0;
let secondCard = 0;
let thirdCard =0;
let fourthCard =0;
let hfirstCard = 0;
let hsecondCard = 0;
let drawCard =0;
let Cards = [firstCard, secondCard,thirdCard, fourthCard]
sum = 0;
hsum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let newPCard = false;
let PlayStatus= document.getElementById("status")
let score = document.getElementById("guest-score")
let hScore = document.getElementById("house-score")
newGame = true;
let pCards = document.getElementById("player-cards")

function draw(){
    if(newGame = true){
    newGame =false;
    firstCard = Math.floor(Math.random() * 12) + 1;
    secondCard = Math.floor(Math.random() * 12) + 2;

    hfirstCard = Math.floor(Math.random() * 12) + 2;
    hsecondCard = Math.floor(Math.random() * 12) + 2;

    sum = firstCard + secondCard + drawCard;
    hsum = hfirstCard + hsecondCard;
    
    score.innerText = sum
    hScore.innerText = hsum
    pCards.innerText = "CARDS:"+ " "+ firstCard + " " + secondCard;

    if(sum<21){
        PlayStatus.innerText = "Do you want to draw a new card? ";
     
     }else if(sum === 21){
        PlayStatus.innerText  = "Wohoo!, you got Blackjack  ";
         hasBlackJack = true;
     }else {
        PlayStatus.innerText  = "You loSt this round!  ";
         isAlive = false;
     
     }


}else{
        if(confirm("Would you like to Draw a Card?")){
            newCard();
        }else{
            reset();
            

        }
    }

}

function reset(newGame=false){
    firstCard = 0;
    secondCard = 0;
    hfirstCard = 0;
    hsecondCard = 0;
    drawCard = 0;

    score.innerText = 0;
    hScore.innerText = 0;
    PlayStatus.innerText = "New Game";
}

function newCard(newGame=false){
    drawCard = Math.floor(Math.random() * 12) + 2;
    sum+= drawCard;
    pCards.innerText += " " + drawCard;

    if(sum<21){
        PlayStatus.innerText = "Do you want to draw a new card? ";
     
     }else if(sum === 21){
        PlayStatus.innerText  = "Wohoo!, you got Blackjack  ";
         hasBlackJack = true;
     }else {
        PlayStatus.innerText  = "You lost this round!  ";
         isAlive = false;
     
     }



}





