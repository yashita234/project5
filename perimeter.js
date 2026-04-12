function startApp() {

    var choice = prompt(
        "Welcome to Perimeter Calculator.\n" +
        "1. Perimeter of Rectangle\n" +
        "2. Perimeter of Triangle\n" +
        "3. Circumference of Circle\n" +
        "4. Perimeter of Parallelogram"
    );

    if (choice == '1') {
        var l = prompt('Enter the Length');
        var b = prompt('Enter the Breadth');
        var result = 2 * (Number(l) + Number(b));
        alert('Perimeter of Rectangle = ' + result);
    }

    else if (choice == '2') {
        var a = prompt('Enter side 1');
        var b = prompt('Enter side 2');
        var c = prompt('Enter side 3');
        var result = Number(a) + Number(b) + Number(c);
        alert('Perimeter of Triangle = ' + result);
    }

    else if (choice == '3') {
        var r = prompt('Enter the Radius');
        var result = 2 * 3.14 * Number(r);
        alert('Circumference of Circle = ' + result);
    }

    else if (choice == '4') {
        var h = prompt('Enter the Height');
        var b = prompt('Enter the Base');
        var result = 2 * (Number(h) + Number(b));
        alert('Perimeter of Parallelogram = ' + result);
    }

    else {
        alert("Invalid Choice");
    }
}