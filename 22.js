V1 = 80;
t1 = 4;
x1 = V1 * t1;
console.log(x1);
V2 = 65;
t2 = 6;
x2 = V2 + t2;
console.log(x2); 



function findX (t, V, fn) {
    var x = t * V;
    return fn(x);
    }

    function sum10 (param1) {
    return param1 + 10; 
    }
    var yol = findX (4, 50, sum10);
    console.log(yol);
    var yol2 = findX(7, 63, sum10);
    console.log(yol2);

    
var x; // x global var
function sampleFunction () {
x = 56;
console.log(x);
}
sampleFunction();
console.log(x);
function fonk1() {
// kodlar....
}
if (x>7) {
}
var fonk2 = function() {
kodlar
} 


/*
FONKSIYONLAR UYGULAMA
*/
var vize = prompt("Lütfen Vize Notunu Giriniz");
var final = prompt("Lütfen Final Notunu Giriniz");
function dersSonucu (vize, final) {
var dersNotu = parseInt(vize * 0.4 + final * 0.6);
if (dersNotu >= 50 ) {
alert("Dersi Geçtiniz, Notunuz: " + dersNotu);
} else {
alert("Dersi Geçemediniz, Notunuz: " + dersNotu);
}
}
dersSonucu (vize, final);


/*
Javascript Döngüler
*/
var x = 1;
while (x < 10){
console.log(x);
x++;
}

var x = 1;
do {
console.log(x);
x++;
} while (x > 10);

