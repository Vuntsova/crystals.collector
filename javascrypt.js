//always start the code with this comant
//+++++++++++++++
$(document).ready(function() {
//main random number
	var randNumber = 0;
//crystals 
	var green=0;
	var blue=0;
	var lightBlue=0;
	var yellow=0;
// total score
	var totalScore = 0;
// wins and losses
	var wins=0;
	var losses=1;
	for (var i = 0; i < losses.length; i++) {
		losses[i]
	}
//Start Game
//random number function

	function randGenerator(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}



	randNumber = randGenerator(19,120);
	green = randGenerator(1,12);
	blue = randGenerator(1,12);
	lightBlue = randGenerator(1,12);
	yellow = randGenerator(1,12);

	$("#mainNumber").html(randNumber);

//onclick here
//green


var crystalList = ["#greenCrystal", "#blueCrystal", "#lightBlueCrystal", "#yellowCrystal"]




	$("#greenCrystal").click(function(){
		$("#greenCrystalVal").html(function(){
			totalScore += green;
			$("#total").html(totalScore);

			if(randNumber < totalScore){
					alert("you lose");
					$("#lose").html(losses++);
				}

				else if(randNumber === totalScore){
					alert("you win")


				};
		});		
	});
//blue
	$("#blueCrystal").click(function(){
		$("#blueCrystalVal").html(function(){
			totalScore += blue;
			$("#total").html(totalScore);

			if(randNumber < totalScore){
					alert("you lose");
					console.log(totalScore);
				}

				else if(randNumber === totalScore){
					alert("you win")

				};
		});
		//totalScore += blue;
	});
//lightBlue
	$("#lightBlueCrystal").click(function(){
		$("#lightBlueCrystalVal").html(function(){
			totalScore += lightBlue;
			$("#total").html(totalScore);

			if(randNumber < totalScore){
					alert("you lose");
					console.log(totalScore);
				}

				else if(randNumber === totalScore){
					alert("you win")

				};
		});
		//totalScore += lightBlue;
	});
//yellow
	$("#yellowCrystal").click(function(){
		$("#yellowCrystalVal").html(function(){
			totalScore += yellow;
			$("#total").html(totalScore);

				if(randNumber < totalScore){
					alert("you lose");
					console.log(totalScore);
				}

				else if(randNumber === totalScore){
					alert("you win")

				};

		});
		//totalScore += yellow;
	});























});//$document.ready ends