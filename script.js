const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10)s = '0' +s ;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.secondHand');

const getTime = () => {
    const date = new Date();

    return{
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval (() => {
    const {seconds, minutes, hours} = getTimme();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0,-50%) rotate(${hours * 30}deg)`;
}, 1000);