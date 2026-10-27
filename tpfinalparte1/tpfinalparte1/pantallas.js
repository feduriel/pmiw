function pantalla(){
  if (show==0){
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("outrun", 800/2, 450/8);
    fill(0,0,0,70);
    rect(600/2, 200/2, 200, 50);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("play", 800/2, 1000/8);
    if (show==0 && mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("play", 800/2, 1000/8)
    }
    
  }
  
  if (show==1){
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
      fill(255);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      textAlign(LEFT, TOP)
      text("Sos un piloto que espera en la línea de largada al volante de un Ferrari rojo descapotable",10,10)
      text("Tu objetivo es llegar a la meta antes de que se acabe el tiempo",10,26)
    if (show==1 && perposx==30 && perposy==200) {
       show=2;
    }
      
  }
  if (show==2){
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    image(pjfrente,perposx,perposy,(32*4),(32*4));
    noStroke();
    fill(0,0,0,140);
    rect(0, 0, 800, 450);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("y tu lo controlaras asi que...",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=1000) {
      show=3;
    }
}
  if (show==3){
      image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
      image(pjfrente,perposx,perposy,(32*4),(32*4));
      textAlign(CENTER, CENTER);
      fill(255);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("tenés que elegir, por dónde correr",400,26)
      fill(0,0,0,70);
      rect(400, 250, 200, 50);
      rect(400, 190, 200, 50);
      rect(400, 130, 200, 50);
      textAlign(CENTER, CENTER);
      fill(255);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("La autopista", 500, 275);
      text("La ruta de la costa", 500, 215);
      text("El bosque", 500, 155);
    if (show==3 && mouseX>400 && mouseX<600 && mouseY>250 && mouseY<300) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("La autopista", 500, 275);
    }
    if (show==3 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("La ruta de la costa", 500, 215);
    }
    if (show==3 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("El bosque", 500, 155);
    }
  }
  if (show==4){
    image(fondo[4],fonposx,fonposy,(1672/2),(941/2));
    image(pj,perposx,perposy,(42*4),(14*4));
    noStroke();
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    textAlign(LEFT, TOP);
    perposx+=5;
    text("Fuiste a la autopista, vos te la imaginabas asi:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      show=5;
    }
  }
  if (show==5){
    image(fondo[4],fonposx,fonposy,(1672/2),(941/2));
    image(pj,6,350,(42*4),(14*4));
    for (let i=0; i<=4; i++){
      image(npc,(41*4)+(i*(45*4)),350,(45*4),(14*4));
    }
    noStroke();
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    textAlign(LEFT, TOP);
    text("pero la realidad es esta, que haces?:",10,10)
    fill(0,0,0,70);
    rect(400, 250, 200, 50);
    rect(400, 190, 200, 50);
    rect(400, 130, 200, 50);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("Usar turbo", 500, 275);
    text("Adelantar", 500, 215);
    text("Seguir de largo", 500, 155);
    if (show==5 && mouseX>400 && mouseX<600 && mouseY>250 && mouseY<300) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("Usar turbo", 500, 275);
    }
    if (show==5 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("Adelantar", 500, 215);
    }
    if (show==5 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("Seguir de largo", 500, 155);
    }
  }
  if (show==6){
    image(fondo[1],fonposx,fonposy,(1672/2),(941/2));
    image(pj,perposx,perposy,(42*4),(14*4));
    noStroke();
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    textAlign(LEFT, TOP);
    perposx+=5;
    text("estacion:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      show=15;
    }
  }
  if (show==7){
  }
  if (show==8){
    image(fondo[4],fonposx,fonposy,(1672/2),(941/2));
    image(pj,perposx,perposy,(42*4),(14*4));
    noStroke();
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    textAlign(LEFT, TOP);
    perposx+=5;
    text("Fuiste a la autopista, vos te la imaginabas asi:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      show=14;
    }
  }
  if (show==9){
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    noStroke();
    fill(0);
    textSize(14)
    textAlign(LEFT, TOP);
    perposx+=5;
    text("llegaste a la recta final:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      show=16;
    }
  }
  
  if (show==10){
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    perposx+=5;
    noStroke();
    fill(0);
    textSize(14)
    textAlign(LEFT, TOP);
    text("vas por la costa:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      show=14;
    }
  if (show==21){
    background(255)
    image(pj,perposx,perposy,(42*4),(14*4));
    perposx+=5;
    noStroke();
    fill(0);
    textSize(14)
    textAlign(LEFT, TOP);
    text("estas en la recta final:",10,10)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=3000) {
      inst=0;
      show=14;
    }
  }
  
  if (show==14){
    image(rain,fonposx,fonposy,(1672/2),(941/2));
    image(pj,400,350,(42*4),(14*4));
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
      text("La autopista", 500, 275);
      text("La ruta de la costa", 500, 215);
      text("El bosque", 500, 155);
    }
    if (show==14 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("Puente", 500, 215);
    }
    if (show==14 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("Ir a la estacion", 500, 155);
    }
  }
  }
  
  if (show==20){
    image(fondo[2],fonposx,fonposy,(1672/2),(941/2));
    image(pj,400,350,(42*4),(14*4));
    noStroke();
    fill(0,0,0,140);
    rect(0, 0, 800, 450);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    textAlign(LEFT, TOP);
    text("vas por el puente",10,10)
    text("final 2 encontrado",10,50)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=1000) {
      inst=0
      creditosy=450
      show=19;
    }
  }
  
  if (show==15){
    image(fondo[3],fonposx,fonposy,(1672/2),(941/2));
    image(pj,400,350,(42*4),(14*4));
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("Decidiste ir por el bosque",400,26)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=1000) {
      show=20;
      inst=0;
    }
  }
  
  if (show==16){
    background(255)
    noStroke();
    fill(0);
    textSize(14)
    textAlign(LEFT, TOP);
    text("incluso antes que todos esos autos que te caen mal...",10,10)
    text("final 1 encontrado",10,50)
    if (inst==0){
            inst=millis();}
    if (millis()-inst>=4000) {
      show=19;
    }
  }
  
  if (show==18){
    image(fondo[0],fonposx,fonposy,(1672/2),(941/2));
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("outrun", 800/2, 450/8);
    fill(0,0,0,70);
    rect(600/2, 200/2, 200, 50);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textSize(14)
    text("play", 800/2, 1000/8);
    if (show==0 && mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
      fill(255,0,0);
      stroke(0);
      strokeWeight(4);
      textSize(14)
      text("reiniciar", 800/2, 1000/8)
    }
  }
  
  if (show==19){
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
}
function mouseClicked(){
    if (show==0 && mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
        show=1;
    }
    if (show==3 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
        inst=0
        show=15;
    }
    if (show==3 && mouseX>400 && mouseX<600 && mouseY>250 && mouseY<300) {
      inst=0;
      perposx=6;
      perposy=350;
      show=4;
    }
    if (show==3 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      inst=0;
      perposx=6;
      perposy=350;
      show=10;
    }
    if (show==5 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
        inst=0
        show=8;
    }
    if (show==5 && mouseX>400 && mouseX<600 && mouseY>250 && mouseY<300) {
      inst=0;
      perposx=6;
      perposy=350;
      show=9;
    }
    if (show==5 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      inst=0;
      perposx=6;
      perposy=350;
      show=9;
    }
    if (show==14 && mouseX>400 && mouseX<600 && mouseY>130 && mouseY<180) {
        inst=0
        show=7;
    }
    if (show==14 && mouseX>400 && mouseX<600 && mouseY>190 && mouseY<240) {
      inst=0;
      perposx=6;
      perposy=350;
      show=12;
    }
    if (show==18 && mouseX>300 && mouseX<500 && mouseY>100 && mouseY<150) {
        inst=0;
        show=0;
    }
}
