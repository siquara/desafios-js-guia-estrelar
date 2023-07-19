/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let grade = 80;
let final_grade;
if(grade >= 90){
    final_grade= "A"
}else if(grade >= 80 && grade <= 89 ) {
    final_grade= "B"
}else if(grade >= 70 && grade <= 79 ) {
    final_grade= "C"
}else if(grade >= 60 && grade <= 69 ) {
    final_grade= "D"
}else if (grade < 60 ){
    final_grade= "F"
}else(
    final_grade= "Nota Inválida"
)

console.log(`A sua nota é : ${final_grade}`)