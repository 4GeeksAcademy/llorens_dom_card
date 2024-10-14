/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palo1 = document.querySelector("#palo1");
let palo2 = document.querySelector("#palo2");
let arr_palos = ["♦", "♥", "♠", "♣"];
let number = document.querySelector("#numero");
let valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "K", "Q"];

let pintar_valores = (valores_carta, number_container) => {
  let posicion_random = Math.floor(Math.random() * valores_carta.length);
  let valor = valores_carta[posicion_random];
  let valor_carta = document.createElement("h1");
  valor_carta.innerText = valor;
  valor_carta.style.fontSize = "10rem";
  number_container.appendChild(valor_carta);
};

let pintar_palos = (palo, color, palo1_container, palo2_container) => {
  let palo1_content = document.createElement("h1");
  palo1_content.innerText = palo;
  palo1_content.style.color = color;
  palo1_content.style.fontSize = "10rem";
  let palo2_content = document.createElement("h1");
  palo2_content.innerText = palo;
  palo2_content.style.color = color;
  palo2_content.style.fontSize = "10rem";

  palo1_container.appendChild(palo1_content);
  palo2_container.appendChild(palo2_content);
};

let inicializar_palos = (array_palos, palo1, palo2) => {
  let posicion_random = Math.floor(Math.random() * array_palos.length);
  let valor_obtenido = array_palos[posicion_random];

  switch (valor_obtenido) {
    case "♦":
      pintar_palos(valor_obtenido, "red", palo1, palo2);
      break;
    case "♥":
      pintar_palos(valor_obtenido, "red", palo1, palo2);
      break;

    case "♠":
      pintar_palos(valor_obtenido, "black", palo1, palo2);
      break;

    case "♣":
      pintar_palos(valor_obtenido, "black", palo1, palo2);
      break;
    default:
      break;
  }
};

window.onload = function() {
  //write your code here
  inicializar_palos(arr_palos, palo1, palo2);
  pintar_valores(valores, number);
};
