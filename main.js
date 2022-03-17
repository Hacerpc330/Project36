let w = +prompt('ширину');
let h = +prompt('высоту');
alert('Вы сможете рисовать в этой таблице нажимая на ячейки')
let table = document.getElementById('table') 
for (let a = 1; a<=h; a++){
    let tr = document.createElement("tr");
    for (let b = 1; b<=w; b++){
        let td = document.createElement("td");      
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
let tds = document.querySelectorAll('td');
for (let c = 0; c<tds.length; c++) {
    tds[c].addEventListener("click", function Fun(){
        let input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        input.classList.add('active');
        this.classList.add('yacheyka')
        
        let element = this
        input.addEventListener("blur", function(){
            element.innerHTML = this.value;
            element.addEventListener("click", Fun);
        })
        this.removeEventListener("click", Fun);
    })
}
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button10 = document.getElementById('button10');
button1.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`}
button2.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`}
button3.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button4.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button5.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button6.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button7.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button8.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button9.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
button10.addEventListener('click', function(){
    div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
    td.style.border=`1px solid red`
    table.style.background=`red`
}