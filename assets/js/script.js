var ex1
// variavel de escopo global
let ex2
// variavel de escopo local
const ex3 = 0
// variavel de escopo global, porém seu valor não muda

let nome = window.document.getElementById('nome')
// essa linha de código acessa o elemento input cujo id é nome
// no caso, ele acessa os elementos cujo id é nome, mas nesse caso ele nos trará o input nome

/* 
    Acessar o DOM por:
    - por Tag: getElementByTagName()
    - por Id: getelementById()
    - por Nome: getElementsByName()
    - por Classe: getElementsByClassName()
    - por Seletor: querySelector()
        * por seletor é possível passar uma tag, id, nome, etc etc
*/

let email = document.querySelector('#email')
// se for id colocar o # antes, se for classe colocar .

let asssunto = document.querySelector('#assunto')
// se colocar uma # no getElementById ele não vai funcionar, mas no querySelector precisa

nome.style.width = '100%'
// como já chamamos o elemento nome aqui neste arquivo, podemos trocar o style dele
// chamando ele .style + o que queremos mudar que ele irá funcionar

email.style.width = '100%'

let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = '✔️'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-Mail inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = '✔️'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(asssunto.value.length > 100){
        // txtAssunto.innerHTML = '<h1> Teste h1 </h1>'
        // é possível passar tags html por aqui também
        txtAssunto.innerHTML = 'O texto é muito grande'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}