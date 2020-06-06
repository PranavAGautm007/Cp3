class Paper {
    constructor(x, y, r) {
      var options = {
        restitution:0.3,
        density:1.3,
        friction:0.5,
         isStatic:false
      }
      this.body = Bodies.circle(x, y,r, options);
      this.radius = r;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      ellipseMode(CENTER);
      fill(206,177,33);
      ellipse(0,0, this.radius);
      pop();
    }
  };