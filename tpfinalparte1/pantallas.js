function sonido(){
  if (actual==1 && !epic.isPlaying()){
    vacio.stop();
    normal.stop();
    epic.play();
  }
  if (actual==2 && !normal.isPlaying()){
    vacio.stop();
    epic.stop();
    normal.play();
  }
  if (actual==3 && !vacio.isPlaying()){
    normal.stop();
    epic.stop();
    vacio.play();
  }
  if (actual==0){
    vacio.stop();
    normal.stop();
    epic.stop();
  }
}

function pantalla(){
  sonido()
  if (show==0){
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    textocol(false);
    text("outrun", 800/2, 450/8);
    fill(0,0,0,70);
    rect(600/2, 200/2, 200, 50);
    textocol(false)
    text("play", 800/2, 1000/8);
    if (mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14);
      text("play", 800/2, 1000/8);
    }
  }
  else if (show==1){
    actual=2
    noSmooth();
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    image(pjfrente,perposx,perposy,(32*4),(32*4));
    if (perposx>30) {
        perposx--;
    }
    if (perposy<200) {
        perposy++;
    }
    textSize(32);
    textocol(true);
    text("Sos un piloto que espera en la línea de largada al volante de un Ferrari rojo descapotable",10,10)
    text("Estabas compitiendo con tus amigo para ver quien llega al final",10,30)
    text("Tu objetivo es llegar a la meta antes de que sea demasiado tarde",10,50)
    if (perposx==30 && perposy==200) {
       show=2;
    }
  }
  else if (show==2){
    actual=2
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    image(pjfrente,perposx,perposy,(32*4),(32*4));
    noStroke();
    fill(0,0,0,140);
    rect(0, 0, 800, 450);
    textocol(false)
    text("y tu lo controlaras asi que...",100,10);
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=1000) {
      show=3;
    }
  }
  else if (show==3){
    actual=2
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    image(pjfrente,perposx,perposy,(32*4),(32*4));
    boton(3)
    textocol(false)
    text("tenés que elegir, por dónde correr",400,26)
    text("La autopista", 500, 275);
    text("La ruta de la costa", 500, 215);
    text("El bosque", 500, 155);
  }
  else if (show==4){
    actual=2
    image(fondo[4],fonposx,fonposy,(1672/2),(941/2));
    image(pj,perposx,perposy,(42*4),(14*4));
    noStroke();
    textocol(true);
    perposx+=5;
    text("Fuiste a la autopista, vos te la imaginabas asi:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      show=5;
    }
  }
  else if (show==5){
    actual=1
    image(fondo[4],fonposx,fonposy,(1672/2),(941/2));
    image(pj,6,350,(42*4),(14*4));
    for ( i=0; i<=4; i++){
      image(npc,(41*4)+(i*(45*4)),350,(45*4),(14*4));
    }
    boton(3)
    textocol(true);
    text("pero la realidad es esta, que haces?:",10,10)
    textocol(false)
    text("Usar turbo", 500, 275);
    text("Adelantar", 500, 215);
    text("Seguir de largo", 500, 155);
  }
  else if (show==7){
    actual=2
    image(fondo[1],fonposx,fonposy,(1672/2),(941/2));
    image(pj,perposx,perposy,(42*4),(14*4));
    textocol(true);
    text("Fuiste a la estacion",10,10)
    perposx++;
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      perposy=300;
      perposx=240;
      show=11;
    }
  }
  else if (show==8){
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    perposx+=5;
    textocol("res");
    text("siguiste de largo por otro camino y...",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      perposx=380;
      perposy=320;
      show=13;
    }
  }
  else if (show==9){
    actual=1
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    textocol("res");
    perposx+=5;
    text("llegaste a la recta final:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      show=16;
    }
  }
  else if (show==10){
    actual=2
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    perposx+=5;
    textocol("res");
    text("vas por la costa:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      show=14;
    }
  }
  else if (show==11){
    actual=2
    image(fondo[1],fonposx,fonposy,(1672/2),(941/2));
    image(pjfrente,perposx,perposy,(32*1.5),(32*1.5));
    textocol(true);
    text("Fuiste a la estacion",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      perposx=300;
      perposy=357;
      show=12;
    }
  }
  else if (show==12){
    actual=2
    image(fondo[1],fonposx,fonposy,(1672/2),(941/2));
    image(pj,perposx,perposy,(42*4),(14*4));
    textocol(true);
    text("Fuiste a la estacion",10,10)
    perposx+=3;
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      perposx=6;
      perposy=350;
      show=22;
    }
  }
  else if (show==13){
    actual=2
    image(fondo[2],fonposx,fonposy,(1672/2),(941/2));
    image(pjfrente,perposx,perposy,(32*escala),(32*escala));
    if (perposy<500) {
        perposy++;
    }
    if (escala<4) {
        escala+=0.03;
    }
    if (perposy>=500 & escala>=4) {
        inst=0
        show=20;
      }
    textocol(true);
    text("Fuiste al puente",10,10)
  }
  else if (show==14){
    actual=1
    image(rain,fonposx,fonposy,(1672/2),(941/2));
    image(pj,400,350,(42*4),(14*4));
    boton(2)
    textocol(false)
    text("Ir a la estacion", 500, 155);
    text("puente", 500, 215);
  }
  else if (show==15){
    actual=3
    image(fondo[3],fonposx,fonposy,(1672/2),(941/2));
    image(pj,400,350,(42*4),(14*4));
    textocol(false)
    text("Decidiste ir por el bosque",400,26)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=1000) {
      show=22;
      inst=0;
    }
  }
  else if (show==16){
    actual=1
    background(255);
    textocol("res");
    text("llegaste antes que todos tus amigos...",10,10)
    text("final 1 encontrado",10,50)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=4000) {
      show=19;
    }
  }
  else if (show==18){
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    textocol(false)
    text("outrun", 800/2, 450/8);
    fill(0,0,0,70);
    rect(600/2, 200/2, 200, 50);
    textocol(false)
    text("reiniciar", 800/2, 1000/8);
    if (mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14);
      text("reiniciar", 800/2, 1000/8)
    }
  }
  else if (show==19){
    background(0)
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(48);
    textAlign(CENTER, TOP);
    if (creditosy > -250) {
      creditosy--;
    }
    text("Creditos:", 100, creditosy);
    textAlign(LEFT, TOP);
    text("Alumnos involucrados:\nFederico Uriel Mengarelli\nMateo Tomás Miranda",20,(creditosy+50));
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=12000) {
      show=18;
      inst=0;
    }
  }
  else if (show==20){
    actual=0
    background(255);
    textocol("res");
    text("llegaste segundo...",10,10)
    text("final 2 encontrado",10,50)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=4000) {
      show=19;
    }
  }
  else if (show==21){
    actual=1
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    perposx+=5;
    textocol("res");
    text("estas en la recta final:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      show=14;
    }
  }
  else if (show==22){
    actual=3
      image(fondo[3],fonposx,fonposy,(1672/2),(941/2));
      image(pj,400,350,(42*4),(14*4));
      noStroke();
      fill(0,0,0,140);
      rect(0, 0, 800, 450);
      fill(255);
      stroke(0);
      strokeWeight(4);
      textSize(14);
      textAlign(LEFT, TOP);
      text("no lograste llegar al final",10,10)
      text("final 3 encontrado",10,50)
      if (inst==0){
            inst=millis();}
      if (millis()-inst>=2000) {
        inst=0
        creditosy=450
        show=19;
        }
    }
}
function mouseClicked(){
    if (show==0 && mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
        show=1;
    }
    else if (show==3 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
        inst=0;
        show=15;
    }
    else if (show==3 && mouseX>400 && mouseX<600 && mouseY>250 && mouseY<300) {
      perposx=6;
      perposy=350;
      inst=0;
      show=4;
    }
    else if (show==3 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      inst=0;
      perposx=6;
      perposy=350;
      show=10;
    }
    else if (show==5 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
        inst=0;
        perposx=6;
        perposy=350;
        show=8;
    }
    else if (show==5 && mouseX>400 && mouseX<600 && mouseY>250 && mouseY<300) {
      inst=0;
      perposx=6;
      perposy=350;
      show=9;
    }
    else if (show==5 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      inst=0;
      perposx=6;
      perposy=350;
      show=9;
    }
    else if (show==14 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
        inst=0;
        perposx=-10;
        perposy=357;
        show=7;
    }
    else if (show==14 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      inst=0;
      perposx=380;
      perposy=320;
      show=13;
    }
    else if (show==18 && mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
        fonposx=0;
        fonposy=0;
        perposx=120;
        perposy=140;
        actual=0;
        creditosy=450;
        show=0;
    }
  }

function boton(cant){
  for (i=0; i<=(cant-1); i++){
    if (mouseX>400 && mouseX<600 && mouseY>(130+(i*60)) && mouseY<(180+(i*60))){
      fill(255,0,0,150)}
    else{
      fill(0,0,0,70)};
    rect(400, (130+(i*60)), 200, 50);}
}
function textocol(top){
  if (top==true){
    textAlign(LEFT, TOP);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14);
  } else if (top=="res"){
    noStroke();
    fill(0);
    textSize(14);
    textAlign(LEFT, TOP);
  }
  else{
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14);
  }
}
