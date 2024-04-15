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
    car.update();
    canvas.height=window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);//calls the animate function repeatedly which gives the illusion of the car moving
}