function hexToDecimal(args) {
    var input = String(args),
        digit;
    
    var hexKey = '0123456789ABCDEF',
        sum = 0,
        len = input.length;
    
    for (var i = 0; i < len; i++) {
        digit = hexKey.indexOf(input[i]);
        
        sum = digit + sum * 16;
    };
    console.log(sum);
}

 