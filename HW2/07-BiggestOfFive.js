function biggestOfFive(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4],
        ab, abc, abcd, abcde;
    
    ab = Math.max(a, b);
    abc = Math.max(ab, c);
    abcd = Math.max(abc, d);
    abcde = Math.max(abcd, e);
    
    console.log(abcde);
}

