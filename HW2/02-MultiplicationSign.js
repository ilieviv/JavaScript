function signs(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    var negativeCounter = 0,
        zeroCounter = 0;
    
    var aNegative = a < 0,
        bNegative = b < 0,
        cNegative = c < 0;
    
    if (aNegative) {
        negativeCounter++;
    }
    if (bNegative) {
        negativeCounter++;
    }
    if (cNegative) {
        negativeCounter++;
    }
    
    if (a == 0 || b == 0 || c == 0) {
        zeroCounter = 1;
    }
    
    if (zeroCounter == 1) {
        console.log(0);
    }else if (negativeCounter == 1 || negativeCounter == 3) {
        console.log('-');
    } else  {
        console.log('+');}
 

}

signs([5, 2, 3]);
 