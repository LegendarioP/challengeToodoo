const alert$ = document.querySelector(".alert01")
let hello$ = "Hello World";
const choco$ = document.querySelector(".chocolate")

function alert01(){
    alert("um aviso foi emitido");
}



console.log(hello$)
hello$ = "Hello Toodoo";
console.log(hello$)

const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
    if(event.target.value == 'chocolate'){
        alert(`Amo sorvete de chocolate`);
    }
    else
        alert(` Prefiro outros sabores`)
});


function multiplicacao (num1,num2) {
    let resultado = num1 * num2;
    return resultado;
   }

console.log(multiplicacao(4,7))
console.log(multiplicacao(5,6))
console.log(multiplicacao(3,3))