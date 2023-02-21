const button = document.querySelector('.total__button');
const sale20 = 0.8;
const span = document.createElement('span');
const spanOne = document.createElement('span');
const spanTwo= document.createElement('span');
const spanThree= document.createElement('span');
const info = document.querySelector('.total__button').textContent;
let rub = '&#8381;'
let prob = '&nbsp;';




function getSale20() {
    span.className = "price_t";
    span.innerHTML = ` ${prob} <del> ${prob} ${+document.querySelector('.span').textContent} ${rub} </del> `;
    document.querySelector('.total__price').append(span);

   
    spanOne.className = "price_one";
    spanOne.innerHTML = `${prob} <del>  ${+document.querySelector('.price_one').textContent} ${rub}</del>`;
    document.querySelector('.price_last').append(spanOne);

    
    spanTwo.className = "price_two";
    spanTwo.innerHTML = `${prob} <del>  ${+document.querySelector('.price_two').textContent} ${rub}</del>`;
    document.querySelector('.price_last_two').append(spanTwo);

    
    spanThree.className = "price_three";
    spanThree.innerHTML = `${prob} <del>  ${+document.querySelector('.price_three').textContent} ${rub}</del>`;
    document.querySelector('.price_last_three').append(spanThree);

    document.querySelector('.span').textContent = +document.querySelector('.span').textContent * sale20;
    document.querySelector('.price_one').textContent = +document.querySelector('.price_one').textContent * sale20;
    document.querySelector('.price_two').textContent = +document.querySelector('.price_two').textContent * sale20;
    document.querySelector('.price_three').textContent = +document.querySelector('.price_three').textContent * sale20;
    document.querySelector('.total__button').textContent = 'ВЫГОДНО!'
    button.style.backgroundColor = 'white';
    button.style.color = 'red';
}

button.addEventListener('click', getSale20 , {once : true});

function clickMe() {
    let num = +document.getElementById('number').value;
    let result = num**2;
    document.getElementById('result').value = result;
}
