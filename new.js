
function setup() {
	createCanvas(800,600);
	bird = new Bird();
	height=600;
	gap=150;
	walllist=[];
	
	
	for(i=0; i<10; i++)
	{
	
		addToWallList(200*i);
	}
}

function addToWallList(offset)
{
	z= random()*(height-gap);
	bottomheight=height-z-gap;
	walllist.push({top: new Wall(200+offset, 0, 50,z),
	bottom: new Wall(200+offset, height-bottomheight,50, bottomheight)});
}


function draw() {

	
	background(0);
	noStroke();
	fill(255);
	text(bird.score,100,100)
	bird.update();
	bird.show();

 
 for(i=0; i<walllist.length; i++)
 {
	 fill(0,255,0);
	rect(walllist[i].top.x, walllist[i].top.y, walllist[i].top.width, walllist[i].top.height);
	walllist[i].top.update();
	walllist[i].bottom.update();

	if(i<=2)
	{
		isColliding(bird, walllist[i]);
	}
	if(walllist[i].top.x<-50)
			{
			walllist.splice(0, 1);	
			addToWallList(walllist[walllist.length-1].top.x);	
			}
	rect(walllist[i].bottom.x, walllist[i].bottom.y, walllist[i].bottom.width, walllist[i].bottom.height);
	
 }

}

function   isColliding(bird, wallitem)
 {
	 top=wallitem.top;
	 bottom=wallitem.bottom;
	 if((bird.x+16>=wallitem.top.x&&bird.y-16<=wallitem.top.y+wallitem.top.height)||(bird.x+16>=wallitem.top.x&&bird.y+16>=wallitem.bottom.y))

	 {
		     
		wallitem.top.velocity=0;
		wallitem.bottom.velocity=0;
		bird.setter(0);
		bird.veloy=0;
		bird.lift=0;
		bird.gravity+=100;
		noLoop();

	 }
	 else if(bird.x-50==wallitem.bottom.x)
	 {
		 bird.score+=1;
		console.log(bird.score)
	 }
 }
function Bird (){
	this.y =300;
	this.x= 25;
	this.gravity=0.8;
	this.veloy= 0;
	this.velox=0;
	this.lift=-15;
	this.score=0;


	this.up=function(){

		this.veloy+=this.lift;

	}
	 
	this.setter= function(velox)
	{this.velox=velox;}
	
	this.show= function() {
		 fill(255,255,0);
		 ellipse(this.x, this.y,32, 32);
	 }
	 this.update = function(){
		 this.veloy = this.veloy+ this.gravity;
		 this.y += this.veloy;
		 this.veloy*=0.9
		 this.x+=this.velox;
		

		 if(this.y>height)
		 {
			 this.y=height;
			 this.veloy=0;
		 }

		 if(this.y<0)
		 {
			 this.y=0;
			 this.veloy=0;	 
		 }
	 }
}

function keyPressed()
{
	if(key==' ')
	{
		
		bird.up();
	}
}

function Wall(x,y, width, height)
{
	this.x=x;
	this.y=y;
	this.height=height;
	this.width=width;
	this.velocity=-1;

	this.update=function(){
			this.x+=this. velocity;		
	}	
}
 
