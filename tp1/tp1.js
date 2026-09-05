let accion="correr";
let fondo;
let fonposx=0;
let perposx=0;
let menuposy=-512;
let correranim=[];
let idleanim=[];
let vel;


function preload() {
  for (let k=1; k<=10; k++) {
    let imagen=loadImage("img/run"+k+".png");
    correranim.push(imagen);
  }
  for (let j=1;j<=10; j++) {
    let imagen=loadImage("img/idle"+j+".png");
    idleanim.push(imagen);
  }
  fondo=loadImage("img/fondo.png");
  menu=loadImage("img/menu.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  imageMode(CORNER);
  image(fondo,fonposx,0,(1672/1.5),(941/1.5));
  noSmooth();
  imageMode(CENTER);
  anim()
  if(perposx==200){
      contes("idle");}
}
function anim(){
  contvel(accion)
  if (accion=="correr"){
    let frame=floor(frameCount/contvel(accion))%10;
    image(correranim[frame],perposx,440,(32*2.3),(37*2.3));
    perposx++;
    fonposx--;
  } else if (accion=="idle"){
    let frame=floor(frameCount/contvel(accion))%10;
    image(idleanim[frame],200,440,(32*2.3),(37*2.3));
      if (menuposy<=250){
       menuposy+=6
      };
   
    imageMode(CENTER);
    image(menu, 400,menuposy,(1536/2),(1024/2));
  }
}
function keyPressed(){
  if (key=="r") {
      accion="correr";
      fonposx=0;
      perposx=0;
      menuposy=-512;
    }
}
function contes(esta){
  accion=esta;
}
function contvel(accion){
  if (accion=="correr"){
    vel=5
  }else if (accion=="idle"){
    vel=10
  }
  return(vel)
}
