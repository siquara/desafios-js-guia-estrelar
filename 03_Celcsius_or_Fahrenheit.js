/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function conversor(temperatura){
    const celsius = temperatura.toUpperCase().includes('C')
    
    temperatura = temperatura.slice(0,temperatura.length -1);
    
    if (celsius){
        let F = temperatura * 9/5 + 32 
        console.log(`A conversão de ${temperatura}C em fahrenheit é : ${F}F`)
    }else{
        let C = (temperatura - 32) * 5/9
        console.log(`A conversão de ${temperatura}F em celsius é : ${C}C`)
    }

}
conversor('10c')