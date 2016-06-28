function largerThanNeighbours(args) {
    var input = args[0].split('\n'),
        arrayLength = input[0],
        array = input[1].split(' ').map(Number);

    return neighboursChecker(array, arrayLength);

    function neighboursChecker(sequence, arrLength) {
        var counter = 0,
            i;
        for (i = 1; i < arrLength - 1; i++) {
            if (sequence[i - 1] < sequence[i] && sequence[i + 1] < sequence[i]) {
                counter += 1;
            }
        }

        return counter;
    }
}

// test
console.log(largerThanNeighbours(['6\n-26 -25 -28 31 2 27']));