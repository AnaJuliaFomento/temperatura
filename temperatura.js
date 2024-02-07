let resposta = document.getElementById('resposta')

function calcular(){
   
    let temperatura = Number (document.getElementById("temperatura").value)
  
    let graus = 0 

    graus = (temperatura * 9/5) + 32
    console.log(graus)
}
