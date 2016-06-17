function exchange(args) {
    var a = +args[0],
        b = +args[1],
        c=0;
    
    if (a > b) {
        c = a;
        a = b;
        b = c;
    }
        console.log(a + ' ' + b)
    
   
}

 

