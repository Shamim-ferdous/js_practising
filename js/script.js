// text change
function textChange(){
	document.getElementById('h2').innerHTML = "Hello there!";
}

// show date
function showDate(){
	document.getElementById('dh2').innerHTML = Date();
}

// variable repeat
function dataRepeat(){
	var message = "Welcome to SS";
	document.getElementById('dr').innerHTML = message.repeat(3);
}

// on/off
function bulbOn(){
	document.getElementById('bulb').src = 'images/bulbon.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'images/bulboff.gif';
}

// fontsize
function fontSize(){
	document.getElementById('fs').style.fontSize = "50px"
}

// show/hide
function textShow(){
	document.getElementById('tsh').style.display = "Block"
}
function textHide(){
	document.getElementById('tsh').style.display = "None"

}
// alert msg
function message(){
	alert("Hello Javatpoint");
}
// Variable decl.
function result(){
	var a = 5;
	var b = 10;
	var m = a + b;
	document.getElementById('h5').innerHTML = m;
}
// print page
function printPage(){
	window.print();
}
//
let a;
a = 7;
document.getElementById('demo').innerHTML = a;
//
document.getElementById('demo1').innerHTML = 50 * 10;
//
document.getElementById('demo2').innerHTML = "John" + " " + "Doe";
// 
let x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("demo3").innerHTML = y;
// 
x = 60;
{
x = 50;
}
document.getElementById('demo4').innerHTML = x;
// 
let m = 57;
{
let m = 67;
}
document.getElementById('demo5').innerHTML = m;
// ....
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyato";
cars.push("Audi");
document.getElementById('demo6').innerHTML = cars;