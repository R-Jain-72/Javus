//this creates the outline of the road
const canvas = document.getElementById('myCanvas');
//canvas.height=window.innerHeight;
canvas.width=200;

//to draw on the canvas
const ctx = canvas.getContext('2d');
const road = new Road(canvas.width/2, canvas.width*0.9)
const car = new Car(100,100,30,50);

//to move the car(i.e. animate)
animate();

function animate(){
    car.update(road.borders);
    canvas.height=window.innerHeight;

    //looks like a camera is following the car
    ctx.save();
    //ctx.translate(0,-car.y+canvas.height*0.5);//canvas height * 0.5 makes it centered
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);//calls the animate function repeatedly which gives the illusion of the car moving
}