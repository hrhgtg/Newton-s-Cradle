class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        push();
        strokeWeight(5);
        fill("#A1C935");
        stroke("#CCFB5D");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        pop();
    }
}