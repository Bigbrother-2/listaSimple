/*Fecha paara presentacion */
// Parte derecha
let fechaActual = new Date()  //Creamos la fecha

let opcionesDeFecha = { //Formateamos la fecha, es decir le damos el formato que queremos
    year: "numeric",
    month: "short",
    day: "numeric"
} 



let fechaDerecha = fechaActual.toLocaleString("es-ES", opcionesDeFecha)//Guardamos la fecha con el formato del usuario


document.getElementById("fechaDerecha").textContent = fechaDerecha


// Parte Izquierda

let opcionesDeFechaIzquierda = {
    weekday: "long"  //Para mostrar el dia en palabras
}

let fechaIzquierda = fechaActual.toLocaleString("es-ES",opcionesDeFechaIzquierda)

/*Funcion para pasar las cosas a mayusculas */

function aMayus (fecha) {
    let letrasSeparadas = fecha.split("")
    let letrasUnidas = ""
    for(let i =0; i < letrasSeparadas.length;i++){
        let indiceAnalizado = letrasSeparadas[i]
        let mayusculas = indiceAnalizado.toUpperCase()
        letrasUnidas += mayusculas
    }
    return letrasUnidas
}

let fechaIzquierdaMostrar = aMayus(fechaIzquierda)


document.getElementById("fechaIzquierda").textContent = fechaIzquierdaMostrar 



// Para quitar el border-style en el input cuando doy click

let input = document.getElementById("input")

input.addEventListener("click",()=>{
    input.style.outline = "none"
})


// Agregar tarea. 

let valorDelInput = input

let botonAgregar = document.getElementById("enter")

botonAgregar.addEventListener("click",()=>{
    console.log(valorDelInput.value)
    valorDelInput.value = ""
})