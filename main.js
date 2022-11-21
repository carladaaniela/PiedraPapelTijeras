let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const tableroPuntuacion_div = document.querySelector(".tableroPuntuacion");
const resultado_p = document.querySelector(".resultado > p");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijeras_div = document.getElementById("tijeras");


function getComputerChoice () {
    const choices = ['piedra','papel', 'tijeras'];
    const randomNumber = Math.floor(Math.random() * 3); //Redondeado, entre 0 y 2. (3 numeros) 
    return choices [randomNumber];
}

function convertToWord (lowercase) {
    if (lowercase === "piedra") return "Piedra";
    if (lowercase === "papel") return "Papel";
   return "Tijeras";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore; //Pinta el score en el tablero
    computerScore_span.innerHTML = computerScore;
    resultado_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} vence ${convertToWord(computerChoice)}${smallCompWord} Ganaste🔥!`;
    userChoice_div.classList.add('green-glow'); 
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300); //duración del borde verde.
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub(); //pone el "user" abajo
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore; //Pinta el score en el tablero
    computerScore_span.innerHTML = computerScore;
    resultado_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} no vence ${convertToWord(computerChoice)}${smallCompWord} Perdiste👎`;
    userChoice_div.classList.add('red-glow'); 
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    resultado_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} iguala ${convertToWord(computerChoice)}${smallCompWord} Empate`;
    userChoice_div.classList.add('grey-glow'); 
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "piedratijeras": //usuario piedra, computador tijeras
        case "papelpiedra":
        case "tijeraspapel":
            win(userChoice, computerChoice);
        break;
        case "piedrapapel": //usuario piedra, computador papel. 
        case "papeltijeras":
        case "tijeraspiedra":
            lose(userChoice, computerChoice)
        break;
        case "piedrapiedra":
        case "papelpapel":
        case "tijerastijeras":
            draw(userChoice, computerChoice)
         break;
        
    }
}


function main (){
    piedra_div.addEventListener('click', () => game("piedra"));
    papel_div.addEventListener('click', () => game("papel"));
    tijeras_div.addEventListener('click', () => game("tijeras"));
}

main();





