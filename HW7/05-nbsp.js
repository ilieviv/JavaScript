function solve(args){
    var output = ''; 
    input = args + '';

  output = input.replace(/ /g, '&nbsp;');
   console.log(output);
}

solve('This text contains 4 spaces!!');