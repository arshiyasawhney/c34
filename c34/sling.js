class Sling{
    constructor(firstBody, secondPoint){
        var options = {
            bodyA: firstBody,
            pointB: secondPoint,
            stiffness: 0.04,
            length: 200
        }
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }


    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }



    fly(){
        this.sling.bodyA = null;
    }
}