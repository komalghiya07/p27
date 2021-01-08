class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.2
        }
        this.bob=Bodies.circle(x,y,20,options);
        this.r=20;
        World.add(world,this.bob); 
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("pink");
        //rotate(angle);
        ellipse(this.bob.position.x,this.bob.position.y,this.r,this.r);
        pop();
            
    }
    
}