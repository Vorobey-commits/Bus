// const fs = require('fs');
// let text = fs.readFile("kod.txt", "utf-8", () => { });

// let SECRET_ADMIN = "123"
// let arr_base = ["123", 124, 125, "ABC-2024", "XYZ-777"];
let numB = document.getElementById("num_boos");
let numA = document.getElementById("num_auto");
let ticket = document.getElementById("ticket");
// let flag = true;
// let code = prompt("dd");

// while (flag){
//     if (code == SECRET_ADMIN) {
//         newcode = prompt("Введите новый код ");
//         arr_base.push(newcode);
//         code = prompt("Введите свой код");
//         continue;
// }
//     else if((arr_base.includes(code))){break;}
//     else {alert("Пожалуйста введите верный код или купите его у @//"  )}
//     code = prompt("Введите свой код");
// }

alert("Привет, перед использование убедись что ты едешь на автобусе где действует система QR-транспорт таблички можно увидеть на окнах")
let a = prompt("Введите номер автобуса (11, 77, 15 и тд)");

numB.innerHTML = "№" + a;
a = prompt("Введите автомобильные номера (567, 267, 963 и тд) их можно найти на табличке QR-транспорт");
numA.innerHTML = "AB " + a + " 25";

if(!confirm("Вам нужен один билет?")){
    a = prompt("Введите количество билетов");
    ticket.innerHTML = a + " билета – " + (a * 45) + "₽";
} else {ticket.innerHTML = "1 билет – 45₽"; }


function updateDateTime() {
    const now = new Date();

    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    document.getElementById("time-now").textContent = `${hh}:${mm}`;

    const months = ["января","февраля","марта","апреля","мая","июня",
        "июля","августа","сентября","октября","ноября","декабря"];
    const date = now.getDate() + " " + months[now.getMonth()];
    document.getElementById("date-now").textContent = date;
}

updateDateTime();
setInterval(updateDateTime, 1000);

let min = Math.floor(Math.random() * 30) + 15;
let sec = 0;

setInterval(() => {
    if (sec === 0) {
        if (min === 0) return;
        min--;
        sec = 59;
    } else {
        sec--;
    }
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec < 10 ? "0" + sec : sec;
}, 1000);
