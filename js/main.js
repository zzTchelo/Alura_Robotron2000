const robotron = document.querySelector('#robotron');

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco_robotron = document.querySelector('#braco_robotron');

subtrair.addEventListener('click', () => {
    braco_robotron.value --
})

somar.addEventListener('click', () => {
    braco_robotron.value ++
})

robotron.addEventListener('click', () => {
    console.log('Oi, essa é uma Arrow Function')
})