function clicked() {
    console.log("Abbiamo clickato!")
}

function hover() {
    console.log("Hai passato il mouse!!")
}

function mouseLeft() {
    console.log("Mouse fuori")
}

const button = document.querySelector('input[type="button"]')

const textInput = document.querySelector('input[type="text"]')


// Gli eventi piu importanti
// click, input, change

// submit - in un contesto AJAX



// window.onload

// È la funzione che viene eseguita quando la pagina finisce di caricarsi

window.onload = function () {
    alert("benvenuto")

    // Aggiungiamo l'event listener 
    button.addEventListener("click", clicked)

    // Assegniamo la funzione clicked all'attributo onclick
    button.addEventListener("click", function () {
        console.log("macarena")
    })

    button.onclick = function () {
        console.log("mambo")
    }


    textInput.addEventListener("input", function (event) {
        console.log(event.target.value)
    })

}