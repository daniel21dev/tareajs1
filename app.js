
const btn = document.querySelector('#btn');
const respuesta = document.querySelector('#respuesta');

btn.addEventListener('click',()=>{

    const num1 = Number(prompt('Escribe el primer numero'));
    const num2 = Number(prompt('Escribe el segundo numero'));
    const num3 = Number(prompt('Escribe el tercer numero'));

    const [mayor] = [num1,num2,num3].sort((a,b)=> a-b).reverse();
    respuesta.innerText = `El numero mayor es: ${mayor} \n`;

    btn.innerText = 'calcular de nuevo';
});
