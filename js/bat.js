var loses = 0;
var wins = 0;
			
var play = function(userChoice) {
					
	document.getElementById("player").innerHTML="";
	document.getElementById("opponent").innerHTML="";
    document.getElementById("results").innerHTML = "";

    document.getElementsByClassName("lightAnimation")[0].style.animationPlayState = 'running';
    document.getElementById("alien-pick").style.animationPlayState = 'running';
    
    // to Retrigger the Animation
    var light = document.getElementById("light");
    var newLight = light.cloneNode(true);   
    light.parentNode.replaceChild(newLight, light);

    var pick = document.getElementById("alien-pick");
    var newPick = pick.cloneNode(true);
    pick.parentNode.replaceChild(newPick, pick);


    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
        document.getElementById("msg-game").innerHTML = 'Astronaut : ROCK ';
        document.getElementById("alien-pick").className = "play rock";
        // classList.item(3);
        // document.getElementById("alien-pick").classList.item(2).removeClass;
        // document.getElementById("alien-side").style.visibility = "visible";
        // document.getElementById("screen").innerHTML = '<img style="margin:0;width: 95px; height: 75px;" src="img/rock.jpg">';
        // document.getElementById("screen").style.backgroundImage = "url('img/rock.jpg')";
        // document.getElementById("screen").style.backgroundSize = "cover";
        // background: #efefef url("../img/rock.jpg") no - repeat;
        // background - size: cover;

    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
        document.getElementById("msg-game").innerHTML = 'Astronaut : PAPER ';
        document.getElementById("alien-pick").className = "play paper";


        // document.getElementById("screen").innerHTML = '<img style="margin:0;width: 95px; height: 75px;" src="img/paper.jpg" >';
        // document.getElementById("screen").style.backgroundImage = "url('img/paper.jpg')";
        // document.getElementById("screen").style.backgroundSize = "cover";
	} else {
		computerChoice = "scissors";
        document.getElementById("msg-game").innerHTML = 'Astronaut : SCISSOR ';
        document.getElementById("alien-pick").className = "play scissors";

        // document.getElementById("alien-pick").classList.item(2).removeClass;
        // document.getElementById("alien-pick").classList.toggle("scissor");

        // document.getElementById("screen").innerHTML = '<img style="margin:0;width: 95px; height: 75px;" src="img/scissor.png" >';

        // document.getElementById("screen").style.backgroundImage = "url('img/scissor.png')";
        // document.getElementById("screen").style.backgroundSize = "cover";
	}
				 
	var compare = function (choice1,choice2) {
	    if (choice1 == choice2) {
		    return "The result is a tie!";
	    } else if (choice1 == "rock"){
		    if (choice2 =="scissors") {
			    wins++;
			    return "rock wins. rock on.";
		    } else {
			    loses++;
			    return "sorry. paper wins.";
		    }
	    } else if (choice1 == "paper") {
		    if (choice2 == "rock") {
			    wins++;
			    return "paper wins";
		    } else {
			    loses++;
			    return "sorry. scissors win.";
		    }
	    } else if (choice1 == "scissors") {
		    if (choice2 == "rock") {
			    loses++;
			    return "sorry. rock wins";
		    } else {
			    wins++;
			    return "scissors win";
		    }
	    } else if (choice1 == "rope") {
		    wins++;
		    return "rope FTW";
	    } else {
		    return "error. bummer dude. game over. no dice.";
	    }
    };
                     
	var winner = compare(userChoice,computerChoice);
	document.getElementById("results").innerHTML=winner;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("loses").innerHTML=loses;
					
	if (wins > 10 || loses > 10) {
		document.getElementById("wins").style.fontSize="44";
		document.getElementById("loses").style.fontSize="44";
	}
    if (wins > 9) {
        // modal5.style.display = "block";
        document.getElementById("msg-game").innerHTML ="<p>Astronaut : You reached the max score of 10. <br />Congratulations, you have no life.</p>";
        loses = 0;
	    wins = 0;
		//alert("You reached the max score of 10. <br />Congratulations, you have no life.");
	}
    if (loses > 9) {
        // modal5.style.display = "block";
        document.getElementById("msg-game").innerHTML="<p>Astronaut : Your opponent reached the max score of 10. <br />We're sorry, you have no life.</p>";
        loses = 0;
	    wins = 0;
		//alert("Your opponent reached the max score of 10. <br />We're sorry, you have no life.");
	}
};

