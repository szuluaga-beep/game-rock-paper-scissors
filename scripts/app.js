// Capturando elementos del DOM para las opciones piedra, papel y tijera
let botonPiedra = document.querySelector(".piedra");

let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let manoUsuario = document.querySelector(".mano-usuario");
let manoComputador = document.querySelector(".mano-computador");

let puntajeUsuario = document.querySelector(".puntaje-usuario p");
let puntajeComputador = document.querySelector(".puntaje-computador p");
let resultado = document.querySelector(".resultado");
let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionCompu = "";

let contUsuario = 0;
let contCompu = 0;

botonPiedra.addEventListener("click", () => {
  manoUsuario.src = "../assets/piedra_ada.png";
  manoComputador.src = "../assets/piedra_computadora.png";
  resultado.innerText = "...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuario.src = "../assets/piedra_ada.png";
    eleccionComputadora();
    resultadoJuego();
    tablero.classList.remove("jugando");
  }, 2000);
});

botonPapel.addEventListener("click", () => {
  manoUsuario.src = "../assets/piedra_ada.png";
  manoComputador.src = "../assets/piedra_computadora.png";
  resultado.innerText = "...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "papel";
    manoUsuario.src = "../assets/papel_ada.png";
    eleccionComputadora();
    resultadoJuego();
    tablero.classList.remove("jugando");
  }, 2000);
});
botonTijera.addEventListener("click", () => {
  manoUsuario.src = "../assets/piedra_ada.png";
  manoComputador.src = "../assets/piedra_computadora.png";
  resultado.innerText = "...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "tijera";
    manoUsuario.src = "../assets/tijera_ada.png";
    eleccionComputadora();
    resultadoJuego();
    tablero.classList.remove("jugando");
  }, 2000);
});

const eleccionComputadora = () => {
  let opcionAlAzar = Math.floor(Math.random() * 3);

  //Opción para piedra
  if (opcionAlAzar == 0) {
    manoComputador.src = "../assets/piedra_computadora.png";
    eleccionCompu = "piedra";
  } else if (opcionAlAzar == 1) {
    //Opción para papel
    manoComputador.src = "../assets/papel_computadora.png";
    eleccionCompu = "papel";
  } else {
    //Opción para tijera
    manoComputador.src = "../assets/tijera_computadora.png";
    eleccionCompu = "tijera";
  }
};

const resultadoJuego = () => {
  if (eleccionUsuario == eleccionCompu) {
    resultado.innerText = "Empate";
  } else if (eleccionUsuario === "piedra" && eleccionCompu === "tijera") {
    resultado.innerText = "Ganaste 🎉";
    contUsuario++;
    puntajeUsuario.innerText = contUsuario;
    ganador(contUsuario, contCompu);
  } else if (eleccionUsuario === "papel" && eleccionCompu === "piedra") {
    resultado.innerText = "Ganaste 🎉";
    contUsuario++;
    puntajeUsuario.innerText = contUsuario;
    ganador(contUsuario, contCompu);
  } else if (eleccionUsuario === "tijera" && eleccionCompu === "papel") {
    resultado.innerText = "Ganaste 🎉";
    contUsuario++;
    puntajeUsuario.innerText = contUsuario;
    ganador(contUsuario, contCompu);
  } else {
    resultado.innerText = "Perdiste 😥";
    contCompu++;
    puntajeComputador.innerText = contCompu;
    ganador(contUsuario, contCompu);
  }
};

const ganador = (puntajeUser, puntajeMaquina) => {
  //   console.log("Usuario: " + puntajeUser, " maquina: " + puntajeMaquina);
  if (puntajeUser >= 3 && puntajeUser > puntajeMaquina) {
    console.log("Usuario Ganador");
    swalGanador();
    setTimeout(limpiarMarcadores, 3000);
  } else if (puntajeMaquina >= 3 && puntajeUser < puntajeMaquina) {
    console.log("Maquina Ganador");
    swalPerdedor();
    setTimeout(limpiarMarcadores, 3000);
  }
};

const limpiarMarcadores = () => {
  contUsuario = 0;
  contCompu = 0;
  resultado.innerText = "Seleccione una opción";
  puntajeUsuario.innerText = contUsuario;
  puntajeComputador.innerText = contCompu;
};
// Alertas
const swalInicio = () => {
  Swal.fire("¿Jugamos?", "Gana el primero que alcance 3 puntos", "question");
};

const swalPerdedor = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Sigue intentado",
    allowOutsideClick: false,
  });
};

const swalGanador = () => {
  Swal.fire({
    icon: "success",
    title: "Ganaste",
    text: "Eres el mejor",
    confirmButtonText: "Cool",
    allowOutsideClick: false,
  });
};

swalInicio();
