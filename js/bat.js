var loses = 0;
var wins = 0;
			
var play = function(userChoice) {
					
	document.getElementById("player").innerHTML="";
	document.getElementById("opponent").innerHTML="";
	document.getElementById("results").innerHTML="";

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
        document.getElementById("chat").innerHTML = 'ROCK ';
        // document.getElementById("screen").innerHTML = '<img style="margin:0;width: 95px; height: 75px;" src="img/rock.jpg">';
        // document.getElementById("screen").style.backgroundImage = "url('img/rock.jpg')";
        // document.getElementById("screen").style.backgroundSize = "cover";
        // background: #efefef url("../img/rock.jpg") no - repeat;
        // background - size: cover;

    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
         document.getElementById("chat").innerHTML = 'PAPER ';
        // document.getElementById("screen").innerHTML = '<img style="margin:0;width: 95px; height: 75px;" src="img/paper.jpg" >';
        // document.getElementById("screen").style.backgroundImage = "url('img/paper.jpg')";
        // document.getElementById("screen").style.backgroundSize = "cover";
	} else {
		computerChoice = "scissors";
        document.getElementById("chat").innerHTML = 'SCISSOR ';
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
        console.log("Hello");
        // console.log(modal5);
        // modal5.style.display = "block";
        document.getElementById("modal-content").innerHTML="<p>You reached the max score of 10. <br /><br /><br /><br /><br /><br /><br /><br /><br />Congratulations, you have no life.</p>";
        loses = 0;
	    wins = 0;
		//alert("You reached the max score of 10. <br />Congratulations, you have no life.");
	}
    if (loses > 9) {
        console.log("Hello");
        // console.log(modal5);
        // modal5.style.display = "block";
        document.getElementById("modal-content").innerHTML="<p>Your opponent reached the max score of 10. <br /><br /><br /><br /><br /><br /><br /><br />We're sorry, you have no life.</p>";
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



 $(window).scroll(function() {   
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       document.getElementById('armright').style.animation='armDownRight 1s infinite';
        document.getElementById('armleft').style.animation='armDownRight 1s infinite';
       document.getElementById('four').style.display='block';
       document.getElementById("chatwn").innerHTML='GOODBYE';
       document.getElementById("chat").innerHTML='GOODBYE';
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


var electric = function () {

    var canvas = document.getElementById("electric");
    // var canvas2 = document.getElementById("electric2");
    var ctx1 = canvas.getContext("2d");
    // var ctx2 = canvas2.getContext("2d");
    var cHeight = 300;
    var boltHeight = 60;
    const arrayContext = [ctx1];

    function repeatOften() {
        arrayContext.forEach(function (element) {
            drawLightning(element);
        })
        requestAnimationFrame(repeatOften);
    };

    requestAnimationFrame(repeatOften);

    function drawLightning(ctx) {
            ctx.clearRect(0, 0, 500, 300);
            var grad = ctx.createLinearGradient(0, 0, 0, 300);
            grad.addColorStop(0, "black");

            ctx.strokeStyle = "white";

            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(0, 150);
            ctx.lineTo(100, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(200, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(300, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(400, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(500, 150);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.moveTo(0, 150);
            ctx.lineTo(100, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(200, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(300, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(400, cHeight / 2 - (rand(boltHeight) - boltHeight / 2));
            ctx.lineTo(500, 150);
            ctx.stroke();
    }
  
  function rand(ceil){
    return Math.floor((Math.random() * ceil) + 1); 
  }
          
  canvas.style.display='none';
  // canvas2.style.display = 'none';
}();

//Astraunot Cord
         
const cordCanvas = document.getElementById('cord');
const ctx = cordCanvas.getContext('2d');

let y1 = 160;
let y2 = 100;
let y3 = 100;

let y1Forward = true;
let y2Forward = false;
let y3Forward = true;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    ctx.beginPath();
    ctx.moveTo(130, 170);
    ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
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

    if (y3 === 100) {
        y3Forward = true;
    }

    if (y3 === 317) {
        y3Forward = false;
    }

    y1Forward ? y1 += 1 : y1 -= 1;
    y2Forward ? y2 += 1 : y2 -= 1;
    y3Forward ? y3 += 1 : y3 -= 1;
}

// drawVisor();
animate();      
