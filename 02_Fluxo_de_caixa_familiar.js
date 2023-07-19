/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let saldo = {
    receitas:[2000, 346.98, 5.86],
    despesas:[235.9, 50, 40.75],
}

function somaItens(array){
    let total = 0 ; 

    for(let i = 0; i < array.length; i++) {
        total += array[i]
        }
    
    return total
}

function saldoFinal (){
let total = 0;

let somaReceitas = somaItens(saldo.receitas);
let somaDespesas = somaItens(saldo.despesas);

total = somaReceitas - somaDespesas

mensagem = ""
if(total >= 0){
    mensagem = "positivo"

}else{
    mensagem = "negativo"
}

console.log(`Seu saldo está ${mensagem} e ele é: R$${total.toFixed(2)}`)
}

saldoFinal()