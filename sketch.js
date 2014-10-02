function setup() {
	createCanvas(800, 600);
	background(0);
	noFill();
	stroke(0);
}

function draw() {
	background(0);
	var r;
	r= Math.random();

	if (mouseX < 100) {
		fill(255);
		ellipse(50, 200, 100, 100);
	}  
	else if (mouseX < 200){
		fill(0,255,0);
		ellipse(150, 200, 100, 100);
	} 
	else if (mouseX < 300){
		fill(0,0,255);
		ellipse(250, 200, 100, 100);
	} else if (mouseX < 400){
		fill(255,141,35);
		ellipse(350, 200, 100, 100);
	} else if (mouseX < 500){
		fill(20,255,100);
		ellipse(450, 200, 100, 100);
	} else if (mouseX<600){
		fill(155,255,0);
		ellipse(550, 200, 100, 100);
	}
	else {
		background(255,0,0,100);
		fill(r*255);
		ellipse(50, 200, 100, 100);
		fill(r*0,255,0);
		ellipse(150, 200, 100, 100);
		fill(r*0,0,255);
		ellipse(250, 200, 100, 100);
		fill(r*255,141,35);
		ellipse(350, 200, 100, 100);
		fill(r*20,255,100);
		ellipse(450, 200, 100, 100);
		fill(r*155,255,0);
		ellipse(550, 200, 100, 100);
	}
}