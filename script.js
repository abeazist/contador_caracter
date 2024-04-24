const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")


inputTexto.addEventListener("input",handleInputTexto)
btnContar.addEventListener("click",handleBtnContar)
btnContar.addEventListener("click",handleInputTexto)

let estado = "caracteres"

function handleInputTexto(evento){
    let palavras
    if (estado == "caracteres"){
        divContador.innerText = inputTexto.value.length + " caracteres"

    }   else {       
        palavras = (inputTexto.value.trim() == "" ? 0 : inputTexto.value.trim().split(/\s+/).length)
        divContador.innerText = palavras + " Palavras"
    }
}

function handleBtnContar(evento){
    if (estado === "caracteres"){
        estado = "palavras"
        btnContar.innerText = "Contar Palavras"
    }else {
        estado = "caracteres"
        btnContar.innerText = "Contar Caracteres"
}
}
