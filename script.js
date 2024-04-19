const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")
const contar = document.querySelector("[text-contador]")


inputTexto.addEventListener("input",handleInputTexto)
btnContar.addEventListener("click",handleBtnContar)

let modo = "caracteres"
function handleInputTexto(evento){
    console.log(evento.target.value)
}

function handleBtnContar(evento){
    if (modo === "caracteres"){
        modo = "palavras"
        btnContar.innerText = "Contar Palavras"
    } else {
        modo = "caracteres"
        btnContar.innerText = "Contar Caracteres"
    }
}


function contador(){
    let somar = document.getElementsByClassName("contador").value(0)
    let texto = inputTexto.value
    for (let n of btnContar){
        somar+=1
        
        document.querySelector("[txt-contador}").innerText = somar
    }
}

