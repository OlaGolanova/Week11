const button = document.querySelector('.total__button');
const sale20 = 0.8;
let info = document.querySelector('.total__button').textContent;
let rub = '&#8381;'




button.addEventListener('click', function() { 
    let span = document.createElement('span');
    span.className = "price_t";
    span.innerHTML = ` <del>  ${+document.querySelector('.span').textContent} </del> ${rub}`;
    document.querySelector('.total__price').append(span);

    let spanOne = document.createElement('span');
    spanOne.className = "price_one";
    spanOne.innerHTML = ` <del>  ${+document.querySelector('.price_one').textContent} </del> ${rub}`;
    document.querySelector('.price_last').append(spanOne);

    let spanTwo= document.createElement('span');
    spanTwo.className = "price_two";
    spanTwo.innerHTML = ` <del>  ${+document.querySelector('.price_two').textContent} </del> ${rub}`;
    document.querySelector('.price_last_two').append(spanTwo);

    let spanThree= document.createElement('span');
    spanThree.className = "price_three";
    spanThree.innerHTML = ` <del>  ${+document.querySelector('.price_three').textContent} </del> ${rub}`;
    document.querySelector('.price_last_three').append(spanThree);

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
