
function setup() {
	createCanvas(800, 600); // The canvas is 800x600 to fit every screen since I'm almost certain most screen nowadays have at least 800x600 resolution
	background(255); // The background starts off as white
	
stroke(128)
for (let cat = 0; cat <800; cat += 50)                     // This entire part is to make the starting grid for the background 
	for (let mouse = 0; mouse < 800; mouse += 50) { 
    rect(mouse, cat, 50, 50);  

}}
let coordinate = 0  		// This is used later to animate/move rectangles later
let c = 255             // This is used later for colour and a conditional for a "loop"                    


function draw() {              

		
	strokeWeight(5)                   			//this section is for the horns of a character 
	stroke(211, 45, 45)                      
	fill(int(random(256)), int(random(256)), int(random(256)));     // The horns have a strokeWeight of red since the character has red horns. I made the horns flash with random colours. 

	rect(120, 120, 30, 30);  // these rectangles make up the horn
 rect(120, 150, 30, 30); 
	
rect(240, 120, 30, 30);
rect(240, 150, 30, 30);


	
stroke(0)                           	// this ENTIRE section is for the creation of the character "Zero Two" from an anime called "Darling in the Franxx" 
	strokeWeight(0)
	strokeWeight(0)
	fill(230,156,157);
	rect(120, 60, 30, 30);
	rect(150, 60, 30, 30);
	rect(180, 60, 30, 30);
	rect(210, 60, 30, 30);
	rect(240, 60, 30, 30);
	
	
	rect(90,90, 30, 30);
	rect(60, 120, 30, 30);
	rect(270, 90, 30, 30);
	rect(300, 120, 30, 30);
	
	fill(236,190,190);
	rect(120, 90, 30, 30);
	rect(150, 90, 30, 30);
	rect(180, 90, 30, 30);
	rect(210, 90, 30, 30);
	rect(240, 90, 30, 30);
	
	rect(90, 120, 30, 30);
	rect(270, 120, 30, 30);
	
	
	
	fill(230,180,181);
	rect(150, 120, 30, 30);
	rect(180, 120, 30, 30);
	rect(210, 120, 30, 30);
	
	fill(178,178,178);
	rect(90, 150, 30, 30);
	rect(150, 150, 30, 30);
	rect(180, 150, 30, 30);
	rect(210, 150, 30, 30);
	rect(270, 150, 30, 30);
	
	fill(241,183,182);
	rect(300, 150, 30, 30);
	rect(300, 180, 30, 30);
	rect(300, 210, 30, 30);
	rect(300, 240, 30, 30);
	rect(300, 270, 30, 30);
	rect(300, 300, 30, 30);
	
	rect(60, 150, 30, 30);
	rect(60, 180, 30, 30);
	rect(60, 210, 30, 30);
	rect(60, 240, 30, 30);
	rect(60, 270, 30, 30);
	rect(60, 300, 30, 30);
	
	fill(217,159,158);
	rect(120, 180, 30, 30);
	rect(150, 180, 30, 30);
	rect(180, 180, 30, 30);
	rect(210, 180, 30, 30);
	rect(240, 180, 30, 30);
	
	rect(270, 210, 30, 30);
	rect(90, 210, 30, 30);
	
		
	fill(228,172,173);
	rect(90, 180, 30, 30);
	rect(270, 180, 30, 30);
	
	fill(233,205,183);
	rect(120, 210, 30, 30);
	rect(150, 210, 30, 30);
	rect(180, 210, 30, 30);
	rect(210, 210, 30, 30);
	rect(240, 210, 30, 30);
	
	rect(120, 240, 30, 30);
	rect(150, 240, 30, 30);
	rect(180, 240, 30, 30);
	rect(210, 240, 30, 30);
	rect(240, 240, 30, 30);
	
	rect(120, 270, 30, 30);
	rect(150, 270, 30, 30);
	rect(180, 270, 30, 30);
	rect(210, 270, 30, 30);
	rect(240, 270, 30, 30);
	
	rect(180, 300, 30, 30);
	
	fill(221,175,175);
	rect(270, 240, 30, 30);
	rect(270, 270, 30, 30);
	rect(270, 300, 30, 30);
	
	rect(90, 240, 30, 30);
	rect(90, 270, 30, 30);
	rect(90, 300, 30, 30);
	
	fill(191,194,183);
	rect(270, 330, 30, 30);
	rect(300, 330, 30, 30);
	rect(60, 330, 30, 30);
	rect(90, 330, 30, 30);
	
	fill(0)
	rect(120, 300, 30, 30);
	rect(240, 300, 30, 30);
	
	fill(248,150,23);
	rect(180, 330, 30, 30);
	rect(180, 360, 30, 30);
	
	fill(166,58,56);
	rect(240, 360, 30, 30);
	rect(300, 360, 30, 30);
	
	rect(120, 360, 30, 30);
	rect(60, 360, 30, 30);
	
	fill(56,56,56);
	rect(270, 360, 30, 30);
	rect(270, 390, 30, 30);
	rect(90, 360, 30, 30);
	rect(90, 390, 30, 30);
	
	fill(177,72,69);
	rect(120, 390, 30, 30);
	rect(150, 390, 30, 30);
	rect(210, 390, 30, 30);
	rect(240, 390, 30, 30);
	rect(150, 420, 30, 30);
	rect(180, 420, 30, 30);
	rect(210, 420, 30, 30);
	
	rect(300, 390, 30, 30);
	rect(60, 390, 30, 30);
	
	fill(57,127,119);
	rect(150, 240, 30, 30);
	rect(210, 240, 30, 30);
	
	fill(93,91,92); 
	rect(180, 390, 30, 30); 
	
	fill(255);
	rect(150, 300, 30, 30);
	rect(150, 330, 30, 30);
	rect(150, 360, 30, 30);
	rect(120, 330, 30, 30);
	
	rect(210, 300, 30, 30);
	rect(210, 330, 30, 30);
	rect(210, 360, 30, 30);
	rect(240, 330, 30, 30);
	
  					
	textAlign(RIGHT, BOTTOM)     // This section is for my name 
	fill(0)
	textSize(50)
	text('Steven',800, 600);
	
	strokeWeight(2)
	stroke(0, 0, 255);	         //This strokeWeight is for a blue outline - the colours blue and red and seen frequently throughout the anime
fill(c);                        // c is from the let statement I made above
  rect(coordinate, 550, 50, 50);              // the rectangles are 50x50 to match the grid from earlier 
  coordinate += 50               //this is how I get the rectangles to move

	frameRate(30);                 
 
if (coordinate === 800) {          // I made this to make sure once the rectangle reaches the other side of the canvas, it will return to 0 or ther otherside again
  coordinate = 0;         
	c -= 35

}
	if (c === -25) {				// This is for looping the colours, so it doesn't stay black after all the colours have gone. 
	c = 255                     //"c" is going down by 35 from 255, so I put -25 since it will land on there when its the colour black and "reset" back to white
	}
	
	let pxs = ['255','0'];               // I used array to get a more controled random colours. The colours made are black, red, and a few blues.
let px = random(pxs);  
let pxss = random(pxs);
  
stroke(211, 45, 45);
	if (mouseIsPressed) {                 // When you press the mouse, Zero Two should come up with random colours 
	 fill(px, 0, pxss); 
	 textSize(30)
	text('Zero Two', mouseX, mouseY);	
	ellipse(mouseX*1.01, mouseY/1.03, 5, 5);     // I made this to make an exclamation mark. I know I could have just entered it in text, but I wanted to make a bootleg version of an exclamation mark. 
	rect(mouseX*1.005, mouseY/1.06, 5, -20);      // I used a rectangle and circle to make the exclamation mark. I messed around with mouseY and X to get better placements for the '!'. 
	
	
	stroke(0);                                          
  strokeWeight(1)
	let turtle = int(random(17)) 	// I took this from the gridlines assignment I did. I put it under mouse pressed, so as you press down, random coloured squares will randomly spawn inside the grid. 
	let snail = int(random(13))							
	let monkey = turtle * 50     
	let bird = snail * 50

	fill(int(random(256)), int(random(256)), int(random(256)))
  rect(monkey, bird, 50, 50)               
	}
		 
	    
	    if (keyIsPressed) {                      			// This section changes the colours of the background and grid when a key is pressed
			let sammy = (int(random(256)))      // This section is for making sure the grid and background matched as they changed colours. 
			let jammy =	 int(random(256))
			let tammy =	 int(random(256))
		  background(sammy, jammy, tammy)
		
		stroke(128)																						
		fill(sammy, jammy, tammy)
		for (let cat = 0; cat <800; cat += 50)
	  for (let mouse = 0; mouse < 800; mouse += 50) { 
    rect(mouse, cat, 50, 50); 
			
		
	
		
	}
 }
}
