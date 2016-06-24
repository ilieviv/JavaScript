function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        first;

   
    first = Math.max(a, b);

    console.log(GetMax(first, c));
        

}


function GetMax(first, second) {
    return Math.max(first, second);

}


solve([2, 3, 4])


