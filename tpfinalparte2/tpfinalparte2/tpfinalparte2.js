let fondo;
let pj;
let farol;
let posfalx=150;
let posfaly=100;
let epic;
let creditosy=450;
let npc;
let inst=0;
let t=9;
  
function preload() {
  fondo=loadImage("img/fondo.png");
  pj=loadImage("img/auto.png");
  farol=loadImage("img/farol.png");
  paso=loadImage("img/paso.png");
  npc=loadImage("img/npc.png");
  epic=loadSound('mus/epic.mp3');
  
}

class Juego {
  constructor() {
    this.personaje = new Personaje();
    this.npc = new NPC();
  }
  dibujar() {
    if(this.personaje.save==0 && this.personaje.vuelta==this.vuelta){
      image(fondo[4],0,-50,(1672/2),(941/2));
      this.dibujarPersonaje();
      this.npc.dibujar();
      image(farol,posfalx+(this.personaje.save),posfaly,(48*3),(105*3));
    }
    image(paso,0,-50,(1672/2),(941/2));
    this.dibujarPersonaje();
    if (this.personaje.vuelta==this.npc.vuelta || (this.personaje.vuelta==this.npc.vuelta+1)){
      this.npc.dibujar()};
    image(farol,posfalx,posfaly,(48*3),(105*3));
    this.ganar();
  }
  dibujarPersonaje() {
    if (this.personaje.vuelta<3){
      this.personaje.dibujar();}
  }
  dibujarnpc() {
    this.npc.dibujar();
  }
  
  ganar() {
    if (this.personaje.vuelta==2 && this.personaje.vuelta==this.npc.vuelta && this.personaje.posx>=799 && t!=1 && t!=0) {
      t=2;}
    if (this.personaje.vuelta==2 && this.personaje.vuelta==this.npc.vuelta && this.npc.posx>=799 && this.personaje.posx<this.npc.posx && t!=2 && t!=1) {
      t=0;}
    if (this.personaje.vuelta==2 && this.personaje.vuelta==this.npc.vuelta && this.npc.posx==this.personaje.posx && this.personaje.posx>=799 && t!=2 && t!=0) {
      t=1;}
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14);
    if (t==2) {
      text("ganaste", 100, 10);}
  
    if (t==1){
      text("empate", 100, 10);
      }
    if (t==0) {
      text("perdiste", 100, 10)};
    if (t==0 || t==1 || t==2){
      if (inst==0){
              inst=millis();}
      if (millis()-inst>=2500) {
        background(0)
        fill(255);
        stroke(0);
        strokeWeight(4);
        textSize(48);
        textAlign(CENTER, TOP);
        text("Creditos:", 100, creditosy);
        textAlign(LEFT, TOP);
        text("Alumnos involucrados:\nFederico Uriel Mengarelli\nMateo Tomás Miranda",20,(creditosy+50));
        text("pulse r para reiniciar",20,((creditosy)+250));
        if (creditosy > -250) {
            creditosy--;
            }
          }
    }
  }
}
function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
  if (key=='d' && !epic.isPlaying()){
    epic.play();
  }
  
  if (key=='r' && t != 9) {
    posfalx=150;
    posfaly=100;
    creditosy=450;
    inst=0;
    t=9;
    juego.npc.posx=55;
    juego.npc.posy=340;
    juego.npc.vel=2.5;
    juego.npc.vuelta=1;
    juego.npc.save=0;
    juego.personaje.posx=120;
    juego.personaje.posy=280;
    juego.personaje.vel=2.5;
    juego.personaje.vuelta=1;
    juego.personaje.save=0;
    epic.stop();
  }

}
