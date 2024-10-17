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

let ulListaTarea = document.getElementById("lista")

botonAgregar.addEventListener("click",()=>{
    let valorInput = input.value

    if(valorInput !==""){
        ulListaTarea.insertAdjacentHTML(`beforeend`, `
            <li id="elemento">
                <i class='bx bx-radio-circle' id="circuloHecho"></i>
                <p class="texto"> ${valorInput} </p>
                <i class='bx bxs-trash-alt' id="Basurin"></i>
            </li>`)
    } else alert("Por favor, ingrese una tarea valida")
    valorDelInput.value = ""
})



// Para eliminar las tareas con el tacho de la basura. 

let tareas = document.getElementById("elemento")


let tachurin = document.getElementById("Basurin")


ulListaTarea.addEventListener("click", (e)=>{
    if(e.target.classList.contains("bxs-trash-alt")){
        let li = e.target.parentElement;
        li.remove()
    } else if(e.target.classList.contains("bx-radio-circle")){
        let circulo = e.target; // El elemento que se clickeó
        let tareaElemento = circulo.closest('li'); // Encontramos el <li> padre
        let textoTarea = tareaElemento.querySelector('p'); // Seleccionamos el <p> dentro del <li>

        if (circulo.classList.contains("bx-radio-circle")) {
            circulo.classList.remove("bx-radio-circle");
            circulo.classList.add("bx-check-circle"); // Cambia al check
            textoTarea.classList.toggle("tachado"); // Agregamos o quitamos la clase tachado
        }
    }
})


// Explicacion rapida.

/*
Para eliminar caulquiera que queramos tenemos que llamar al contenedor de todos, para que cuando escuche el evento, haga determinada cosa. Ahora como sabemos que hizo un click en el tacho? Bueno para eso usamos el .target Este devuelve informacion de donde fue clicleado. Por eso e el evento que fue escuchado, en este caso el click y si este evento fue escuchado en el classList de bxs-trash-alt hace determinada cosa, en este caso toma el elemento li con el parentElement. Que hace este parentElements. Toma el elemnto padre de donde se situa el hijo en este caso el tacho es el hijo y el li es el padre, por eso, toma de valor el li y luego lo elimina por separado. 

*/
