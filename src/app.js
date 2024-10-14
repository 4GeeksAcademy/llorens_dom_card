/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palo1 = document.querySelector("#palo1");
const palo2 = document.querySelector("#palo2");
const arr_palos = ["♦", "♥", "♠", "♣"];
const number = document.querySelector("#numero");
const valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "K", "Q"];

const getRandomElement = array =>
  array[Math.floor(Math.random() * array.length)];

const pintar_valores = (valores_carta, number_container, color) => {
  const valor = getRandomElement(valores_carta);
  const valor_carta = document.createElement("h1");
  valor_carta.textContent = valor;
  valor_carta.classList.add("valor-carta");
  valor_carta.classList.add(color === "red" ? "rojo" : "negro");
  number_container.appendChild(valor_carta);
};

const pintar_palos = (palo, color, container, rotar = false) => {
  const palo_content = document.createElement("h1");
  palo_content.textContent = palo;
  palo_content.classList.add("palo-carta", color === "red" ? "rojo" : "negro");
  if (rotar) {
    palo_content.classList.add("rotado");
  }
  container.appendChild(palo_content);
};

const inicializar_palos = (
  array_palos,
  palo1_container,
  palo2_container,
  number_container
) => {
  const valor_obtenido = getRandomElement(array_palos);
  const color =
    valor_obtenido === "♦" || valor_obtenido === "♥" ? "red" : "black";
  pintar_palos(valor_obtenido, color, palo1_container);
  pintar_palos(valor_obtenido, color, palo2_container, true);
  pintar_valores(valores, number_container, color);
};

window.onload = () => {
  inicializar_palos(arr_palos, palo1, palo2, number);
};