var reset = function() {
	loses = 0;
	wins = 0;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("loses").innerHTML=loses;
};

// Get the modal
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
// var modal5 = document.getElementById('myModal5');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var blog1 = document.getElementById("blog1");
var blog2 = document.getElementById("blog2");
var blog3 = document.getElementById("blog3");
var four = document.getElementById("four");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

//blog1.onclick = function() {
//    modal1.style.display = "block";
//}

// blog2.onclick = function() {
//     modal2.style.display = "block";
// }

//blog3.onclick = function() {
//    modal3.style.display = "block";
//}

//four.onclick = function() {
//    modal4.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     modal.style.display = "none";
     modal1.style.display = "none";
     modal2.style.display = "none";
     modal3.style.display = "none";
     modal4.style.display = "none";
     // modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ((event.target == modal) || (event.target == modal1) || (event.target == modal2) || (event.target == modal3) || (event.target == modal4) ) {
        modal.style.display = "none";
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        // modal5.style.display = "none";
    }
}



$(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 700) {
        document.getElementById('blackhole').style.display = 'none';
        //document.getElementById('astrocord').style.transform = 'rotate(-190deg)';
        //document.getElementById('astrocord').style.left = '-185px';
        //document.getElementById('astrocord').style.top = '-21%';
    }
    else {
        document.getElementById('blackhole').style.display = 'block';
        //document.getElementById('astrocord').style.transform = '';
        //document.getElementById('astrocord').style.left = '';
        //document.getElementById('astrocord').style.top = '';

        //document.getElementById('astrocord').style.transform = 'rotate(-190deg)';
        //document.getElementById('astrocord').style.left = '-185px';
        //document.getElementById('astrocord').style.top = '-21%';
    }
    if ($(window).scrollTop() > 5000)
    {
        document.getElementById('astro-wrap-shela').style.display = 'block';
        document.getElementById('dropcord').style.display = 'block';
        document.getElementById('airpressure').style.display = 'block';
       
    }
    else {
        // document.getElementById('astro-wrap-shela').style.display = 'none';
        document.getElementById('dropcord').style.display = 'none';
        // console.log(document.getElementById('airpressure').style.left);
        if (document.getElementById('airpressure').style.left == "72%") {
            document.getElementById('airpressure').style.display = 'none';
        }
        //if (document.getElementById('airpressure').style.left > "50%") {
        //    consol.log("Hello Mo");
        //    // document.getElementById('airpressure').style.display = 'none';
        //}
        // document.getElementById('airpressure').style.display = 'none';

    }

    
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       // document.getElementById('armright').style.animation='armDownRight 1s infinite';
       // document.getElementById('armleft').style.animation='armDownRight 1s infinite';
       // document.getElementById('four').style.display='block';
       // document.getElementById("chatwn").innerHTML='GOODBYE';
       // document.getElementById("chat").innerHTML='GOODBYE';
   }
});


var $lines = $('.prompt p');
$lines.hide();
var lineContents = new Array();

var terminal = function() {

  var skip = 0;
  typeLine = function(idx) {
    idx == null && (idx = 0);
    var element = $lines.eq(idx);
    var content = lineContents[idx];
    if(typeof content == "undefined") {
      $('.skip').hide();
      return;
    }
    var charIdx = 0;

    var typeChar = function() {
      var rand = Math.round(Math.random() * 150) + 25;

      setTimeout(function() {
        var char = content[charIdx++];
        element.append(char);
        if(typeof char !== "undefined")
          typeChar();
        else {
          element.append('<br/><span class="output">' + element.text().slice(9, -1) + '</span>');
          element.removeClass('active');
          typeLine(++idx);
        }
      }, skip ? 0 : rand);
    }
    content = '' + content + '';
    element.append(' ').addClass('active');
    typeChar();
  }

  $lines.each(function(i) {
    lineContents[i] = $(this).text();
    $(this).text('').show();
  });

  typeLine();
}


 




