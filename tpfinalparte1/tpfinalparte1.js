let fondo=[];
let fonposx=0;
let fonposy=0;
let perposx=120;
let perposy=140;
let pj;
let pjfrente;
let inst=0;
let show=0;
let epic;
let normal;
let vacio;
let actual=0;
let creditosy=450;
let npc;
let rain;
let rep=false;
let escala=1;

function preload() {
  for (let k=0; k<=4; k++) {
    fondo[k]=loadImage("img/fondo"+k+".png");
  }
  pj=loadImage("img/auto.png");
  pjfrente=loadImage("img/t.png");
  npc=loadImage("img/npc.png");
  rain=loadImage("img/rain.jfif");
  epic=loadSound('mus/epic.mp3');
  normal=loadSound('mus/normal.mp3');
  vacio=loadSound('mus/void.mp3');
  
}
function setup() {
  createCanvas(800, 450);
}

function draw() {
  pantalla();
}
