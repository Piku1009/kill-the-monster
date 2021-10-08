class Box{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,100,100);
        World.add(world,this.body);
        //console.log("box constructor")
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,100,100);
        //console.log("box display")
        pop();
    }
}