//Astraunot Cord        
const cordCanvas = document.getElementById('cord');
const ctx = cordCanvas.getContext('2d');

let y1 = 160;
let y2 = 350;
let y3 = 800;

let y1Forward = true;
let y2Forward = false;
let y3Forward = true;

function animate() {
    requestAnimationFrame(animate);


    

    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "#A9A9A9");// dark grey
    gradient.addColorStop("1.0", "#F5F5F5");// white smoke
    gradient.addColorStop("0.5", "#A9A9A9");

    // Fill with gradient
   



    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    // ADDED 300 PX
    ctx.moveTo(150, 150);
    ctx.bezierCurveTo(70, y1, 355, y2, -200, y3);
    // ctx.bezierCurveTo(250, y1, 345, y2, -90, y3);

    // ctx.strokeStyle = 'white';
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 8;
    // ctx.lineWidth = 5;
    // ctx.strokeRect(20, 20, 150, 100);
    //ctx.lineHeight = 180;
    ctx.stroke();


    if (y1 === 100) {
        y1Forward = true;
    }

    if (y1 === 300) {
        y1Forward = false;
    }

    if (y2 === 100) {
        y2Forward = true;
    }

    if (y2 === 310) {
        y2Forward = false;
    }

    if (y3 === -100) {
        y3Forward = true;
    }

    if (y3 === -100) {
        y3Forward = false;
    }

    // y1Forward ? y1 += 1 : y1 -= 1;
    y2Forward ? y2 += 1 : y2 -= 1;
    // y3Forward ? y3 += 1 : y3 -= 1;
}

// drawVisor();
animate();



// Astronaut gas air pressure

var smoke = new Image();
smoke.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/15388/smoke.png';

$.fn.emitter = function (opts) {
    var particles = [];
    var canvases = [];

    var particle = function (canvas) {
        var x, y, size, speedX, speedY, opacity;
        reset();

        this.update = function () {
            if (opacity > 0) {
                opacity -= (Math.random() / opts.speed.fade);
            }

            if (opacity <= 0) {
                reset();
            }

            speedX -= Math.random() / opts.speed.acceleration;
            speedY -= Math.random() / opts.speed.acceleration;
            x += speedX;
            y += speedY;
            size += Math.random();
            drawParticle(x, y, size, opacity);
        };

        function drawParticle(x, y, size, opacity) {
            canvas.globalAlpha = opacity;
            canvas.drawImage(smoke, 0, 0, opts.size, opts.size, x, y, size, size);
        }

        function reset() {
            x = opts.x;
            y = opts.y;
            size = opts.size;
            speedX = Math.random() * opts.speed.x;
            speedY = Math.random() * opts.speed.y;
            opacity = Math.random();
        }
    };

    var canvas = function (el) {
        var canvas = el[0].getContext('2d');

        canvas.width = el.width();
        canvas.height = el.height();

        for (var c = 0; c < opts.particles; c++) {
            particles.push(new particle(canvas));
        }

        this.clear = function () {
            canvas.clearRect(0, 0, canvas.width, canvas.height);
        };
    };

    $(this).each(function () {
        canvases.push(new canvas($(this)));
    });

    function render() {
        canvases.forEach(function (canvas) {
            canvas.clear();
        });

        particles.forEach(function (particle) {
            particle.update();
        });

        window.requestAnimationFrame(render);
    }

    return {
        render: render
    }
};
//$('canvas').emitter({
$("#airpressure").emitter({
    x: 100,
    y: 100,
    size: 140,
    particles: 40,
    speed: {
        x: 4,
        y: 5,
        fade: 10,
        acceleration: 5200
    }
}).render();


