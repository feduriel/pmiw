class Personaje {
  constructor() {
    this.posx = 120;
    this.posy = 280;
    this.vel = 2.5;
    this.vuelta=1;
    this.save;
  }

  mover() {
    this.save=dist(this.posx,this.posy ,800,this.posy);
    if (key=='a' && keyIsPressed==true) {
      this.posx-=this.vel
    }
    if (key=='d' && keyIsPressed==true) {
      this.posx+=this.vel
    }
    if (key === 'w'  && keyIsPressed==true && this.posy>250) {
      this.posy-=this.vel
    }
    if (key === 's' && keyIsPressed==true && this.posy<340) {
      this.posy+=this.vel
    }
    if (this.posx>=800) {
      this.posx = 800;
      this.save = 0;}
    if (this.save==0 && this.vuelta<2) {
      this.vuelta++;
      this.posx = 0;
    }
  }
  dibujar() {
    noSmooth();
    image(pj,this.posx,this.posy,(42*2.5),(14*2.5));
    this.mover();
  }}
