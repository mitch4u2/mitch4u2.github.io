var loses = 0;
var wins = 0;
			
var play = function(userChoice) {
					
					document.getElementById("player").innerHTML="";
					document.getElementById("opponent").innerHTML="";
					document.getElementById("results").innerHTML="";
				
					
					
                        
                    var computerChoice = Math.random();
                    
					if (computerChoice < 0.34) {
                           
                       
                        computerChoice = "rock";
                        document.getElementById("chat").innerHTML='ROCK ';
                        
					
						
					} else if(computerChoice <= 0.67) {
						computerChoice = "paper";
                         document.getElementById("chat").innerHTML='PAPER ';
					} else {
						computerChoice = "scissors";
                         document.getElementById("chat").innerHTML='SCISSOR ';
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
                         modal.style.display = "block";
                        document.getElementById("modal-content").innerHTML="<p>You reached the max score of 10. <br /><br /><br /><br /><br /><br /><br /><br /><br />Congratulations, you have no life.</p>";
                        loses = 0;
	                   wins = 0;
						//alert("You reached the max score of 10. <br />Congratulations, you have no life.");
					}
					if (loses > 9) {
                         modal.style.display = "block";
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
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var blog1 = document.getElementById("blog1");
var blog2 = document.getElementById("blog2");
var blog3 = document.getElementById("blog3");
var four = document.getElementById("four");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




// When the user clicks the button, open the modal 

blog1.onclick = function() {
    modal1.style.display = "block";
}


blog2.onclick = function() {
    modal2.style.display = "block";
}

blog3.onclick = function() {
    modal3.style.display = "block";
}

four.onclick = function() {
    modal4.style.display = "block";
}








// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     modal.style.display = "none";
     modal1.style.display = "none";
     modal2.style.display = "none";
     modal3.style.display = "none";
    modal4.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ((event.target == modal) || (event.target == modal1) || (event.target == modal2) || (event.target == modal3) || (event.target == modal4) ) {
        
        modal.style.display = "none";
        modal1.style.display = "none";
         modal2.style.display = "none";
         modal3.style.display = "none";
        modal4.style.display = "none";
        
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