var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessCount = 0;
var guessLimit = 3;
var guesses = [];


function tester() {
    var uNum = parseInt(document.getElementById("number").value);
    guessCount++;
    guesses.push(uNum);

    if (guessCount === 1) {
        var title = document.querySelector("h1");
        title.parentNode.removeChild(title);
    }

    if (uNum == randomNumber) {
        document.getElementById("snpResult").innerHTML = "Gagné en " + guessCount + "Essai!";
    }
    else if (guessCount === guessLimit) {
        document.getElementById("snpResult").innerHTML = "Perdu! le numéro était " + randomNumber + ".";
    } else if (uNum < randomNumber) {
        document.getElementById("snpResult").innerHTML = "Essai " + guessCount + ": " + uNum + " est trop petit. Essayez encore!";
    } else if (uNum > randomNumber) {
        document.getElementById("snpResult").innerHTML = "Essai " + guessCount + ": " + uNum + " est trop grand. Essayez encore!";
    }
}

function rejouer() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guessCount = 0;
    guesses = [];
    document.getElementById("number").value = "0"
    document.getElementById("snpResult").innerHTML = "";
}






