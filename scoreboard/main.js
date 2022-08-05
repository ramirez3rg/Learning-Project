let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore=0
let gScore=0

function hScore1pt(){
    hScore += 1
    homeScore.innerText = hScore
}
function hScore2pt(){
    hScore += 2
    homeScore.innerText = hScore
}
function hScore3pt(){
    hScore += 3
    homeScore.innerText = hScore
}

function gScore1pt(){
    gScore += 1
    guestScore.innerText = gScore
}
function gScore2pt(){
    gScore += 2
    guestScore.innerText = gScore
}
function gScore3pt(){
    gScore += 3
    guestScore.innerText = gScore
}


function reset(){
    hScore = 0
    gScore = 0
    homeScore.innerText = 0
    guestScore.innerText = 0
}

