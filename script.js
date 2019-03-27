//Quadrado com quadrados dentro

var canvas1 = document.getElementById("myCanvas1");
var ctx = canvas1.getContext('2d');

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#0d0a29";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#0d0a29";
ctx.rect(120, 30, 50, 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#0d0a29";
ctx.rect(30, 120, 50, 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "#0d0a29";
ctx.rect(120, 120, 50, 50);
ctx.stroke();

//Circulo aspiral

var canvas2 = document.getElementById("myCanvas2");
ctx = canvas2.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, 100, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 75, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 25, 0, 2*Math.PI);
ctx.stroke();

//Circulo gradiente
var canvas3 = document.getElementById("myCanvas3");
ctx = canvas3.getContext("2d");

var grd = ctx.createRadialGradient(60,100,5,80,100,100);
grd.addColorStop(0,"#de003d");
grd.addColorStop(1,"#0d0a29");

ctx.beginPath();
ctx.fillStyle = grd;
ctx.arc(100, 100, 100, 0, 2*Math.PI);
ctx.fill();
