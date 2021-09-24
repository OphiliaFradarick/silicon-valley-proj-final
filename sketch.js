var shooter,  alien, bullet, bulletImg, shooterImg , alienImg, playButton, playButtonImg, edges
var gameState = "serve"

function preload(){
bulletImg = loadImage("images/bullet.png")
shooterImg = loadImage("images/shooter.png")
alienImg = loadImage("images/alien.png")
playButtonImg = loadImage("images/playButton.png")

}


function setup(){
createCanvas(displayWidth, displayHeight);
playButton= createSprite( displayWidth/2-10, displayHeight/2)
playButton.addImage("play", playButtonImg)
playButton.scale = 0.2;

shooter = createSprite(displayWidth/2-10, displayHeight-220)
shooter.addImage("shoot", shooterImg);
shooter.scale = 0.3 ;
shooter.visible = false

edges = createEdgeSprites();
}

function draw(){
 background("black")

    if(gameState === "serve"){
        fill ("white")
        textSize (30)
        stroke("blue")
        strokeWeight(5)
        text ("ALIEN SHOOTER GAME!", displayWidth/2-200, displayHeight/2-100)

        if(mousePressedOver(playButton)){
        gameState = "play"
        }

    }

    if(gameState === "play"){
        shooter.visible = true;
        shooter.x = mouseX
        shooter.collide(edges[0])
        shooter.collide(edges[1])

        playButton.remove();

    }
    drawSprites();
}

