

function play() {
    let numbers = [];
    numbers.length = 5;
    let userGuess = parseInt(document.getElementById("guess").value)
    let match = 0;

    for (i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * 10) + 1;

        if (userGuess == numbers[i]) {
            match = match + 1;
            document.getElementById("result").innerHTML = "You have " + match + " matches";

        }
    }

    document.getElementById("result1").innerHTML = 'Random Numbers: ' + numbers.toString();
    document.getElementById("result2").innerHTML = 'User Guess: ' + userGuess

}