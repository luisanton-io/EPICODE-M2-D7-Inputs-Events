console.log("ciao")

const textInput = document.querySelector("input[type='text']")

const numberInput = document.querySelector("input[type='number']")

const checkboxInput = document.querySelector("input[type='checkbox']")


function checkWin() {

    // Risposte giuste: 4, 3
    let won1 = false
    let won2 = false

    // Recuperare il valore selezionato per la prima domanda
    const inputListQ1 = document.querySelectorAll("[name='group-1']")

    for (const input of inputListQ1) {
        if (input.value === "4" && input.checked) {
            won1 = true
        }
    }

    const inputListQ2 = document.querySelectorAll("[name='group-2']")

    for (const input of inputListQ2) {
        if (input.value === "3" && input.checked) {
            won2 = true
        }
    }

    if (won1 && won2) {
        alert("Congratulazioni arrivederci e grazie")
    } else {
        alert("No guarda hai sbagliato torna indietro")
    }
}