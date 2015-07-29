var stage;
var keyboard = {};



stage = new Kinetic.Stage({
	container: 'game',
	width: 960,
	height: 500,
	
});  


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
	if(b.getX() + b.getWidth() >= a.getX()  && b.getX()) < a.getX() + a.getWidth())
		{
			//colisiones verticales
			if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
				hit= true;
		}

	//colisiones de a con b
		if(b.getX() <= a.getX() && b.getX()) + b.getWidth() >= a.getX() + a.getWidth() )
		{
			
			if(b.getY() <= a.getY() &&  b.getY() + 	b.getHeight() >= a.getY() + a.getHeight())
				hit= true;
		}

	//Colision b con a
		if(a.getX() <= b.getX() && a.getX()) + a.getWidth() >= b.getX() + b.getWidth() )
		{
			
			if(a.getY() <= b.getY() &&  a.getY() + 	a.getHeight() >= b.getY() + b.getHeight())
				hit= true;
		}

	return hit;	
} 