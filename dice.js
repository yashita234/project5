var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

var clickCount = 0;
var t;
var dice;

function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

function stopStart() {
    clickCount++;

    if (clickCount % 2 === 0) {
        t = setInterval(change, 100);
    } else {
        clearInterval(t); 
    }
}

window.onload = function() {
    dice = document.getElementById("dice");
    t = setInterval(change, 100)}