function solve(str) {
    var open = 0,
        close = 0,
        input = str[0] + '';

    for (var i in input) {
        var b = input[i];

        if (b === '(') {
            open += 1;
        }
        else if (b === ')') {
            close += 1;
        }

        if (open > close) {
            console.log('Incorrect');
            return;
        }
    }

    if (open === close) {
        console.log('Correct');
    }
    else {
        console.log('Incorrect');
    }
}
