let altura = 0
let largura = 0
let posicaoX = 0
let posicaoY = 0
let mosquito = null
let vidas = 1
let tempo = 20
let velocidadeCriacao = 3000
let dificuldade = window.location.search.replace('?','')

function controleDificuldade(){
    switch (dificuldade) {
        case 'facil':
            velocidadeCriacao = 3000
            tempo = 20
            break;
        case 'medio':
            velocidadeCriacao = 2000
            tempo = 40
            break;
        case 'dificil':
            velocidadeCriacao = 1000
            tempo = 60
            break;
        default:
            velocidadeCriacao = 3000
            tempo = 20
            break;
    }
}
controleDificuldade()

let cronometro = setInterval(()=>{
    tempo -= 1
    document.getElementById('tempo').innerHTML = tempo
}, 1000)

function atualizarTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura+" : "+largura)
}
atualizarTamanho()

function posicionarAleatorio(){
    posicaoX = Math.floor(Math.random() * largura) - 80
    posicaoY = Math.floor(Math.random() * altura) - 80
    console.log(posicaoX+" : "+posicaoY)
    
    posicaoX = posicaoX < 0 ? 0:posicaoX
    posicaoY = posicaoY < 0 ? 0:posicaoY
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }
}

function ladoAleatorio(){
    let lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'scaleX(-1)'
        case 1:
            return 'scaleX(1)'
    }
}

function gameOver(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
       
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++ 

        if(vidas > 3){
           window.location.href = 'gameover.html'
        }
    }

    if(tempo <= 1){
        window.location.href = 'win.html'
    }
}

let criarMosquito = setInterval(()=>{
    gameOver()
    posicionarAleatorio()
    
    mosquito = document.createElement('img')
    mosquito.id = 'mosquito'
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.transform = ladoAleatorio()
    mosquito.onclick = ()=>{
        mosquito.remove()
    }

     document.body.appendChild(mosquito)
}, velocidadeCriacao)


