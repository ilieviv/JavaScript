function isPrime(number) {
    var num = number[0];
    var prime = true;

    if (num < 2) {
        prime = false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
        }
    }

    console.log(prime);

}