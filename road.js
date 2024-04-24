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

        const topLeft = {x:this.left, y:this.top};
        const bottomLeft = {x:this.left, y:this.bottom};
        const topRight = {x:this.right, y:this.top};
        const bottomRight = {x:this.right, y:this.bottom};

        this.borders =[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }

    getLaneCenter(laneIndex){
        const laneWidth = this.width/this.laneCount;
        return this.left + this.laneWidth/2+laneIndex*laneWidth;
            Math.min(laneIndex,this.laneCount-1)*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth = 5;//thick line width
        ctx.strokeStyle = "white";

        for(let i = 1; i <= this.laneCount-1; i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            /*
            //add dashes to the middle of the line
            if(i > 0 && i < this.laneCount){
                ctx.setLineDash([20, 20]);
            }
            else{
                ctx.setLineDash([]);
            }
            */
        
            ctx.beginPath();
            /*
            //drawing vertical line on the left side of the road
            ctx.moveTo(this.left, this.top);
            ctx.lineTo(this.left, this.bottom);*/
            ctx.setLineDash([20, 20]);
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }   
        /*
        //drawing vertical line on the right side of the road
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();*/

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
    }
}

