console.log("Hello")

const wel = document.getElementById('welcome');
const ctime = document.getElementById('time');
let name = prompt("Enter your name");
wel.classList.add('blue');
wel.innerText = "Welcome "+name;

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.classList.toggle('dark');
    // ctime.classList.toggle('time')
}
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

 clock();

setInterval(clock,1000);