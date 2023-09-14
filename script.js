console.log("Hola Mundo");

let diccionario = ["ABEJA","CINCO","MANTA","DEDOS","ARBOL","ARAÑA"];
//console.log(Math.floor(Math.random() * diccionario.length - 1) + 1);
let indice =Math.floor(Math.random() * diccionario.length - 1) + 1;
console.log(indice);
let palabra;

fetch("https://random-word-api.herokuapp.com/word?length=5&&number=1&&lang=es")
     .then(response => response.json())
     .then(response => {
        console.log(response)
        palabra = response [0].toUpperCase()
     })
     .catch(err => console.error(err));

//let palabra = diccionario[indice];

let intentos = 6;

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
addEventListener("keydown.enter", intentar);


function intentar (){
        console.log(palabra);
        const GRID = document.getElementById("grid");
        const INTENTO = leerIntento();
        const ROW = document.createElement('div');
        ROW.className = 'row';
        

        if (INTENTO.length != 5 ) {
            alert("Debe ingresar una palabra de 5 letras");
            return
        }

        if (INTENTO === palabra ) {
            terminar("<h1>GANASTE!😀</h1>")
            //console.log("GANASTE!")
            return
        }
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i]===palabra[i]){
               SPAN.innerHTML = INTENTO[i];
               SPAN.style.backgroundColor = "#79b851";
               // console.log(INTENTO[i], "VERDE")
            } else if( palabra.includes(INTENTO[i]) ) {
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "#f3c237";
               // console.log(INTENTO[i], "AMARILLO")
            } else {
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = '#a4aec4';
                //console.log(INTENTO[i], "GRIS")
            }
            ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
        intentos-- /*abrev de intentos = intentos-1*/
        if (intentos==0){
            terminar("<h1>PERDISTE!😖</h1>")
            //console.log("PERDISTE!")
        }
    }

    
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 

    /*if (intento.length == 5){
        intento = intento.toUpperCase();    
    } else {
        alert("Debe ingresar una palabra de 5 letras")
    }*/
    

    for (let i in intento){
       /* console.log("position:", i)
       /* console.log(intento[i]);*/
    }
    
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


