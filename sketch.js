let xb = 300;
let yb = 300;
let diametro = 15;
let raio = diametro / 2;
let vxb = 6;
let vyb = 6;

let xr = 5;
let yr = 150;
let lr = 7;
let ar = 80;

let xri = 585;
let yri = 150;

let colidiu = false;

let meuspontos = 0;
let pontosoponente = 0;

let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function preload(){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquete = loadSound("raquetada.mp3");
  
}

function draw() {
  background("black");
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr, yr,color("green"));
  mostraraquete(xri, yri,color("rgb(241,16,55)"));
  mexeraquete();
  mexeraqueteinimiga();
  quicabolaraquete(xr, yr);
  quicabolaraquete(xri, yri);
  placar();
  pontos();
  letras();
  stroke("grey");
  rect(300,0,1,400);
}

function mostrabola() {
  circle(xb, yb, diametro);
}
function mexebola() {
  xb += vxb;
  yb += vyb;
}
function quicabola() {
  if (xb + raio > width || xb - raio < 0) {
    vxb *= -1;
    raquete.play();
  }
  if (yb + raio > height || yb - raio < 0) {
    vyb *= -1;
    raquete.play();
  }
}

function mostraraquete(x, y,color) {
  fill(color);
  rect(x, y, lr, ar);
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW));
  yr -= 10;

  if (keyIsDown(UP_ARROW));
  yr += 10;
}
function mosraraquete(x, y) {
  rect(x, y, lr, ar);
}

function mexeraqueteinimiga() {
  if (keyIsDown(87))
    //s;
    yri -= 10;

  if (keyIsDown(83))
    //w;
    yri += 10;
}

function quicabolaraquete(x, y) {
  colidiu = collideRectCircle(x, y, lr, ar, xb, yb, raio);
  if (colidiu) {
    vxb *= -1;
  }
}
 function placar(){
   stroke("white");
   textAlign(CENTER);
   textSize(18);
   fill("blue");
   rect(150,10,40,20);
   fill("white");
   text(meuspontos,170,13);
   
    fill("rgb(118,118,180)");
   rect(430,10,40,20);
   fill("white")
   text(meuspontos,450,13);
 }

function pontos(){
  if(xb > 590){
    meuspontos += 1;
    ponto.play();
  }
  if(xb < 11){
    pontosoponente += 1;
    ponto.play();
  }
}
  function letras(){
    let frase = "MEUS PONTOS"
    let frase2 = "PONTOS OPONENTE"
    textSize(20);
    textAlign(LEFT,TOP);
    fill("white");
    text(frase,90,40);
    
    textSize(20);
    textAlign(LEFT,TOP);
    fill("white");
    text(frase2,335,40);
  }