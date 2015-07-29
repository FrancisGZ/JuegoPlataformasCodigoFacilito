function	Heroe(){

	Kinetic.Rect.call(this);
	
	this.setWidth(40);
	this.setHeight(70);
	this.vx = 15;
	this.vy = 0;
	this.direccion = 1;
	this.contador = 0
	this.caminar = function()
	{

	}
	this.retroceder =  function()
	{

	}

	this.saltar = function()
	{

	}

	this.aplicarGravedad = function()
	{
		
	} 
}    


Heroe.prototype = Object.create(Kinetic.Rect.prototype);