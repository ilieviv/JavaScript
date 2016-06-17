function biggest(args){
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        ab,
        abc;

    ab = Math.max(a, b);
    abc = Math.max(ab, c);

    console.log(abc);
}

 
 