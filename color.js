window.onload = function () {

    var button = document.getElementById("btn");

    button.onclick = function () {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }

}