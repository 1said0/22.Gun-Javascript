/*
Javascript Array Yapısı
*/
var names = ['Fabri', 'Pepe', 'Cenk'];
console.log(names);
var names2 = new Array('Fabri','Pepe', 'Cenk');
console.log(names2);
var quaresma = ['Ricardo', 'Quaresma', '34','Player', false];
console.log(quaresma);
quaresma.push('Besiktas');
console.log(quaresma);
quaresma.unshift('Mr');
console.log(quaresma);
quaresma.pop();
console.log(quaresma);


var myArray = [4, 7, 5, 2], toplam = 0, carpim =  1;
for (var i=0; i <myArray.length; i++) 
{
toplam += myArray[i];
carpim *= myArray[i];
}
console.log("Toplam: " + toplam + "Çarpım: " + carpim);


var myArray = ["Cenk", "Atiba", "Pepe"];
console.log(myArray[0]);
var player1 = {
name: 'Ricardo',
lastName: 'Quaresma',
age: 33,
goal: 7
}
console.log(player1.name);
console.log(player1.age);
var variable1 = 'name';
console.log(player1[variable1]);
player1.age = 34;
console.log(player1);
player1['goal'] = 15;
console.log(player1);





var player1 = {
name: 'Ricardo',
lastName: 'Quaresma',
age: 33,
goal: 7
}
var player2 = new Object();
player2.name = 'Cenk';
player2.lastName = 'Tosun';
player2. age = 26;
player2.gola = 28;

console.log(player1);
console.log(player2);

