function Enemigo(x,y){
	this.setWidth(60);
	this.setHeight(60);
	this.setX(x);
	this.setY(y);
	this.contador = 0
	
	this.aleatorio = function(inferior, superior)
	{
		var posibilidades = superior - inferior;
		var random = Math.random() * posibilidades;
		random = Math.floor(random); //Redondear resultado
		return parseInt(inferior) + random;

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