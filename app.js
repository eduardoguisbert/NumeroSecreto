// Estas dos instrucciones fuero reemplazadas por una función general.
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Selecciona un número del 1 y el 10';

let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`El número esta entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    numeroIntentos = 1;
}

condicionesIniciales()

// Función que genera el número secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números');
    }else{
        // Si el número esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Función que compara el número aleatorio con el número del usuario
function veficarNumero(){
    let numeroDeUsuario = parseInt(document.getElementById('userNumber').value);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p',`¡Acertaste! ${numeroIntentos > 1 ? `en ${numeroIntentos} intentos` : 'a la primera!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p','El número secreto es mayor');
        } else {
            asignarTextoElemento('p','El número secreto es menor');
        }
        numeroIntentos++;
        limpiarCaja()
    }
    return;
}

// Función que limpia la caja del imput
function limpiarCaja(){
    document.querySelector('#userNumber').value = '';
}

// Función que reincia el juego
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números
    //Generar el número aletorio
    //Inicializar el número de intentos
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','True');
}