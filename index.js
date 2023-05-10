let hometeamscore=document.getElementById("home-team-score")
function addone1(){
    let cursc=Number(hometeamscore.textContent)
    hometeamscore.textContent=cursc+1
}
function addtwo1(){
    let cursc=Number(hometeamscore.textContent)
    hometeamscore.textContent=cursc+2
}
function addthree1(){
    let cursc=Number(hometeamscore.textContent)
    hometeamscore.textContent=cursc+3
}
let guestscore=document.getElementById("guest-team-score")
function addone(){
    let curs=Number(guestscore.textContent)
    guestscore.textContent=curs+1
}
function addtwo(){
    let curs=Number(guestscore.textContent)
    guestscore.textContent=curs+2
}
function addthree(){
    let curs=Number(guestscore.textContent)
    guestscore.textContent=curs+3
}
function reset(){
    guestscore.textContent=0
    hometeamscore.textContent=0
}