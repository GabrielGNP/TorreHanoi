//boton para tomar y dejar discos
//var BotArAb = document.getElementById("bot");

//parte superior del boton, es la parte que cambia de estilo si se toca
var BotoArAbSup = document.getElementById("botArAbSup");

//Baa es la flecha que está en el boton, cambia de estilo al ser precionado
var Flech = document.getElementById("Baa");

// es la palanca de movimiento
var BotID = document.getElementById("botID");
// Flechas derecha e izquierda superiores en la palanca
var FlDs = document.getElementById("FlD");
var FlIs = document.getElementById("FlI");
//=================================================================
//Definicion de los distintos discos
var D1 = {
  D: document.getElementById("Disco1"),
  V: 1
};
var D2 = {
  D: document.getElementById("Disco2"),
  V: 2
};
var D3 = {
  D: document.getElementById("Disco3"),
  V: 3
};
var D4 = {
  D: document.getElementById("Disco4"),
  V: 4
};
var D5 = {
  D: document.getElementById("Disco5"),
  V: 5
};
var D6 = {
  D: document.getElementById("Disco6"),
  V: 6
};
var D0 = {
  V: 0
};
//=================================================================
var Indicador = {
  Objeto: document.getElementById("indicator"), //vincula el elemento HTML a la variable objeto
  Pos: 2, //indica el poste en el que esta hubicado (poste1 = 1, poste2 = 2, poste3 = 3)
  D: false, //D indica si el Indicador tiene seleccionado un disco (true) o no (false)
  DG: D0
};

//Definicion de controlador de primer poste
var Post1 = {
  Cont: true, //indica si el poste contiene discos (true) o no (false)
  P: [D1, D2, D3, D4, D5, D6]
};
var Post2 = {
  Cont: false, //indica si el poste contiene discos (true) o no (false)
  P: []
};
var Post3 = {
  Cont: false, //indica si el poste contiene discos (true) o no (false)
  P: []
};
//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
function TomarDisco(Post) {
  if (Post.cont) {
    var DQ = Post.P.pop(); //pop() devuelve el primer valor de la pila y lo elimina del array
    Indicador.DG = DQ;
    Indicador.D = true;
    if (!Post.P.length) {
      Post.Cont = false;
    } else {
      Post.Cont = true;
    }
  }
}

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

//crea un evento que se activa cada ves que se preciona una tecla y llama a la funcion Teclas
document.addEventListener("keydown", Teclas);

//se ejecuta cada vez que se preciona una tecla

function Teclas(evento) {
  switch (evento.keyCode) {
    case 38: //up
      EstiloBoton();
      if (!Indicador.D) {
        switch (Indicador.Pos) {
          case 1:
            TomarDisco(Post1);
            break;
          case 2:
            TomarDisco(Post2);
            break;
          case 3:
            TomarDisco(Post3);
            break;
          default:
            console.log("nothing");
        }
      }
      break;

    case 40: //down
      EstiloBoton();
      break;

    case 37: //left
      BotID.style.transform = "rotate(-15deg)";
      FlIs.style.color = "#27e3ed";
      switch (Indicador.Pos) {
        case 1:
          FlIs.style.color = "red";
          break;

        case 2:
          Indicador.Objeto.style.left = "107px";
          Indicador.Pos = 1;
          break;

        case 3:
          Indicador.Objeto.style.left = "348px";
          Indicador.Pos = 2;
          break;
        default:
          console.log("nothing");
      }
      setTimeout(function () {
        BotID.style.transform = "rotate(0deg)";
        FlIs.style.color = "#282828";
      }, 150); //100 equivale a 0.1 seg, 1000 equivale a 1 seg

      break;

    case 39: //right
      BotID.style.transform = "rotate(15deg)";
      FlDs.style.color = "#27e3ed";
      switch (Indicador.Pos) {
        case 1:
          Indicador.Objeto.style.left = "348px";
          Indicador.Pos = 2;
          break;
        case 2:
          Indicador.Objeto.style.left = "623px";
          Indicador.Pos = 3;
          break;
        case 3:
          FlDs.style.color = "red";
          break;
        default:
          console.log("nothing");
      }
      setTimeout(function () {
        BotID.style.transform = "rotate(0deg)";
        FlDs.style.color = "#282828";
      }, 150); //100 equivale a 0.1 seg, 1000 equivale a 1 seg
      break;
    default:
      console.log("nothing");
  }
}
//================================================================
//================================================================
//Cambia el estilo de lboton de tomar y dejar disco
function EstiloBoton() {
  BotoArAbSup.style.bottom = "10px";
  Flech.style.color = "#27e3ed";
  setTimeout(function () {
    BotoArAbSup.style.bottom = "15px";
    Flech.style.color = "#282828";
  }, 150);
}

//====================================================
document.addEventListener("DOMContentLoaded", RecInfo);
//Escribe en la consola del juego
function RecInfo() {
  var T = true;
  while (T === true) {
    var Info = document.getElementById("Inf");
    var inf0 = document.createElement("div");
    inf0.innerText = "========================";
    var inf1 = document.createElement("div");
    inf1.innerText = "Indicador.D: " + Indicador.D;
    var inf2 = document.createElement("div");
    inf2.innerText = "Indicador.Pos: " + Indicador.Pos;
    /*   var inf3 = document.createElement("div");
      inf3.innerText = "Indicador.DC.D.id: " + Indicador.DC.D.id;*/
    var inf4 = document.createElement("div");
    inf4.innerText = "Post1.Cont: " + Post1.Cont;
    var inf5 = document.createElement("div");
    inf5.innerText = "Post2.Cont: " + Post2.Cont;
    var inf6 = document.createElement("div");
    inf6.innerText = "Post3.Cont: " + Post3.Cont;
    Info.appendChild(inf0);
    Info.appendChild(inf1);
    Info.appendChild(inf2);
    /*Info.appendChild(inf3);*/
    Info.appendChild(inf4);
    Info.appendChild(inf5);
    Info.appendChild(inf6);
  }
}
