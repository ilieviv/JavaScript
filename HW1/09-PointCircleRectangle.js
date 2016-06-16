function solve(args) {
    var x = +args[0],
        y = +args[1],
        distanceCircle,
        distanceRectangle;

    distanceCircle = (Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1))) <= 1.5;
    distanceRectangle = x >= -1 && x <= 5 && y <= 1 && y >= -1;

    if (distanceCircle && distanceRectangle) {
        console.log('inside circle inside rectangle');
    }
    else if (distanceCircle && !distanceRectangle) {
        console.log('inside circle outside rectangle');
    }
    else if (!distanceCircle && distanceRectangle) {
        console.log('outside circle inside rectangle');
    }
    else if (!distanceCircle && !distanceRectangle) {
        console.log('outside circle outside rectangle');
    }
}