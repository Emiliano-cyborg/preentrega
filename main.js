alert("BIENVENIDO A ARLINE")
let coste = 0
let NochesHotel, ciudadDestino, DiasAuto;

saludar()
function saludar() {
    let nombreIngresado = prompt("Ingresar nombre")
    alert("Hola " + nombreIngresado + " Somos ARLINE y vamos a cotizar tu proximo viaje")
    hotel()
}



function hotel() {
    NochesHotel = prompt("Ingresa cuantas noches deseas quedarte siendo 2 el minimo y 10 el maximo");

    switch(NochesHotel){
        case "2":
            alert("Tu numero de noches son 2 a $ARS 50000");
            coste += 50000;
            break;
        case "3":
            alert("Tu numero de noches son a $ARS 60000");
            coste += 60000;
            break;
        case "4":
            alert("Tu numero de noches son a $ARS 70000");
            coste += 70000;
            break;
        case "5":
            alert("Tu numero de noches son a $ARS 80000");
            coste += 80000;
            break;
        case "6":
            alert("Tu numero de noches son a $ARS 90000");
            coste += 90000;
            break;
        case "7":
            alert("Tu numero de noches son a $ARS 100000");
            coste += 100000;
            break;
        case "8":
            alert("Tu numero de noches son a $ARS 110000");
            coste += 110000;
            break;
        case "9":
            alert("Tu numero de noches son a $ARS 120000");
            coste += 120000;
            break;
        case "10":
            alert("Tu numero de noches son a $ARS 130000");
            coste += 130000;
            break;
            default:
                alert("No tenemos disponibles esa cantidad de noches");
                break;
        }
        console.log(NochesHotel);
        destino()
}


function destino() {
    ciudadDestino = prompt("Ingresa un destino de los siguientes en la lista: Madrid, Miami, Cancun, Rio de Janeiro, Roma, Punta Cana, Asuncion")

    switch (ciudadDestino) {
        case "Madrid":
            alert("Tu vuelo a Madrid son $ARS 455000")
            coste += 455000
            break;
        case "Miami":
                alert("Tu vuelo a Maimi son $ARS 266500")            
            coste += 266500
            break;
        case "Cancun":
            alert("Tu vuelo a Cancun son $ARS 220800")
            coste += 220800
            break;
        case "Rio de Janeiro":
            alert("Tu vuelo a Rio de Janeiro son $ARS 90000")
            coste += 90000
            break;
        case "Roma":
            alert("Tu vuelo a Roma son $ARS 490500")
            coste += 490500
            break;
        case "Punta Cana":
            alert("Tu vuelo a Punta Cana son $ARS 275850")
            coste += 275850
            break;
        case "Asuncion":
            alert("Tu vuelo a Asuncion $ARS 78600")
            coste += 78600
            break;
    
        default: 
            alert("No tenemos ese destino disponible")
            break;
    }
    console.log(ciudadDestino)
    pregunAlquiler()
}



function pregunAlquiler(){
    let alquiAuto = prompt("¿Queres alquilar un auto? (Si o No)")
    switch (alquiAuto) {
        case "Si":
            alquilarAuto()
            break;
        case "No":
            resultado()
            break;
        
        default:
            alert("Respuesta no validad. Por favor, introduzca 'Si' o 'No' ." )
            break;
    }
    console.log(alquiAuto)
}
/* let auto = prompt("¿Queres alquilar un auto? (Si o No)")

if(auto === "Si") {
    alquilarAuto();
} else if (auto === "No"){
   resultado();
} else {
    alert("Respuesta no valida. Por favor, introduzca 'Si' o 'No'.");
}
console.log(auto) */

function alquilarAuto(){
    alert("Decidiste alquilar un auto")
    DiasAuto = prompt("Ingresa los dias que alquilaras un auto de 2 a 10 dias");
    switch (DiasAuto) {
        case "2":
            alert("Tu costo de alquiler de auto para 2 dias es de $ARS 50000 ")
            coste += 50000
            break;
        case "3":
            alert("Tu costo de alquiler de auto para 3 dias es de $ARS 60000")
            coste += 60000
            break;
        case "4":
            alert("Tu costo de alquiler de auto para 4 dias es de $ARS 750000")
            coste += 75000
            break;
        case "5":
            alert("Tu costo de alquiler de auto para 5 dias es de $ARS 80000")
            coste += 80000
            break;
        case "6":
            alert("Tu costo de alquiler de auto para 6 dias es de $ARS 90000")
            coste += 90000
            break;
        case "7":
            alert("Tu costo de alquiler de auto para 7 dias es de $ARS 100000")
            coste += 100000
            break;
        case "8":
            alert("Tu costo de alquiler de auto para 8 dias es de $ARS 110000")
            coste += 110000
            break;
        case "9":
            alert("Tu costo de alquiler de auto para 9 dias es de $ARS 120000")
            coste += 120000
            break;
        case "10":
            alert("Tu costo de alquiler de auto para 10 dias es de $ARS 135000")
            coste += 135000
            break;
    
        default:
            alert("No tenemos disponibles esa cantidad de dias")
            break;
    }
    console.log(DiasAuto)
    resultado()
}


function resultado(){
    let cantNochesHotel = parseInt(NochesHotel);
    let cantDiasAuto    = parseInt(DiasAuto);
    if(cantDiasAuto)
    alert("Noches de hotel: " + cantNochesHotel + ", ciudad destino: " + ciudadDestino + ", días de coche alquilados: " + cantDiasAuto);
    else
    alert("Noches de hotel: " + cantNochesHotel + ", ciudad destino: " + ciudadDestino);
    alert("Tu presupuesto final es de: $ARS " + coste);

}





var convertirDolar = prompt("¿Queres pasar tu presupuesto a precio Dolar? (Si o No)")
let precioDolar = 480
alert("El precio del dolar hoy es: $ARS" + precioDolar)

if(convertirDolar === "Si") {
    var resultDolar = coste / precioDolar;
    alert("El costo de tu viaje en dolares es: $" + resultDolar  )
} else if (convertirDolar === "No"){
   alert("Perfecto, cualquier consulta no dude en contactarse nuevamente")
} else {
    alert("Respuesta no valida. Por favor, introduzca 'Si' o 'No'.");
}
