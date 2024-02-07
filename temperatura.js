let resposta = document.getElementById('resposta')

function calcular(){
   
    let temperatura = Number (document.getElementById("temperatura").value)
  
    let graus = 0 

    graus = (temperatura * 1.8) + 32

    resposta.innerHTML = (graus)
}
