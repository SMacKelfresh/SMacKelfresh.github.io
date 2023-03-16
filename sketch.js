
let smiley;

var stageLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  let sprite, blockGroup;

function setup() {
    
world.gravity.y = 0;
	
new Canvas(600, 600);
let smileText = `
..yyyyyy
.yybyybyy
yyyyyyyyyy
yybyyyybyy
.yybbbbyy
..yyyyyy`;
smiley = new Sprite();
	smiley.img = spriteArt(smileText, 16);



blockGroup = createGroup();
for (var y = 0; y < stageLayout.length; y++) {
for (var x = 0; x < stageLayout[y].length; x++) {
    if (stageLayout[y][x] == 1) {
var block = new Sprite(x * 50 + 25, y * 50 + 25);
block.collider = 'static';
// block.addImage(blockImage);
blockGroup.add(block);
    }
}
}
	sprite = new Sprite();
	sprite.diameter = 90;
    sprite.pos = {x: 100, y: 100};

    smiley.position =  {x: -400,y: 500}

    smiley.collider = 'none';



 
sprite.collide(blockGroup);   

}


function draw() {
    
    background(255, 143, 74);

//    fill(100, 70, 70);
//    ellipse(mouseX, mouseY, 90);

// sprite.pos = {x: mouseX, y: mouseY};
// if (mouse.presses()) {
    sprite.moveTowards(mouse, 0.1);
// }
}




//    fill(100, 100, 100);
//    rect(0, 0, 50, 100);
//    rect(50, 0, 50, 100);
//    rect(100, 0, 50, 100);
//    rect(150, 0, 50, 100);
//    rect(200, 0, 50, 100);
//    rect(250, 0, 50, 100);
//    rect(300, 0, 50, 100);
//    rect(350, 0, 50, 100);
//    rect(400, 0, 50, 100);
//    rect(450, 0, 50, 100);
//    rect(500, 0, 50, 100);
//    rect(550, 0, 50, 100);


//    rect(550, 100, 50, 100);
//    rect(550, 200, 50, 100);
//    rect(550, 300, 50, 100);
//    rect(550, 400, 50, 100);


//    rect(0, 200, 50, 100);
//    rect(50, 200, 50, 100);
//    rect(100, 200, 50, 100);
//    rect(150, 200, 50, 100);
//    rect(200, 200, 50, 100);
//    rect(250, 200, 50, 100);
//    rect(300, 200, 50, 100);
//    rect(350, 200, 50, 100);
//    rect(400, 200, 50, 100);


//    rect(500, 400, 50, 100);
//    rect(450, 400, 50, 100);
//    rect(400, 400, 50, 100);
//    rect(350, 400, 50, 100);
//    rect(300, 400, 50, 100);
//    rect(250, 400, 50, 100);
//    rect(200, 400, 50, 100);
//    rect(150, 400, 50, 100);


//    rect(150, 500, 50, 100);


  
//    rect(0, 200, 50, 100);
//    rect(0, 300, 50, 100);
//    rect(0, 400, 50, 100);
//    rect(0, 500, 50, 100);

