class Drop{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.radius= 5 
        World.add(world, this.rain);
    }
   /* display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }*/

updateDrop (){
  if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)})
          }
}

showDrop(){
   fill('blue')
   ellipseMode(CENTER)
   ellipse(this.rain.position.x, this.rain.position.y, 5, 5);
}
}