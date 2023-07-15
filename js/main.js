const classControle = document.querySelectorAll('[data-controle]')
const statusRobo = document.querySelectorAll('[data-status]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

classControle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
            iteracoes(evento.target.dataset.controle, evento.target.parentNode)
            updateStatus(evento.target.dataset.peca)
        })
    }
)

function iteracoes (operacao, controleControlador) {
    const controle = controleControlador.querySelector('[data-contador]')
    
    if (operacao === '+')
        controle.value ++
    else 
        controle.value --
}

function updateStatus(peca) {
    statusRobo.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.status]
    })
}