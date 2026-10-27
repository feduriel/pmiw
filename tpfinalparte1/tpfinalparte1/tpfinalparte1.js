let fondo=[];
let fonposx=0;
let fonposy=0;
let perposx=120;
let perposy=140;
let pj;
let pjfrente;
let inst=0;
let show=0;
let musica;
let creditosy=450;
let npc;
let rain;

function preload() {
//  for (let k=1; k<=10; k++) {
//    let imagen=loadImage("img/run"+k+".png");
//    correranim.push(imagen);a
//  }
//  for (let j=1;j<=10; j++) {
//    let imagen=loadImage("img/idle"+j+".png");
//    idleanim.push(imagen);
//  }
   for (let k=0; k<=4; k++) {
    fondo[k]=loadImage("img/fondo"+k+".png");
  }
  pj=loadImage("img/auto.png");
  pjfrente=loadImage("img/t.png");
  npc=loadImage("img/npc.png");
  rain=loadImage("img/rain.jfif");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  pantalla();
  
}
