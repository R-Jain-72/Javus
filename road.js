class Road{
    constructor(x,width,laneCount = 3) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width/2;
        this.right = x + width/2;

        //to make the road go infinitely upwards and downwards
        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    

    draw(ctx){
        ctx.lineWidth = 5;//thick line width
        ctx.strokeStyle = "white";

        for(let i = 0; i <= this.laneCount; i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );

            //add dashes to the middle of the line
            if(i > 0 && i < this.laneCount){
                ctx.setLineDash([20, 20]);
            }
            else{
                ctx.setLineDash([]);
            }
        
            ctx.beginPath();
            /*
            //drawing vertical line on the left side of the road
            ctx.moveTo(this.left, this.top);
            ctx.lineTo(this.left, this.bottom);*/
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }   
        /*
        //drawing vertical line on the right side of the road
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();*/
    }
}

