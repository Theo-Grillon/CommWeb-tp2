function Shape(x,y){
    this.center=new Point(x,y);
}
Shape.prototype.setCenter = function(Point){
   this.center=Point;
}