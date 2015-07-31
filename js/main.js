var stage, fondo;
var keyboard = {};
var intv;
var personaje;
var grav = 0.8;
var val_reb = 0;


stage = new Kinetic.Stage({
	container: 'game',
	width: 960,
	height: 500,
	
});  

function nivelUno(){
	fondo = new Kinetic.Layer();
	personaje = new Heroe();
	personaje.setX(0);
	personaje.setY(stage.getHeight()-personaje.getHeight());//Se resta al alto del canvas el alto del personaje
	personaje.limiteDer = stage.getWidth()-personaje.getWidth();
	personaje.limiteTope = stage.getHeight();
	fondo.add(personaje);
	stage.add(fondo);
}




function moverPersonaje()
{

	if (keyboard[37]) 
		{
			personaje.retroceder();
		}
	if(keyboard[39])
	{
		personaje.caminar();
	}	
	if(keyboard[38] && personaje.contador < 1)
	{
		personaje.saltar();
	}	
}



function addKeyBoardEvents(){

	addEvent(document, "keydown", function(e){

		keyboard[e.keyCode] = true;
	});


	addEvent(document, "keyup", function(e){

		keyboard[e.keyCode] = false;
	});

	function addEvent (element, eventName, func)
	{
		if(element.addEventListener){ //checar el evento del navegador

			element.addEventListener(eventName,func, false);

		}else if (element.attachEvent)
		{
			element.attachEvent(eventName,func);
		}
			
			
	}
}

function hit(a,b){
	var hit = false;

	//colisiones horizontales
	if(b.getX() + b.getWidth() >= a.getX()  && b.getX() < a.getX() + a.getWidth())
		{
			//colisiones verticales
			if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
				hit= true;
		}

	//colisiones de a con b
		if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth() )
		{
			
			if(b.getY() <= a.getY() &&  b.getY() + 	b.getHeight() >= a.getY() + a.getHeight())
				hit= true;
		}

	//Colision b con a
		if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth() )
		{
			
			if(a.getY() <= b.getY() &&  a.getY() + 	a.getHeight() >= b.getY() + b.getHeight())
				hit= true;
		}

	return hit;	
} 

function aplicarFuerzas()
{
	personaje.aplicarGravedad(grav, val_reb);
}

addKeyBoardEvents();
nivelUno();


intv = setInterval(frameLoop, 1000/20);

function frameLoop ()
{
	aplicarFuerzas();
	moverPersonaje();
	stage.draw();
}