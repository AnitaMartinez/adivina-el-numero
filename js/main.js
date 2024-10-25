"use strict";

// Variables globales
const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const message = document.querySelector(".js-message");
const counter = document.querySelector(".js-counter");

// variable global para el contador
let attemps = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log("Número aleatorio: ", randomNumber);

function guessNumber() {
    const numberUser = parseInt(input.value);

    if (numberUser > 100 || numberUser < 1) {
        message.innerHTML = "Escribe un número entre 1 y 100";
    } else if (randomNumber > numberUser) {
        message.innerHTML = "Pista: Demasiado bajo";
    } else if (randomNumber < numberUser) {
        message.innerHTML = "Pista: Demasiado alto";
    } else if (randomNumber === numberUser) {
        message.innerHTML = "Has ganado, campeona";
    }
}

function setCounter() {
    // attemps = attemps + 1;
    // attemps += 1;
    attemps++;
    counter.innerHTML = "Número de intentos: " + attemps;
}

// En la función manejadora, voy a escribir todas las instrucciones que se ejecutan a raíz del evento (click);
function handleClickButton() {
    guessNumber();
    setCounter();
}

button.addEventListener("click", handleClickButton);