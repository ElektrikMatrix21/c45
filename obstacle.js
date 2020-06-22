class Obstacle{
    constructor(x,y){
        this.body = createSprite(x,y,100,200);
        this.width = 100;
        this.height = 200;
    }

    display(){
            var angle = this.body.angle
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();       
    }

}