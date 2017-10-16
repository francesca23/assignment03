var colorList = ['#82C168',
                 '#e0f1ff',
                 '#71b2cf',
                 '#104160'];

function setup() {
  createCanvas(500,500);
  noStroke();
  frameRate(10);
}

function draw() {
  translate(-500,-25);
  
  for(var y=0; y<=height; y+=25) {
    for(var x=y; x<=width*2; x+=100) {
      rect(x,y,50,25);

      if(mouseX<500 && mouseY<500) {
        fill(255)
      } else {
        fill(color(random(colorList)))
      }
    }
  }
  
  for(var h=0; h<=height; h+=25) {
    for(var w=h+75; w<=width*2; w+=100) {
      rect(w,h,25,50);
      if(mouseX<500 && mouseY<500) {
        fill(color(random(colorList)))
      } else {
        fill(255)
      }
    }
  }
}