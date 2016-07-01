function solve(str){
    var i,
    input = String(str),
    output = '',
    len = input.length;

    for(i = len-1; i>=0; i-=1){
        output +=input[i];
    }
    return output;

}