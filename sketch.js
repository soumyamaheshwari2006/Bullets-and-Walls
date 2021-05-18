var wall, thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(1600, 400)
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)

  bullet = createSprite(1500, 200, 50, 50);
  bullet.shapecolor = "white";
  bullet.velocityX = speed;
 
  wall = createSprite(1200, 200, thickness, height/2);
}

function hasCollided(bullet, wall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;

}

function draw() {
  background(180)
  
  if (hasCollided(bullet,wall)) 
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage>10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage<10 && damage>0) 
    {
      wall.shapeColor = color(0, 255, 0);
    }
    drawSprites();
  }
}