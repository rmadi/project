// 48 to   125

let span = document.getElementById('span');
let btn = document.getElementById('btn');
let length = 14;
let passWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=";
console.log(passWord);

function generetePass() {
    var pass ="";
    for (var i = 0; i < length; i++) {
        pass += passWord.charAt(Math.floor(Math.random() * passWord.length));

    }
    span.innerText = pass;
}

btn.addEventListener('click',generetePass);