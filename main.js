// stampa i numeri da 1 a 100
for (var i=1; i <= 100; i++) {

    if (i % 15 == 0)
        console.log("FizzBuzz");   // al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"
    else if (i % 3 == 0)
        console.log("Fizz");       // al posto dei multipli di 3 stampi "Fizz"
    else if (i % 5 == 0)
        console.log("Buzz");       // al posto dei multipli di 5 stampi "Buzz"
    else
        console.log(i);
}
