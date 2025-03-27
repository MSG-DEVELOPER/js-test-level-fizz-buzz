/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */

const inputUser = document.getElementById("input");
const divMostrar = document.getElementById("div-mostrar");
const historial1 = document.getElementById("historial1");
const historial2 = document.getElementById("historial2");

let valor;
let caso;
let div3 = false;
let div5 = false;
let obj= {
    status: "", 
    message: "", 
    data: {
        number: 0, 
        result: "" 
    }
}

function printea() {
  divMostrar.textContent = "";
  valor = parseInt(inputUser.value);
  let validated = validaNumero(valor);
  if (validated) {
    caso = averiguaCaso(valor);
    divMostrar.textContent = caso;
    actualizaHistorial(valor);
  } else {
    alert("Debes introducir un numero!!");
  }
}

export function averiguaCaso(valor) {
  div3 = false;
  div5 = false;

  if (valor % 3 == 0) {
    div3 = true;
  }

  if (valor % 5 == 0) {
    div5 = true;
  }

  if (div3 && div5) {
    return "FizzBuzz";
  } else if (div3) {
    return "Fizz";
  } else if (div5) {
    return "Buzz";
  }

  return valor;
}

function actualizaHistorial(valor) {
  //historial.textContent=valor; se pasa bien el valor

  let newItem1 = document.createElement("li");
  newItem1.textContent = averiguaCaso(valor);
  historial1.appendChild(newItem1);

  let newItem2 = document.createElement("li");
  newItem2.textContent = valor;
  historial2.appendChild(newItem2);
}

function validaNumero(valor) {
  if (typeof valor === "number" && !isNaN(valor)) {
    return true;
  } else {
    return false;
  }
}
