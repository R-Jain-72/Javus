class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.MaxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }
    update(){
        if(this.controls.forward){
            //this.y -= 2; // as y inc downwords in the computer therefore to move forward -
            this.speed += this.acceleration;
        }

        if(this.controls.reverse){
            //this.y += 2; // to move in reverse y should be +
            this.speed -= this.acceleration;
        }

        if(this.speed > this.MaxSpeed){
            this.speed = this.MaxSpeed;
        }
        // to limit the speed in reverse
        //- sign indicates that the car is moving backwards
        if(this.speed < -this.MaxSpeed/2){
            this.speed = -this.MaxSpeed/2;
        }
        // if the speed is more than the zero, speed is decreased by friction
        if(this.speed > 0){
            this.speed -= this.friction;
        }
        // if the speed is less than the zero, speed is increased by friction
        if(this.speed < 0){
            this.speed += this.friction;
        }
        // if the speed is less than the friction, speed is set to 0
        if(Math.abs(this.speed)<this.friction){
            this.speed = 0;
        }

        if(this.controls.left){
           // this.x -= 2;
           this.angle += 0.03;
        }

        if(this.controls.right){
           // this.x += 2;
           this.angle -= 0.03;
        }

        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
        //this.y -= this.speed;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);//point where the rotation will be centered at
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();
    }
}