class NPC{
  constructor() {
    this.posx=55;
    this.posy=340;
    this.vel=2.5;
    this.save;
    this.vuelta=1;
    this.personaje=new Personaje();
  }

  mover(){
    this.save=dist(this.posx, this.posy, 800, this.posy);

    if (this.vuelta<3 && this.save>0) {
      this.posx += this.vel;
    }

    if (this.posx==800 && this.personaje.posx==this.posx) {
      this.posx=this.personaje.posx
      this.vuelta++ 
    }
    if (this.posx==800 && this.personaje.posx!=800 && this.personaje.vuelta==this.vuelta) {
      this.posx=0+(this.save)
      this.vuelta++ 
    }
    if(this.personaje.vuelta==this.vuelta+1){
      this.posx = this.personaje.posx-(this.save)
      if(this.pox=0){
        this.vuelta++
      }
    if(this.personaje.vuelta+1==this.vuelta){
      this.vuelta++
      if(this.pox=800){
       this.posx=this.personaje.posx+this.personaje.save*2
      }
    }
    }}

  dibujar() {
    noSmooth();
    image(npc, this.posx, this.posy, 42*2.5, 14*2.5);
    this.mover();
  }
}
