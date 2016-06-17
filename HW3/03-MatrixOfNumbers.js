function matrix(args) {
    var rows = +args;
    var matrix = [];
    
    for (var row = 0; row < rows; row += 1) {
        
        matrix[row] = '';
        var fill = row + 1;
        
        for (var col = 0; col < rows; col += 1) {
            matrix[row] += String(fill) + ' ';
            fill += 1;
        }
        
        matrix[row] = String(matrix[row]).trim();
        console.log(matrix[row]);
    }
} 