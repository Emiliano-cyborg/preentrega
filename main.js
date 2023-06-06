let coste = 0;
let ciudadDestino, diasAuto;

saludar();

function saludar() {
  let nombreIngresado = prompt("Ingresa tu nombre");
  alert("Hola " + nombreIngresado + ", somos ARLINE y vamos a cotizar tu próximo viaje");
  console.log("Bienvenido: " + nombreIngresado)
  hotel();
}

function hotel() {
  let valorValido = false;

  while (!valorValido) {
    let nochesHotel = prompt("Ingresa cuántas noches deseas quedarte, siendo 2 el mínimo y 10 el máximo");

    let numNoches = parseInt(nochesHotel);

    if (numNoches >= 2 && numNoches <= 10) {
      valorValido = true;
      switch (nochesHotel) {
        case "2":
          alert("Tu número de noches son 2 a $ARS 50000");
          coste += 50000;
          break;
        case "3":
          alert("Tu número de noches son 3 a $ARS 60000");
          coste += 60000;
          break;
        case "4":
          alert("Tu número de noches son 4 a $ARS 70000");
          coste += 70000;
          break;
        case "5":
          alert("Tu número de noches son 5 a $ARS 80000");
          coste += 80000;
          break;
        case "6":
          alert("Tu número de noches son 6 a $ARS 90000");
          coste += 90000;
          break;
        case "7":
          alert("Tu número de noches son 7 a $ARS 100000");
          coste += 100000;
          break;
        case "8":
          alert("Tu número de noches son 8 a $ARS 110000");
          coste += 110000;
          break;
        case "9":
          alert("Tu número de noches son 9 a $ARS 120000");
          coste += 120000;
          break;
        case "10":
          alert("Tu número de noches son 10 a $ARS 130000");
          coste += 130000;
          break;
      }
    } else {
      alert("No tenemos disponibles esa cantidad de noches");
    }
    console.log("Vas a hospedarte: ", nochesHotel);
  }


}

let viajes = [
  { ciudadDestino: "Madrid", continente: "Europa", costo: 455000 },
  { ciudadDestino: "Miami", continente: "Norte America", costo: 266500 },
  { ciudadDestino: "Cancun", continente: "Norte America", costo: 220800 },
  { ciudadDestino: "Rio de Janeiro", continente: "America del Sur", costo: 90000 },
  { ciudadDestino: "Roma", continente: "Europa", costo: 490500 },
  { ciudadDestino: "Punta Cana", continente: "Norte America", costo: 275850 },
  { ciudadDestino: "Asuncion", continente: "America del Sur", costo: 78600 }
];



function contieneDestino(destino) {
  return viajes.some(viaje => viaje.ciudadDestino.toLowerCase() === destino.toLowerCase());
}

let destinoIngresado = prompt("Ingresa el destino que deseas verificar:").toLowerCase();
let contieneDestinoIngresado = contieneDestino(destinoIngresado);

if (contieneDestinoIngresado) {
  console.log("El destino está en la lista de viajes.");
} else {
  console.log("El destino no está en la lista de viajes.");
  
}
destino()


function destino() {
  let valorValido = false;

  while (!valorValido) {
    ciudadDestino = prompt("Ingresa un destino de los siguientes en la lista: Madrid, Miami, Cancun, Rio de Janeiro, Roma, Punta Cana, Asuncion").toLowerCase();

    switch (ciudadDestino) {
      case "madrid":
        alert("Tu vuelo a Madrid son $ARS 455000");
        coste += 455000;
        valorValido = true;
        break;
      case "miami":
        alert("Tu vuelo a Miami son $ARS 266500");
        coste += 266500;
        valorValido = true;
        break;
      case "cancun":
        alert("Tu vuelo a Cancun son $ARS 220800");
        coste += 220800;
        valorValido = true;
        break;
      case "rio de janeiro":
        alert("Tu vuelo a Rio de Janeiro son $ARS 90000");
        coste += 90000;
        valorValido = true;
        break;
      case "roma":
        alert("Tu vuelo a Roma son $ARS 490500");
        coste += 490500;
        valorValido = true;
        break;
      case "punta cana":
        alert("Tu vuelo a Punta Cana son $ARS 275850");
        coste += 275850;
        valorValido = true;
        break;
      case "asuncion":
        alert("Tu vuelo a Asuncion son $ARS 78600");
        coste += 78600;
        valorValido = true;
        break;
      default:
        alert("No tenemos ese destino disponible");
    }
  }

  console.log("Destino:", ciudadDestino);
  pregunAlquiler();
}





