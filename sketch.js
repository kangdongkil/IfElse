function setup() {
   createCanvas(800, 600);
   background(0);
   noFill();
   stroke(255,0,0);
   ellipse(400,300,100,100);
}

function draw() {
   background(0);
   ellipse(400,300,mouseX,mouseY);
   
   }