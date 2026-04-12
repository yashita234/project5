window.onload = function () {

    var count = 0;

    var display = document.getElementById("count");
    var btnIncrease = document.getElementById("increase");
    var btnDecrease = document.getElementById("decrease");
    var btnReset = document.getElementById("reset");

    btnIncrease.onclick = function () {
        count++;
        display.innerHTML = count;
    }

    btnDecrease.onclick = function () {
        count--;
        display.innerHTML = count;
    }

    btnReset.onclick = function () {
        count = 0;
        display.innerHTML = count;
    }
}