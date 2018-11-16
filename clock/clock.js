
function setup(){
	createCanvas(500, 500);
	
	


}
function draw(){
	background(0, 255, 255);
	angleMode(DEGREES)
	noFill()
	strokeWeight(5)
	var hour_1 = map(hour(), 0, 24, -90, 270);
	var min = map(minute(), 0, 60, -90, 270);
	var sec = map(second(), 0, 60, -90, 270);
	if(mouseIsPressed){
		r = random(0, 256)
		g = random(0, 256)
		b = random(0, 256)
	}else{
		r=0
		g=255
		b=255
	}
	
	stroke(r,g,b)
	arc(250, 250, 200, 200, -90, hour_1)
	arc(250, 250, 190, 190, -90, min)
	arc(250, 250, 180, 180, -90, sec)

	//console.log(hour_1, min, sec,);
}