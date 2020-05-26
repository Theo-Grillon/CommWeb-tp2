function Circle(radius){
    this.radius=radius;
}
Circle.prototype=Object.create(Shape.prototype);

Circle.prototype.draw=function(context){
    context.beginPath();
    context.arc(this.center.x, this.center.y, this.radius, 0, 2*Math.PI);
    context.closePath();
}