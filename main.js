const number = document.getElementById("number");
const num = document.getElementById("demo");
const togri = document.getElementById("succes");
const notogri = document.getElementById("unsucces");
const democha = document.getElementById("demooo");
const player = document.getElementById("player");
const player1 = document.getElementById("player1");

let randomNumber = Math.floor(Math.random() * 100) + 1;
number.focus();

let count = 10;

function check() {
    count--;
    // agar son kiritmasa bajariladigan shart
    if (number.value == "") {
        count++;
        democha.innerHTML = "";
    }
    // to'g'ri topgan holatda bajariladigan sayt
    else if (randomNumber == number.value) {
        succes.style.display = "block";
        
        //G'olib mp3ni yoqish
        player.play();
    }

    // noto'g'ri topgan holatda bajariladigan sayt
    else if (count == 0 && succes.style.display !== "block") {
        unsucces.style.display = "block";

        //Mag'lub mp3ni yoqish
        player1.play();
    }

    // agar kiritilgan son kompyuter o'ylagan sondan katta bo'lsa bajariladigan shart
    else if (randomNumber > number.value) {
        democha.innerHTML = "Siz kiritgan son kichik";
    }
    
    // agar kiritilgan son kompyuter o'ylagan sondan kichik bo'lsa bajariladigan shart
    else if (randomNumber < number.value) {
        democha.innerHTML = "Siz kiritgan son katta";
    }

    num.innerHTML = count;
}


// modal oyna bosilganda bajariladigan funksiya
function chesk() {
    count = 10;
    num.innerHTML = count;

    // yangi random son tanlash
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // yordam tegini yashirish
    democha.innerHTML = "";

    // input tegidagi sonni tozalash
    number.value = '';

    // o'yin qayta boshlandandagi modallar holati
    succes.style.display = "none";
    unsucces.style.display = "none";

}