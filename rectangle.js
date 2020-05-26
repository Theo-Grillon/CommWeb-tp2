function Rectangle(xSize,ySize){
    Shape.call(this,0,0);
    this.width=xSize;
    this.height=ySize;
}
Rectangle.prototype=Object.create(Shape.prototype);

Rectangle.prototype.draw=function(context){
    context.beginPath();
    context.rect(this.center.x, this.center.y, this.width, this.height);
    context.closePath();
}