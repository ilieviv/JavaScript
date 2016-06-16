function thirdBit(args) {
    var bit = args[0];

    var result = (bit >>> 3).toString(2) + '';
    console.log(result[result.length-1]);
}