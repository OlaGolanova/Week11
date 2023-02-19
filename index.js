const button = document.querySelector('.total__button');
const sale20 = 0.8;
let info = document.querySelector('.total__button').textContent;



button.addEventListener('click', function() { 
    document.querySelector('.span').textContent = +document.querySelector('.span').textContent * sale20;
    document.querySelector('.price_one').textContent = +document.querySelector('.price_one').textContent * sale20;
    document.querySelector('.price_two').textContent = +document.querySelector('.price_two').textContent * sale20;
    document.querySelector('.price_three').textContent = +document.querySelector('.price_three').textContent * sale20;
    document.querySelector('.total__button').textContent = 'ВЫГОДНО!'
    button.style.backgroundColor = 'white';
    button.style.color = 'red';
    
 } , {once : true});

function clickMe() {
    let num = +document.getElementById('number').value;
    let result = num**2;
    document.getElementById('result').value = result;
}
