function Moneda (x,y){

	Kinetic.Rect.call(this); //Constructor de la clase heredada

	this.setWidth(30);
	this.setHeight(30);
	this.setX(x);
	this.setY(y);
	this.setFill('yellow');

}


Moneda.prototype = Object.create(Kinetic.Rect.prototype); //Herencia de la clase create de kinetic js