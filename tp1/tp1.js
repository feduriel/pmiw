let accion = "correr";
let fondo;
let fonposx = 0;
let perposx = 0;
let correranim = [];
let idleanim = [];
let velocidadAnimacion = 10;


function preload() {
  for (let k=1; k=10; k++) {
    let imagen = loadImage("img/run" + k + ".png");
    correranim.push(imagen);
  }

  for (let j=1;j=10; j++) {
    let imagen = loadImage("img/idle" + j + ".png");
    idleanim.push(imagen);
  }
  
  fondo = loadImage("img/fondo.png");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  imageMode(CORNER);
  image(fondo, fonposx, 0, 2000, 300);
  imageMode(CENTER);
  if (accion == "correr") {
    correr();
    fonposx--;
  } ;
  if (accion == "idle") {
     idle();
  }

function correr(){
  let frame = floor(frameCount / velocidadAnimacion) %10;
  image(correranim[frame], perposx, 200);
  perposx++;
  
  } if(perposx == 300){
    accion = "idle";
  }
}


function idle(){
  let frame = floor(frameCount / velocidadAnimacion) %10;
  image(idleanim[frame], 300, 200);
}
