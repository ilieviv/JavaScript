function divide(args) {
    var five = args % 5 == 0;
    var seven = args % 7 == 0;

    if (five & seven) {
        console.log('true ' + args)
    }
    else {
        console.log('false ' + args)
    }
}