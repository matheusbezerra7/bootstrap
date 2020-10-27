
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let nota = document.querySelector("#nota")
let click = document.querySelector("#click")

let nomeOk = false
let emailOk = false
let notaOk = true
let clickOk = false


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    
    if(nome.value.length <3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML="E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color= "green"
        emailOk = true
    }
}


function validaClick() {
    if(click.checked){
        txtClick.innerHTML="Confirmado"
        txtClick.style.color = "green"
        clickOk = true
    }else {
        txtClick.innerHTML = "Clique no botão"
        txtClick.style.color = "red"
    }
}


function enviar(){
    if(nomeOk == true && emailOk == true && notaOk == true && clickOk == true){
        alert("Formulário enviado !")
       
    }else{
        alert("Preencha o formulário corretamente antes de enviar ..")
    }
}
