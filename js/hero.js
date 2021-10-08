class Hero{
    constructor(){
        this.body = Bodies.circle(300,300,100);
        World.add(world,this.body);
        this.image = superheroimage;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,300,300,700,500);
        pop();
    }
}