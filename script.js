
//Declaracion de variables
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

const form = document.querySelector('#form');


//Escuchando eventos

form.addEventListener('submit', btnOnClick);
//btn.addEventListener('click', btnOnClick);



//Declaracion de funciones
function btnOnClick(event) {
    console.log({event});
    event.preventDefault();
    const juxta = input1.value + input2.value;
    pResult.innerText = "La juxtaposición es: " + juxta;
};
