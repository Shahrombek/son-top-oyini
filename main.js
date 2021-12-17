const number = document.getElementById("number");
const num = document.getElementById("demo");
const togri = document.getElementById("succes");
const notogri = document.getElementById("unsucces");
const democha = document.getElementById("demooo");
const player = document.getElementById("player");
const player1 = document.getElementById("player1");

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
number.focus();

let count = 10;

function check() {
    count--;
    if (number.value == "") {
        count++;
        democha.innerHTML = "";
    }

    else if (randomNumber == number.value) {
        succes.style.display = "block";

        // g'olib divga stil berish
        
        //G'olib mp3ni yoqish
        player.play();
    }
    else if (count == 0 && succes.style.display !== "block") {
        unsucces.style.display = "block";

        //Mag'lub mp3ni yoqish
        player1.play();
    }

    else if (randomNumber > number.value) {
        democha.innerHTML = "Siz kiritgan son kichik";
    }
    else if (randomNumber < number.value) {
        democha.innerHTML = "Siz kiritgan son katta";
    }

    num.innerHTML = count;
}


function chesk() {
    count = 10;
    num.innerHTML = count;

    randomNumber = Math.floor(Math.random() * 100) + 1;

    democha.innerHTML = "";
    number.value = '';

    succes.style.display = "none";
    unsucces.style.display = "none";

}