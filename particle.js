class Particle {
    constructor(x,y,r) {
      var options = {
          friction:14,
          restitution: 12
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
    ellipse(pos.x, pos.y, this.r);
    }
  };