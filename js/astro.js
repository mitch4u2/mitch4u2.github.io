var canvas = document.getElementById("stars"),
	context = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var minimum = 0;
	var maximum = canvas.width;
	var stars = [];
	var nbMax = 100;
	var W = window.innerWidth;
	var H = window.innerHeight;

	var Star = function(){
		this.x = Math.random()*W-50;
        this.y = Math.random()*H-50;
        this.r = Math.floor(Math.random() * (4));

        this.draw=function(){
        	// Draw canvas
			context.beginPath();
			context.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			context.closePath();
			context.fillStyle = "rgba(236, 240, 241, 1)";
			context.fill();
        }
        this.update=function(c){
        	this.x += 0.5;
        	this.y += 0.1;

        	if( (this.x>W+10) || (this.x<-10) || (this.y > H) )
            {
              if(c%4>0) {
                this.x = Math.random() * W;
                this.y = -64;
              }
              else{
              	this.x = -10;
             	this.y = Math.random()*H;
             }
            }
        }
	};

	//Create stars from star
    for(var i=0; i < nbMax; i++)
    {
        stars.push(new Star);
    }

    //Draw stars and update position
    function update(){
      for(var i=0; i < nbMax; i++)
      {
        var s = stars[i];
        s.draw();
        s.update(i);
      }
    }

    //Call update function
    function render()
    {
       requestAnimationFrame(render, 40);
       context.clearRect(0, 0, W, H);
       update();
    }
    render();
