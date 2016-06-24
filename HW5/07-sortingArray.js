function solve(args) {
    var len, 
        input = (args + '').split('\n').map(Number);
    
    input.slice(0, 1);
    len = input.length;
    
    input.sort(function (x, y) {
        return x, y;
    })

    console.log(input);
}

solve([6, 3, 4, 1, 5, 2, 6])