function filtrarPorDestino(destino) {
  return viajes.filter(viaje => viaje.continente.toLowerCase() === destino.toLowerCase());
}

let destinoFiltrado = prompt("Ingresa el continente que deseas filtrar: (Europa, América del Sur, Norte América)").toLowerCase();
let viajesFiltrados = filtrarPorDestino(destinoFiltrado);

document.write("<h2>Resultados del filtro por continente: " + destinoFiltrado + "</h2>");
document.write("<ul>");
viajesFiltrados.forEach(viaje => {
  document.write("<li>Ciudad: " + viaje.ciudadDestino + " - Costo: $" + viaje.costo + "</li>");
});
document.write("</ul>");

console.log(viajesFiltrados);


function buscarPorDestino(destino) {
  return viajes.find(viaje => viaje.ciudadDestino.toLowerCase() === destino.toLowerCase());
}

let destinoBuscado = prompt("Ingresa el destino que deseas buscar: (Madrid, Miami, Cancun, Rio de Janeiro, Roma, Punta Cana, Asuncion)").toLowerCase();
let viajeEncontrado = buscarPorDestino(destinoBuscado);

if (viajeEncontrado) {
  document.write("<h2>Viaje encontrado:</h2>");
  document.write("<p>Ciudad: " + viajeEncontrado.ciudadDestino + "</p>");
  document.write("<p>Costo: $" + viajeEncontrado.costo + "</p>");
} else {
  document.write("<p>No se encontró ningún viaje con el destino especificado.</p>");
}

console.log(viajeEncontrado);



function pregunAlquiler() {
  let alquiAuto = prompt("¿Quieres alquilar un auto? (Si o No)");
  switch (alquiAuto.toLowerCase()) {
    case "si":
      console.log("Decidiste alquilar un auto: ", alquiAuto)
      alquilarAuto();
      break;
    case "no":
      resultado();
      break;
    default:
      alert("Respuesta no válida. Por favor, introduce 'Si' o 'No'.");
      pregunAlquiler();
      break;
    }
    
}

function alquilarAuto() {
  alert("Decidiste alquilar un auto");
  diasAuto = prompt("Ingresa los días que alquilarás un auto, de 2 a 10 días");
  switch (diasAuto) {
    case "2":
      alert("Tu costo de alquiler de auto para 2 días es de $ARS 50000");
      coste += 50000;
      break;
    case "3":
      alert("Tu costo de alquiler de auto para 3 días es de $ARS 60000");
      coste += 60000;
      break;
    case "4":
      alert("Tu costo de alquiler de auto para 4 días es de $ARS 75000");
      coste += 75000;
      break;
    case "5":
      alert("Tu costo de alquiler de auto para 5 días es de $ARS 80000");
      coste += 80000;
      break;
    case "6":
      alert("Tu costo de alquiler de auto para 6 días es de $ARS 90000");
      coste += 90000;
      break;
    case "7":
      alert("Tu costo de alquiler de auto para 7 días es de $ARS 100000");
      coste += 100000;
      break;
    case "8":
      alert("Tu costo de alquiler de auto para 8 días es de $ARS 110000");
      coste += 110000;
      break;
    case "9":
      alert("Tu costo de alquiler de auto para 9 días es de $ARS 120000");
      coste += 120000;
      break;
    case "10":
      alert("Tu costo de alquiler de auto para 10 días es de $ARS 135000");
      coste += 135000;
      break;
    default:
      alert("No tenemos disponibles esa cantidad de días");
      alquilarAuto(); 
      break;
  }
  console.log("Cantidad de dias con auto: ",  diasAuto)

  resultado();
}

function resultado() {
  alert("Tu costo total es de: $ARS " + coste);
  console.log("Tu costo total es de: $ARS " + coste)
}



let convertirDolar = prompt("¿Quieres pasar tu presupuesto a precio Dólar? (Si o No)").toLowerCase();
let precioDolar = 480;
alert("El precio del dólar hoy es: $ARS " + precioDolar);

if (convertirDolar === "si") {
    var resultDolar = coste / precioDolar;
    alert("El costo de tu viaje en dólares es: $" + resultDolar);
} else if (convertirDolar === "no") {
    alert("Perfecto, cualquier consulta no dudes en contactarte nuevamente");
} else {
    alert("Respuesta no válida. Por favor, introduce 'Si' o 'No'.");
}

console.log(resultDolar)

alert("Gracias por utilizar nuestros servicios. ¡Que tengas un excelente viaje!");