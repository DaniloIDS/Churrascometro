// Regras de negócio

//Consumo de carne por adulto: 400g (Se duração >= 6 horas passa para 650g)
//Consumo de bebida por adulto: 1000ml (Se duração >= 6 horas passa para 1500ml)
//Crianças valem por 0,5


let qtd_adultos = document.getElementById('btn_adultos');
let qtd_criancas = document.getElementById('btn_criancas');
let qtd_tempo = document.getElementById('btn_duracao');
let btn_submit = document.getElementsByClassName('button submit')[0]

let resultado = document.getElementById('resultado');


btn_submit.addEventListener('click', calcular)

function calcular(){
  let adultos = qtd_adultos.value
  let criancas = qtd_criancas.value
  let duracao = qtd_tempo.value
  

  let consumoCarne = (adultos * carnePP(duracao)) + ((criancas * carnePP(duracao)) / 2 )
  let consumoBebida = (adultos * bebidaPP(duracao) + (criancas * bebidaPP(duracao) / 2))

  resultado.innerHTML = `<p> Itens para o Churrasco </p>`
  resultado.innerHTML += `<p> ${(consumoCarne / 1000).toFixed(2)} Kg de Carne`
  resultado.innerHTML += `<p> ${consumoBebida / 1000} Lts de bebida`
}

function carnePP(duracao){
  if(duracao>=6){
    return 650;
  }
  else{
    return 400;
  }
}

function bebidaPP(duracao){
  if(duracao>=6){
    return 1500;
  }
  else{
    return 1000;
  }
}