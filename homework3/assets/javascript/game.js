var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar = []
var randomLetter = "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]

document.onkeyup = function(event) {
    if (randomLetter === event.key) {
        wins += 1
        guessesLeft = 9
        guessesSoFar = []
        randomLetter = "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]
        alert("Everything is Awesome!")
    } else if (guessesLeft === 1) {
        losses += 1
        guessesLeft = 9
        guessesSoFar = []
        randomLetter = "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]
        alert("Yer mom's butt.")
    } else {
        guessesLeft -= 1
        guessesSoFar.push(event.key)
    }

    console.log("guess: ", event.key)
    console.log("wins: ", wins)
    console.log("losses: ", losses)
    console.log("guessesLeft: ", guessesLeft)
    console.log("guessesSoFar: ", guessesSoFar)
    console.log("randomLetter: ", randomLetter)

    document.querySelector("#wins").innerHTML = wins
    document.querySelector("#losses").innerHTML = losses
    document.querySelector("#guessesLeft").innerHTML = guessesLeft
    document.querySelector("#guessesSoFar").innerHTML = guessesSoFar.join(", ")
}
