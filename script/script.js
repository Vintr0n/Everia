


function isActionConfirmed(){
if (document.getElementById('update').value == ""){
	alert("Please confirm your action before proceeding to next turn");
}

}

var xhr = new XMLHttpRequest();
//document.getElementsByClassName("EndTurn").disabled = true;

xhr.open("GET", "AI.json", true);
//xhr.setRequestHeader("accept", "application/json");
xhr.overrideMimeType("application/json");
xhr.onload = function(){
	document.getElementById('AttackButton').style.visibility = 'hidden';
	document.getElementById('update').value = "";
	document.getElementById('console').value = "";
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
			
			var json = JSON.parse(xhr.response);
			var AI = json.AI;
			var ID = AI.ID;
			var x = 0;

			document.getElementsByClassName('bar')[0].innerHTML = 
			'&nbsp;&nbsp;'+
			'<img class="icon" src="images/turn.png" title="Current Turn" class="icon">Turn: ' + ID[0].turn + ' | ' +
			'<img class="icon" src="images/gold.png" title="Current Gold" class="icon">Current Gold: ' + ID[0].gold + ' | ' +
			'<img class="icon" src="images/income.png" title="Gold Income per turn" class="icon">Income: ' + ID[0].gold_income + ' | ' +
			'<img class="icon" src="images/capacity.png" title="Current Population Capacity" class="icon">Capacity: ' + ID[0].capacity + ' | ' +
			'<img class="icon" src="images/capacity.png" title="Total Units" class="icon">Total units: ' + ID[0].total_troops + ' | ' +
			'<img class="icon" src="images/sword.png" title="Swords"> Swordsmen: ' + ID[0].swords + '</img>' + ' | ' +
			'<img class="icon" src="images/archer.png" title="Archers"class="icon">Archers: ' + ID[0].archers + '</img>' + ' | ' +
			'<img class="icon" src="images/axe.png" title="Axes"class="icon">Axesmen: ' + ID[0].axes + '</img>' + ' | ' +
			'<img class="icon" src="images/cavalry.png" title="Cavalry" class="icon">Cavalry: ' + ID[0].cavalry + ' | ' +
			'<img class="icon" src="images/housing.png" title="Housing Level" class="icon">Housing Level: ' + ID[0].housing + ' | ' +
			'<img class="icon" src="images/goldmine.png" title="Gold Mine Level" class="icon">Gold Mine Level: ' + ID[0].goldmine + ' | ' +
			'<img class="icon" src="images/wall.png" title="Wall Level" class="icon">Wall Level: ' + ID[0].wall + ' | ' +
			'<img class="icon" src="images/barracks.png" title="Barracks Level" class="icon">Barracks Level: 0' ;
			
			
			
			document.getElementsByClassName('Costs')[0].innerHTML = 
			'<img class="icon" src="images/sword.png" title="Swords">Swordsmen cost: ' + ID[0].swords_cost + '</img>' + 
			'<img class="icon" src="images/archer.png" title="Archers"class="icon">Archers cost: ' + ID[0].archers_cost + '</img>' + "<br>" +
			
			'<img class="icon" src="images/axe.png" title="Axes"class="icon">Axesmen cost: ' + ID[0].axes_cost + '</img>' + "&nbsp;&nbsp;" +
			'<img class="icon" src="images/cavalry.png" title="Cavalry" class="icon">Cavalry cost: ' + ID[0].cavalry_cost + "<br>" +
			 "<br> <br>" +
			 
			'<img class="icon" src="images/housing.png" title="Housing Level" class="icon">Housing cost: ' + ID[0].housing_cost + 
			'<img class="icon" src="images/goldmine.png" title="Gold Mine Level" class="icon">Gold Mine cost: ' + ID[0].goldmine_cost + "<br>" +
			
			'<img class="icon" src="images/wall.png" title="Wall Level" class="icon">Wall Cost: ' + ID[0].wall_cost +
			'<img class="icon" src="images/barracks.png" title="Barracks Level" class="icon">Barracks Cost: 0' ;
			
			
				for(key in ID) {
					response = xhr.response;
					
					
				};
        }
    }



var xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        document.getElementsByClassName('console')[0].innerHTML = this.responseText;
    };
    xhr2.open('GET', "console.txt");
    xhr2.send();

};

xhr.send(null);

function PlayerChoiceFunction(elem) {
	
  var buttonValue = elem.value;
  
  var json = JSON.parse(xhr.response);
			var AI = json.AI;
			var ID = AI.ID;
			var x = 0;
			var butVal = buttonValue+"_cost";
			
  document.getElementById('update').value = "";
  document.getElementById('console').value = "";
  document.getElementsByClassName('PlayerChoice')[0].innerHTML = "Train/Build: " + buttonValue + "<br>";
  document.getElementById('AttackButton').style.visibility = 'hidden';
  
}



function Reset() {
	
	var json = JSON.parse(xhr.response);
	var AI = json.AI;
	var ID = AI.ID;
			
  document.getElementsByClassName('PlayerChoice')[0].innerHTML = "<br><br>";
  document.getElementById('AttackButton').style.visibility = 'hidden';
		
			document.getElementsByClassName('bar')[0].innerHTML = 
			'&nbsp;&nbsp;'+
			'<img class="icon" src="images/turn.png" title="Current Turn" class="icon">Turn: ' + ID[0].turn + ' | ' +
			'<img class="icon" src="images/gold.png" title="Current Gold" class="icon">Current Gold: ' + ID[0].gold + ' | ' +
			'<img class="icon" src="images/income.png" title="Gold Income per turn" class="icon">Income: ' + ID[0].gold_income + ' | ' +
			'<img class="icon" src="images/capacity.png" title="Current Population Capacity" class="icon">Capacity: ' + ID[0].capacity + ' | ' +
			'<img class="icon" src="images/capacity.png" title="Total Units" class="icon">Total units: ' + ID[0].total_troops + ' | ' +
			'<img class="icon" src="images/sword.png" title="Swords"> Swordsmen: ' + ID[0].swords + '</img>' + ' | ' +
			'<img class="icon" src="images/archer.png" title="Archers"class="icon">Archers: ' + ID[0].archers + '</img>' + ' | ' +
			'<img class="icon" src="images/axe.png" title="Axes"class="icon">Axesmen: ' + ID[0].axes + '</img>' + ' | ' +
			'<img class="icon" src="images/cavalry.png" title="Cavalry" class="icon">Cavalry: ' + ID[0].cavalry + ' | ' +
			'<img class="icon" src="images/housing.png" title="Housing Level" class="icon">Housing Level: ' + ID[0].housing + ' | ' +
			'<img class="icon" src="images/goldmine.png" title="Gold Mine Level" class="icon">Gold Mine Level: ' + ID[0].goldmine + ' | ' +
			'<img class="icon" src="images/wall.png" title="Wall Level" class="icon">Wall Level: ' + ID[0].wall + ' | ' +
			'<img class="icon" src="images/barracks.png" title="Barracks Level" class="icon">Barracks Level: 0' ;
			
			
			
			document.getElementsByClassName('Costs')[0].innerHTML = 
			'<img class="icon" src="images/sword.png" title="Swords">Swordsmen cost: ' + ID[0].swords_cost + '</img>' + 
			'<img class="icon" src="images/archer.png" title="Archers"class="icon">Archers cost: ' + ID[0].archers_cost + '</img>' + "<br>" +
			
			'<img class="icon" src="images/axe.png" title="Axes"class="icon">Axesmen cost: ' + ID[0].axes_cost + '</img>' + "&nbsp;&nbsp;" +
			'<img class="icon" src="images/cavalry.png" title="Cavalry" class="icon">Cavalry cost: ' + ID[0].cavalry_cost + "<br>" +
			 "<br> <br>" +
			 
			'<img class="icon" src="images/housing.png" title="Housing Level" class="icon">Housing cost: ' + ID[0].housing_cost + 
			'<img class="icon" src="images/goldmine.png" title="Gold Mine Level" class="icon">Gold Mine cost: ' + ID[0].goldmine_cost + "<br>" +
			
			'<img class="icon" src="images/wall.png" title="Wall Level" class="icon">Wall Cost: ' + ID[0].wall_cost +
			'<img class="icon" src="images/barracks.png" title="Barracks Level" class="icon">Barracks Cost: 0' ;
			
			
			
			
  //window.location.reload(true);	
}






function Update(playerID) {
	
	
	var json = JSON.parse(xhr.response);
	var AI = json.AI;
	var ID = AI.ID;
	var x = 0;
	var CantConfirm = 0;
	
	
	
	for(key in ID) {
		
						
		// Calculate costing (level 1 = 100)
		ID[x].housing_cost = ID[x].housing * 100;
		ID[x].goldmine_cost = ID[x].goldmine * 100;
		ID[x].wall_cost = ID[x].wall * 100;
		
		
		// Calculate total troops, gold, gold income, capacity, wall defence, 
		ID[x].gold_income = ID[x].goldmine * 25;
		ID[x].capacity = ID[x].housing * 50;
		ID[x].total_troops = ID[x].swords + ID[x].archers + ID[x].axes + ID[x].cavalry;
		ID[x].wall_defence = ID[x].wall / 100+1;
		
		

		



//PLAYER
if (ID[x].type == 0) {

var divs = document.getElementsByClassName('PlayerChoice');

document.getElementById('console').value = "<br>------------------------------------------------------------------<br>Turn number = " + ID[x].turn + "<br>";



//Player attacks
if(divs[0].innerHTML.indexOf("Attacking") !== -1) {
	
	if (ID[0].total_troops < 1){
		alert("You have no units to attack with!");
		CantConfirm = 1;
	}
	
	var attackingText = divs[0].innerHTML;
	var playerID = attackingText.substring(32,33);
	//alert(playerID);
	
	
	
	//Calculate attacking power
	var AttackingPower = (ID[0].axes * 10) + (ID[0].swords * 6) + (ID[0].archers * 5) + (ID[0].cavalry * 16);
	
	//Calculate opponent 
	var DefensivePower = (ID[playerID].axes * 2) + (ID[playerID].swords * 8) + (ID[playerID].archers * 9) + (ID[playerID].cavalry * 5);
	DefensivePower = DefensivePower * ID[playerID].wall_defence;
	
	var totalAD = AttackingPower - DefensivePower;
	var totalDA = DefensivePower - AttackingPower;
	
	var AttackerSurvival = ((totalAD / AttackingPower).toFixed(3));
	var DefenderSurvival = ((totalDA / DefensivePower).toFixed(3));
	
	
	console.log("Defender wall mod: " + ID[playerID].wall_defence);	
	console.log("Attacker: " + ID[0].name);	
	console.log("Defender:" + ID[playerID].name);
	console.log("Attacking Power: " + AttackingPower);	
	console.log("Defensive Power:" + DefensivePower);
	console.log("Total AD: " + totalAD);	
	console.log("Total DA: " + totalDA);
	console.log("AttackerSurvival: " + AttackerSurvival);	
	console.log("DefenderSurvival: " + DefenderSurvival);
	
	//document.getElementById('console').value += "" + ID[0].name + " attacked with total of " + AttackingPower + " attacking power <br>";
	//document.getElementById('console').value += "" + ID[playerID].name + " defended with total of " + DefensivePower + " defensive power <br>";


	
	//document.getElementById('console').value += "" + ID[0].name + " has a survival of " + AttackerSurvival + "  <br>";
	//document.getElementById('console').value += "" + ID[playerID].name + " has a survival of " + DefenderSurvival + "  <br>";
	
	
	//Battle report
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[0].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[playerID].name + "<br><br>";

	document.getElementById('console').value += "Attacker sent:<br>";
	document.getElementById('console').value += "Axes: " + ID[0].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[0].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[0].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[0].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[playerID].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[playerID].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[playerID].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[playerID].cavalry + "<br><br>";
	
	

	var totalLoot = 0;
	
	
	if(DefenderSurvival < 0){
		ID[playerID].axes = 0;
		ID[playerID].swords = 0;
		ID[playerID].archers = 0;
		ID[playerID].cavalry = 0;
	}
	else {
		ID[playerID].axes = Math.round(ID[playerID].axes * DefenderSurvival);
		ID[playerID].swords = Math.round(ID[playerID].swords * DefenderSurvival);
		ID[playerID].archers = Math.round(ID[playerID].archers* DefenderSurvival);
		ID[playerID].cavalry = Math.round(ID[playerID].cavalry * DefenderSurvival);
	}
	
	if(AttackerSurvival < 0){
		ID[0].axes = 0;
		ID[0].swords = 0;
		ID[0].archers = 0;
		ID[0].cavalry = 0;
	}
	else {
		ID[0].axes = Math.round(ID[0].axes* AttackerSurvival);
		ID[0].swords = Math.round(ID[0].swords * AttackerSurvival);
		ID[0].archers = Math.round(ID[0].archers* AttackerSurvival);
		ID[0].cavalry = Math.round(ID[0].cavalry * AttackerSurvival);
		
		
		var looters = ID[0].axes + ID[0].swords + ID[0].archers + ID[0].cavalry;
		var carryCapacity = Math.floor(looters * 1.2);
		var maxLoot = ID[playerID].gold
		
		if(ID[playerID].gold <= 0){
			totalLoot = 0;
		}
		
		else if (carryCapacity >=  maxLoot){
			totalLoot = maxLoot;
			ID[playerID].gold = ID[playerID].gold - totalLoot;
			ID[0].gold = ID[0].gold  + totalLoot;	
		}
		else{
			totalLoot = carryCapacity;
			ID[playerID].gold = ID[playerID].gold - totalLoot;
			ID[0].gold = ID[0].gold  + totalLoot;
			
		}
		
	}
	
	
	document.getElementById('console').value += "________________<br>";
	document.getElementById('console').value += "Remaining:<br>";
	document.getElementById('console').value += "________________<br><br>";
	
	document.getElementById('console').value += "Attacker:<br>";
	document.getElementById('console').value += "Axes: " + ID[0].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[0].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[0].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[0].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[playerID].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[playerID].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[playerID].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[playerID].cavalry + "<br><br>";
	
	
	
	if(DefenderSurvival < 0){
	document.getElementById('console').value += "Winner: " + ID[0].name + "<br><br>";
	document.getElementById('console').value += "Loot: " + totalLoot;
	}
	else {
	document.getElementById('console').value += "Winner: " + ID[playerID].name + "<br><br>";
	document.getElementById('console').value += "Loot: " + totalLoot + " Gold<br>";
	}
	

	
}
	
	
//Player Recruit 
if(divs[0].innerHTML.indexOf("Axes") !== -1) {
						if(ID[x].axes_cost <= ID[x].gold){
						document.getElementById('console').value += "Build axemen<br>";
						console.log("Build axemen");
						console.log("Current axemen = " + ID[x].axes);
						var random_axes = Math.floor(Math.random()*(51-40+1)+40);
						if(random_axes + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of axemen trained = " + random_axes);
							document.getElementById('console').value += "Number of axemen trained = " + random_axes + "<br>";
							ID[x].axes = ID[x].axes + random_axes;
							console.log("Updated axemen = " + ID[x].axes);
							document.getElementById('console').value += "Updated axemen = " + ID[x].axes + "<br>";
							ID[x].gold = ID[x].gold - ID[x].axes_cost;
							
							console.log("gold decreased by = " + ID[x].axes_cost);
							console.log("current gold = " + ID[x].gold);
							
							document.getElementById('console').value += "Gold decreased by = " + ID[x].axes_cost + "<br>";
							}
							else{
							console.log("You havn't got the housing capacity"  );
							document.getElementById('console').value += "You havn't got the housing capacity, progressing to next turn<br>";
							
							}
						}
						else{
							console.log( );
							document.getElementById('console').value += "You have " + ID[x].gold + "g you can't afford these units, progressing to next turn<br>" 
							
						}



}

if(divs[0].innerHTML.indexOf("Swords") !== -1) {
						if(ID[x].swords_cost <= ID[x].gold){
						console.log("Build swordsmen");
						document.getElementById('console').value += "Build swordsmen<br>"
						console.log("Current swordsmen = " + ID[x].swords);
						document.getElementById('console').value += "Current swordsmen = " + ID[x].swords + "<br>"
						var random_swords = Math.floor(Math.random()*(51-40+1)+40);
						if(random_swords + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of swordsmen trained = " + random_swords);
							document.getElementById('console').value += "Number of swordsmen trained = " + random_swords + "<br>";
							ID[x].swords = ID[x].swords + random_swords;
							console.log("Updated swordsmen = " + ID[x].swords);
							document.getElementById('console').value += "Updated swordsmen = " + ID[x].swords + "<br>";
							ID[x].gold = ID[x].gold - ID[x].swords_cost;
							console.log("gold decreased by = " + ID[x].swords_cost)
							console.log("current gold = " + ID[x].gold)
							document.getElementById('console').value += "Gold decreased by = " + ID[x].swords_cost + "<br>";
							}
							else{
							console.log("You havn't got the housing capacity"  );
							document.getElementById('console').value += "You havn't got the housing capacity, progressing to next turn<br>";
							}
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford troops"  );
							document.getElementById('console').value += "You have " + ID[x].gold + "g you can't afford these units, progressing to next turn<br>" 
						}
}



if(divs[0].innerHTML.indexOf("Archers") !== -1) {
						if(ID[x].archers_cost <= ID[x].gold){
						console.log("Build Archers");
						document.getElementById('console').value += "Build archers<br>"
						console.log("Current Archers = " + ID[x].archers);
						document.getElementById('console').value += "Current archers = " + ID[x].archers + "<br>"
						var random_archers = Math.floor(Math.random()*(51-40+1)+40);
						if(random_archers + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of Archers trained = " + random_archers);
							document.getElementById('console').value += "Number of archers trained = " + random_archers + "<br>";
							ID[x].archers = ID[x].archers + random_archers;
							console.log("Updated Archers = " + ID[x].archers);
							document.getElementById('console').value += "Updated archers = " + ID[x].archers + "<br>";
							ID[x].gold = ID[x].gold - ID[x].archers_cost;
							console.log("gold decreased by = " + ID[x].archers_cost)
							document.getElementById('console').value += "Gold decreased by = " + ID[x].archers_cost + "<br>";
							console.log("current gold = " + ID[x].gold)
							
							}
							else{
							console.log("You havn't got the housing capacity"  );
							document.getElementById('console').value += "You havn't got the housing capacity, progressing to next turn<br>";
							}
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford troops"  );
							document.getElementById('console').value += "You have " + ID[x].gold + "g you can't afford these units, progressing to next turn<br>" 
							
						}


}




if(divs[0].innerHTML.indexOf("Cavalry") !== -1) {
						if(ID[x].cavalry_cost <= ID[x].gold){
						console.log("Build cavalry");
						document.getElementById('console').value += "Build cavalry<br>"
						console.log("Current cavalry = " + ID[x].cavalry);
						document.getElementById('console').value += "Current cavalry = " + ID[x].cavalry + "<br>"
						var random_cavalry = Math.floor(Math.random()*(51-40+1)+40);
						if(random_cavalry + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of cavalry trained = " + random_cavalry);
							document.getElementById('console').value += "Number of cavalry trained = " + random_cavalry + "<br>";
							ID[x].cavalry = ID[x].cavalry + random_cavalry;
							console.log("Updated cavalry = " + ID[x].cavalry);
							document.getElementById('console').value += "Updated cavalry = " + ID[x].cavalry + "<br>";
							ID[x].gold = ID[x].gold - ID[x].cavalry_cost;
							console.log("gold decreased by = " + ID[x].cavalry_cost)
							document.getElementById('console').value += "Gold decreased by = " + ID[x].cavalry_cost + "<br>";
							console.log("current gold = " + ID[x].gold)
							}
							else{
							console.log("You havn't got the housing capacity"  );
							document.getElementById('console').value += "You havn't got the housing capacity, progressing to next turn<br>";
							}
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford troops"  );
							document.getElementById('console').value += "You have " + ID[x].gold + "g you can't afford these units, progressing to next turn<br>" 
							
						}


}



if(divs[0].innerHTML.indexOf("Housing") !== -1) {
						if(ID[x].housing_cost <= ID[x].gold){
						console.log("Build housing");
						document.getElementById('console').value += "Build housing<br>";
						ID[x].housing = ID[x].housing + 1;
						console.log("New housing level = " + ID[x].housing);
						document.getElementById('console').value += "New housing level = " + ID[x].housing + "<br>";
						ID[x].gold = ID[x].gold - ID[x].housing_cost;
						console.log("gold decreased by = " + ID[x].housing_cost)
						document.getElementById('console').value += "gold decreased by = " + ID[x].housing_cost + "<br>";
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );
							document.getElementById('console').value += "You have " + ID[x].gold + "g, you can't afford housing which is " +  ID[x].housing_cost + " , progressing to next turn<BR>";
						}
}




if(divs[0].innerHTML.indexOf("Gold Mine") !== -1) {
						if(ID[x].goldmine_cost <= ID[x].gold){		
						console.log("Build goldmine");
						document.getElementById('console').value += "Build goldmine<br>";
						ID[x].goldmine = ID[x].goldmine + 1;
						console.log("New goldmine level = " + ID[x].goldmine);
						document.getElementById('console').value += "New goldmine level = " + ID[x].goldmine + "<br>";
						ID[x].gold = ID[x].gold - ID[x].goldmine_cost;
						console.log("gold decreased by = " + ID[x].goldmine_cost)
						document.getElementById('console').value += "gold decreased by = " + ID[x].goldmine_cost + "<br>";
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford goldmine which is " + ID[x].goldmine_cost  );
							document.getElementById('console').value += "You have " + ID[x].gold + "g, you can't afford goldmine which is " +  ID[x].goldmine_cost + " , progressing to next turn<BR>";
						}
}



if(divs[0].innerHTML.indexOf("Wall") !== -1) {
						if(ID[x].wall_cost <= ID[x].gold){
						console.log("Build wall");
						document.getElementById('console').value += "Build wall<br>";
						ID[x].wall = ID[x].wall + 1;
						console.log("New wall level = " + ID[x].wall);
						document.getElementById('console').value += "New wall level = " + ID[x].wall + "<br>";
						ID[x].gold = ID[x].gold - ID[x].wall_cost;
						console.log("gold decreased by = " + ID[x].wall_cost)
						document.getElementById('console').value += "gold decreased by = " + ID[x].wall_cost + "<br>";
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford wall which is " + ID[x].wall_cost );
							document.getElementById('console').value += "You have " + ID[x].gold + "g, you can't afford wall upgrade which is " +  ID[x].wall_cost + " , progressing to next turn<BR>";
						}


}



}




	

		
// AI

		if (ID[x].type == 1) {
				console.log("Name = " + ID[x].name);
				console.log("Swords = " + ID[x].swords);
				console.log("Archers = " + ID[x].archers);
				console.log("Axes = " + ID[x].axes);
				console.log("Cavalry = " + ID[x].cavalry);
				console.log("Total troops = " + ID[x].total_troops);
				console.log("Troop capacity = " + ID[x].capacity);
				console.log("Current gold = " + ID[x].gold);
				console.log("Goldmine level = " + ID[x].goldmine);
				console.log("Goldmine cost = " + ID[x].goldmine_cost);
				console.log("Current income = " + ID[x].gold_income);
				console.log("Housing level = " + ID[x].housing);
				console.log("Housing cost = " + ID[x].housing_cost);
				console.log("Wall level = " + ID[x].wall);
				console.log("Wall defence modifier = " + ID[x].wall_defence + "%");
				console.log("Wall cost = " + ID[x].wall_cost);
				console.log("Turn = " + ID[x].turn);
				//Math.floor(Math.random()*(max-min+1)+min);	
//AI Attack		
				var attackRandom = Math.floor(Math.random()*(100-0+1)+0);
				var randomPlayer =  Math.floor(Math.random()*(3-0+1)+0);
				if(attackRandom >= 0 && attackRandom <= 10){
				
	//So long as there are troops, more than turn 50 and randomPlyaer is not himself
	if (ID[x].total_troops >= 200 && randomPlayer != x && ID[x].turn >= 50){
					

	
	//Calculate attacking power
	var AttackingPower = (ID[x].axes * 10) + (ID[x].swords * 6) + (ID[x].archers * 5) + (ID[x].cavalry * 16);
	
	//Calculate opponent 
	var DefensivePower = (ID[randomPlayer].axes * 2) + (ID[randomPlayer].swords * 8) + (ID[randomPlayer].archers * 9) + (ID[randomPlayer].cavalry * 5);
	DefensivePower = DefensivePower * ID[randomPlayer].wall_defence;
	
	var totalAD = AttackingPower - DefensivePower;
	var totalDA = DefensivePower - AttackingPower;
	
	var AttackerSurvival = ((totalAD / AttackingPower).toFixed(3));
	var DefenderSurvival = ((totalDA / DefensivePower).toFixed(3));
	
	console.log("Attacker: " + ID[x].name);	
	console.log("Defender:" + ID[randomPlayer].name);
	console.log("Attacking Power: " + AttackingPower);	
	console.log("Defensive Power:" + DefensivePower);
	console.log("Total AD: " + totalAD);	
	console.log("Total DA: " + totalDA);
	console.log("AttackerSurvival: " + AttackerSurvival);	
	console.log("DefenderSurvival: " + DefenderSurvival);
	
	
	
	//Battle report
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[x].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[randomPlayer].name + "<br><br>";
	
	
	if (randomPlayer == 0){
		
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[x].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[randomPlayer].name + "<br><br>";

	document.getElementById('console').value += "Attacker sent:<br>";
	document.getElementById('console').value += "Axes: " + ID[x].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[x].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[x].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[x].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[randomPlayer].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[randomPlayer].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[randomPlayer].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[randomPlayer].cavalry + "<br><br>";
		}


	var totalLoot = 0;

	if(DefenderSurvival < 0){
		ID[randomPlayer].axes = 0;
		ID[randomPlayer].swords = 0;
		ID[randomPlayer].archers = 0;
		ID[randomPlayer].cavalry = 0;
	}
	else {
		ID[randomPlayer].axes = Math.round(ID[randomPlayer].axes * DefenderSurvival);
		ID[randomPlayer].swords = Math.round(ID[randomPlayer].swords * DefenderSurvival);
		ID[randomPlayer].archers = Math.round(ID[randomPlayer].archers* DefenderSurvival);
		ID[randomPlayer].cavalry = Math.round(ID[randomPlayer].cavalry * DefenderSurvival);
	}
	
	if(AttackerSurvival < 0){
		ID[x].axes = 0;
		ID[x].swords = 0;
		ID[x].archers = 0;
		ID[x].cavalry = 0;
	}
	else {
		ID[x].axes = Math.round(ID[x].axes* AttackerSurvival);
		ID[x].swords = Math.round(ID[x].swords * AttackerSurvival);
		ID[x].archers = Math.round(ID[x].archers* AttackerSurvival);
		ID[x].cavalry = Math.round(ID[x].cavalry * AttackerSurvival);
		
		
		var looters = ID[x].axes + ID[x].swords + ID[x].archers + ID[x].cavalry;
		var carryCapacity = Math.floor(looters * 1.2);
		var maxLoot = ID[randomPlayer].gold
		
		if(ID[randomPlayer].gold <= 0){
			totalLoot = 0;
		}
		
		else if (carryCapacity >=  maxLoot){
			totalLoot = maxLoot;
			ID[randomPlayer].gold = ID[randomPlayer].gold - totalLoot;
			ID[x].gold = ID[x].gold  + totalLoot;	
		}
		else{
			totalLoot = carryCapacity;
			ID[randomPlayer].gold = ID[randomPlayer].gold - totalLoot;
			ID[x].gold = ID[x].gold  + totalLoot;
			
		}
		
	}
	
	
	//IF it is the player that is defending show report
	if (randomPlayer == 0){

	document.getElementById('console').value += "________________<br>";
	document.getElementById('console').value += "Remaining:<br>";
	document.getElementById('console').value += "________________<br><br>";
	
	document.getElementById('console').value += "Attacker:<br>";
	document.getElementById('console').value += "Axes: " + ID[x].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[x].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[x].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[x].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[randomPlayer].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[randomPlayer].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[randomPlayer].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[randomPlayer].cavalry + "<br><br>";

	document.getElementById('console').value += "Loot: " + totalLoot + "<br>";
	}


	if(DefenderSurvival < 0){
	document.getElementById('console').value += "Winner: " + ID[x].name + "<br>";
	}
	else {
	document.getElementById('console').value += "Winner: " + ID[randomPlayer].name + "<br>";
	}
	
	}
	
	
	
					
					
				}
				else{
		
				
//AI Recruit/Build				
				var random1 = Math.floor(Math.random()*(100-0+1)+0);
				console.log("Random number = " + random1);

					////// BUILD AXEMEN
					if(random1 >= 0 && random1 <= 39){
						if(ID[x].axes_cost <= ID[x].gold){
						console.log("Build axemen");
						console.log("Current axemen = " + ID[x].axes);
						//Math.floor(Math.random()*(max-min+1)+min);
						var random_axes = Math.floor(Math.random()*(51-40+1)+40);
						if(random_axes + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of axemen trained = " + random_axes);
							ID[x].axes = ID[x].axes + random_axes;
							console.log("Updated axemen = " + ID[x].axes);
							ID[x].gold = ID[x].gold - ID[x].axes_cost;
							console.log("gold decreased by = " + ID[x].axes_cost)
							console.log("current gold = " + ID[x].gold)
							}
							else{
							console.log("You havn't got the housing capacity"  );
							console.log("Attempting to build housing instead..");
								if(ID[x].housing_cost <= ID[x].gold){
									console.log("Build housing");
									ID[x].housing = ID[x].housing + 1;
									console.log("New housing level = " + ID[x].housing);
									ID[x].gold = ID[x].gold - ID[x].housing_cost;
									console.log("gold decreased by = " + ID[x].housing_cost)
									console.log("current gold = " + ID[x].gold)
								}
								else{
									console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );
								}
							}
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford troops"  );
							
						}
						
					}
					
					
					////// BUILD HOUSING
					if(random1 >= 40 && random1 <= 65){
						console.log("Build housing");
						if(ID[x].housing_cost <= ID[x].gold){
						ID[x].housing = ID[x].housing + 1;
						console.log("New housing level = " + ID[x].housing);
						ID[x].gold = ID[x].gold - ID[x].housing_cost;
						console.log("gold decreased by = " + ID[x].housing_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );

						}
						
					
					}
					
					
					////// BUILD GOLD MINE
					if(random1 >= 66 && random1 <= 90){
						
						if(ID[x].goldmine_cost <= ID[x].gold){
						
						console.log("Build goldmine");
						ID[x].goldmine = ID[x].goldmine + 1;
						console.log("New goldmine level = " + ID[x].goldmine);
						ID[x].gold = ID[x].gold - ID[x].goldmine_cost;
						console.log("gold decreased by = " + ID[x].goldmine_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford goldmine which is " + ID[x].goldmine_cost  );

						}
						
					}
					
					
					////// BUILD WALL
					if(random1 >= 91 && random1 <= 100){
						
						if(ID[x].wall_cost <= ID[x].gold){
						
						console.log("Build wall");
						ID[x].wall = ID[x].wall + 1;
						console.log("New wall level = " + ID[x].wall);
						ID[x].gold = ID[x].gold - ID[x].wall_cost;
						console.log("gold decreased by = " + ID[x].wall_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford wall which is " + ID[x].wall_cost );

						}
						
					
					}
			
			}
		}
			
			
					
// AI 2
			if (ID[x].type == 2) {
				console.log("Name = " + ID[x].name);
				console.log("Swords = " + ID[x].swords);
				console.log("Archers = " + ID[x].archers);
				console.log("Axes = " + ID[x].axes);
				console.log("Cavalry = " + ID[x].cavalry);
				console.log("Total troops = " + ID[x].total_troops);
				console.log("Troop capacity = " + ID[x].capacity);
				console.log("Current gold = " + ID[x].gold);
				console.log("Goldmine level = " + ID[x].goldmine);
				console.log("Goldmine cost = " + ID[x].goldmine_cost);
				console.log("Current income = " + ID[x].gold_income);
				console.log("Housing level = " + ID[x].housing);
				console.log("Housing cost = " + ID[x].housing_cost);
				console.log("Wall level = " + ID[x].wall);
				console.log("Wall defence modifier = " + ID[x].wall_defence + "%");
				console.log("Wall cost = " + ID[x].wall_cost);
				//Math.floor(Math.random()*(max-min+1)+min);
//AI 2 Attack		
				var attackRandom = Math.floor(Math.random()*(100-0+1)+0);
				var randomPlayer =  Math.floor(Math.random()*(3-0+1)+0);
				if(attackRandom >= 0 && attackRandom <= 5){
				
	//So long as there are troops, more than turn 50 and randomPlyaer is not himself
	if (ID[x].total_troops >= 200 && randomPlayer != x && ID[x].turn >= 50){
					

	
	//Calculate attacking power
	var AttackingPower = (ID[x].axes * 10) + (ID[x].swords * 6) + (ID[x].archers * 5) + (ID[x].cavalry * 16);
	
	//Calculate opponent 
	var DefensivePower = (ID[randomPlayer].axes * 2) + (ID[randomPlayer].swords * 8) + (ID[randomPlayer].archers * 9) + (ID[randomPlayer].cavalry * 5);
	DefensivePower = DefensivePower * ID[randomPlayer].wall_defence;
	
	var totalAD = AttackingPower - DefensivePower;
	var totalDA = DefensivePower - AttackingPower;
	
	var AttackerSurvival = ((totalAD / AttackingPower).toFixed(3));
	var DefenderSurvival = ((totalDA / DefensivePower).toFixed(3));
	
	console.log("Attacker: " + ID[x].name);	
	console.log("Defender:" + ID[randomPlayer].name);
	console.log("Attacking Power: " + AttackingPower);	
	console.log("Defensive Power:" + DefensivePower);
	console.log("Total AD: " + totalAD);	
	console.log("Total DA: " + totalDA);
	console.log("AttackerSurvival: " + AttackerSurvival);	
	console.log("DefenderSurvival: " + DefenderSurvival);
	
	
	
	//Battle report
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[x].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[randomPlayer].name + "<br><br>";
	
	
	if (randomPlayer == 0){
		
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[x].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[randomPlayer].name + "<br><br>";

	document.getElementById('console').value += "Attacker sent:<br>";
	document.getElementById('console').value += "Axes: " + ID[x].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[x].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[x].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[x].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[randomPlayer].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[randomPlayer].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[randomPlayer].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[randomPlayer].cavalry + "<br><br>";
		}


	var totalLoot = 0;

	if(DefenderSurvival < 0){
		ID[randomPlayer].axes = 0;
		ID[randomPlayer].swords = 0;
		ID[randomPlayer].archers = 0;
		ID[randomPlayer].cavalry = 0;
	}
	else {
		ID[randomPlayer].axes = Math.round(ID[randomPlayer].axes * DefenderSurvival);
		ID[randomPlayer].swords = Math.round(ID[randomPlayer].swords * DefenderSurvival);
		ID[randomPlayer].archers = Math.round(ID[randomPlayer].archers* DefenderSurvival);
		ID[randomPlayer].cavalry = Math.round(ID[randomPlayer].cavalry * DefenderSurvival);
	}
	
	if(AttackerSurvival < 0){
		ID[x].axes = 0;
		ID[x].swords = 0;
		ID[x].archers = 0;
		ID[x].cavalry = 0;
	}
	else {
		ID[x].axes = Math.round(ID[x].axes* AttackerSurvival);
		ID[x].swords = Math.round(ID[x].swords * AttackerSurvival);
		ID[x].archers = Math.round(ID[x].archers* AttackerSurvival);
		ID[x].cavalry = Math.round(ID[x].cavalry * AttackerSurvival);
		
		
		var looters = ID[x].axes + ID[x].swords + ID[x].archers + ID[x].cavalry;
		var carryCapacity = Math.floor(looters * 1.2);
		var maxLoot = ID[randomPlayer].gold
		
		if(ID[randomPlayer].gold <= 0){
			totalLoot = 0;
		}
		
		else if (carryCapacity >=  maxLoot){
			totalLoot = maxLoot;
			ID[randomPlayer].gold = ID[randomPlayer].gold - totalLoot;
			ID[x].gold = ID[x].gold  + totalLoot;	
		}
		else{
			totalLoot = carryCapacity;
			ID[randomPlayer].gold = ID[randomPlayer].gold - totalLoot;
			ID[x].gold = ID[x].gold  + totalLoot;
			
		}
		
	}
	
	
	//IF it is the player that is defending show report
	if (randomPlayer == 0){

	document.getElementById('console').value += "________________<br>";
	document.getElementById('console').value += "Remaining:<br>";
	document.getElementById('console').value += "________________<br><br>";
	
	document.getElementById('console').value += "Attacker:<br>";
	document.getElementById('console').value += "Axes: " + ID[x].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[x].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[x].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[x].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[randomPlayer].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[randomPlayer].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[randomPlayer].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[randomPlayer].cavalry + "<br><br>";

	document.getElementById('console').value += "Loot: " + totalLoot + "<br>";
	}


	if(DefenderSurvival < 0){
	document.getElementById('console').value += "Winner: " + ID[x].name + "<br>";
	}
	else {
	document.getElementById('console').value += "Winner: " + ID[randomPlayer].name + "<br>";
	}
	
	}
	
	
	
					
					
				}
				else{
		
				
				var random1 = Math.floor(Math.random()*(100-0+1)+0);
				console.log("Random number = " + random1);

					////// BUILD swords
					if(random1 >= 0 && random1 <= 24){
						if(ID[x].swords_cost <= ID[x].gold){
						console.log("Build swords");
						console.log("Current swords = " + ID[x].swords);
						//Math.floor(Math.random()*(max-min+1)+min);
						var random_swords = Math.floor(Math.random()*(51-40+1)+40);
						if(random_swords + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of swords trained = " + random_swords);
							ID[x].swords = ID[x].swords + random_swords;
							console.log("Updated swords = " + ID[x].swords);
							ID[x].gold = ID[x].gold - ID[x].swords_cost;
							console.log("gold decreased by = " + ID[x].swords_cost)
							console.log("current gold = " + ID[x].gold)
							}
							else{
							console.log("You havn't got the housing capacity"  );
							console.log("Attempting to build housing instead..");
								if(ID[x].housing_cost <= ID[x].gold){
									console.log("Build housing");
									ID[x].housing = ID[x].housing + 1;
									console.log("New housing level = " + ID[x].housing);
									ID[x].gold = ID[x].gold - ID[x].housing_cost;
									console.log("gold decreased by = " + ID[x].housing_cost)
									console.log("current gold = " + ID[x].gold)
								}
								else{
									console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );
								}
							}
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford troops"  );
							
						}
						
					}
					
					
					////// BUILD HOUSING
					if(random1 >= 25 && random1 <= 49){
						console.log("Build housing");
						if(ID[x].housing_cost <= ID[x].gold){
						ID[x].housing = ID[x].housing + 1;
						console.log("New housing level = " + ID[x].housing);
						ID[x].gold = ID[x].gold - ID[x].housing_cost;
						console.log("gold decreased by = " + ID[x].housing_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );

						}
						
					
					}
					
					
					////// BUILD GOLD MINE
					if(random1 >= 50 && random1 <= 74){
						
						if(ID[x].goldmine_cost <= ID[x].gold){
						
						console.log("Build goldmine");
						ID[x].goldmine = ID[x].goldmine + 1;
						console.log("New goldmine level = " + ID[x].goldmine);
						ID[x].gold = ID[x].gold - ID[x].goldmine_cost;
						console.log("gold decreased by = " + ID[x].goldmine_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford goldmine which is " + ID[x].goldmine_cost  );

						}
						
					}
					
					
					////// BUILD WALL
					if(random1 >= 75 && random1 <= 100){
						
						if(ID[x].wall_cost <= ID[x].gold){
						
						console.log("Build wall");
						ID[x].wall = ID[x].wall + 1;
						console.log("New wall level = " + ID[x].wall);
						ID[x].gold = ID[x].gold - ID[x].wall_cost;
						console.log("gold decreased by = " + ID[x].wall_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford wall which is " + ID[x].wall_cost );

						}
						
					
					}
				}
			
			}
		
		
		
		
		
		
		
		
		
			
// AI 3
			if (ID[x].type == 3) {
				console.log("Name = " + ID[x].name);
				console.log("Swords = " + ID[x].swords);
				console.log("Archers = " + ID[x].archers);
				console.log("Axes = " + ID[x].axes);
				console.log("Cavalry = " + ID[x].cavalry);
				console.log("Total troops = " + ID[x].total_troops);
				console.log("Troop capacity = " + ID[x].capacity);
				console.log("Current gold = " + ID[x].gold);
				console.log("Goldmine level = " + ID[x].goldmine);
				console.log("Goldmine cost = " + ID[x].goldmine_cost);
				console.log("Current income = " + ID[x].gold_income);
				console.log("Housing level = " + ID[x].housing);
				console.log("Housing cost = " + ID[x].housing_cost);
				console.log("Wall level = " + ID[x].wall);
				console.log("Wall defence modifier = " + ID[x].wall_defence + "%");
				console.log("Wall cost = " + ID[x].wall_cost);
				
//AI 3 Attack		
				var attackRandom = Math.floor(Math.random()*(100-0+1)+0);
				var randomPlayer =  Math.floor(Math.random()*(3-0+1)+0);
				if(attackRandom >= 0 && attackRandom <= 2){
				
	//So long as there are troops, more than turn 50 and randomPlyaer is not himself
	if (ID[x].total_troops >= 200 && randomPlayer != x && ID[x].turn >= 50){
					

	
	//Calculate attacking power
	var AttackingPower = (ID[x].axes * 10) + (ID[x].swords * 6) + (ID[x].archers * 5) + (ID[x].cavalry * 16);
	
	//Calculate opponent 
	var DefensivePower = (ID[randomPlayer].axes * 2) + (ID[randomPlayer].swords * 8) + (ID[randomPlayer].archers * 9) + (ID[randomPlayer].cavalry * 5);
	DefensivePower = DefensivePower * ID[randomPlayer].wall_defence;
	
	var totalAD = AttackingPower - DefensivePower;
	var totalDA = DefensivePower - AttackingPower;
	
	var AttackerSurvival = ((totalAD / AttackingPower).toFixed(3));
	var DefenderSurvival = ((totalDA / DefensivePower).toFixed(3));
	
	console.log("Attacker: " + ID[x].name);	
	console.log("Defender:" + ID[randomPlayer].name);
	console.log("Attacking Power: " + AttackingPower);	
	console.log("Defensive Power:" + DefensivePower);
	console.log("Total AD: " + totalAD);	
	console.log("Total DA: " + totalDA);
	console.log("AttackerSurvival: " + AttackerSurvival);	
	console.log("DefenderSurvival: " + DefenderSurvival);
	
	
	
	//Battle report
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[x].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[randomPlayer].name + "<br><br>";
	
	
	if (randomPlayer == 0){
		
	document.getElementById('console').value += "<br>________________<br>";
	document.getElementById('console').value += "<b>Battle report:</b><br>";
	document.getElementById('console').value += "________________<br><br>";
	document.getElementById('console').value += "Attacker: " + ID[x].name + "<br>";
	document.getElementById('console').value += "Defender: " + ID[randomPlayer].name + "<br><br>";

	document.getElementById('console').value += "Attacker sent:<br>";
	document.getElementById('console').value += "Axes: " + ID[x].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[x].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[x].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[x].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[randomPlayer].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[randomPlayer].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[randomPlayer].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[randomPlayer].cavalry + "<br><br>";
		}


	var totalLoot = 0;

	if(DefenderSurvival < 0){
		ID[randomPlayer].axes = 0;
		ID[randomPlayer].swords = 0;
		ID[randomPlayer].archers = 0;
		ID[randomPlayer].cavalry = 0;
	}
	else {
		ID[randomPlayer].axes = Math.round(ID[randomPlayer].axes * DefenderSurvival);
		ID[randomPlayer].swords = Math.round(ID[randomPlayer].swords * DefenderSurvival);
		ID[randomPlayer].archers = Math.round(ID[randomPlayer].archers* DefenderSurvival);
		ID[randomPlayer].cavalry = Math.round(ID[randomPlayer].cavalry * DefenderSurvival);
	}
	
	if(AttackerSurvival < 0){
		ID[x].axes = 0;
		ID[x].swords = 0;
		ID[x].archers = 0;
		ID[x].cavalry = 0;
	}
	else {
		ID[x].axes = Math.round(ID[x].axes* AttackerSurvival);
		ID[x].swords = Math.round(ID[x].swords * AttackerSurvival);
		ID[x].archers = Math.round(ID[x].archers* AttackerSurvival);
		ID[x].cavalry = Math.round(ID[x].cavalry * AttackerSurvival);
		
		
		var looters = ID[x].axes + ID[x].swords + ID[x].archers + ID[x].cavalry;
		var carryCapacity = Math.floor(looters * 1.2);
		var maxLoot = ID[randomPlayer].gold
		
		if(ID[randomPlayer].gold <= 0){
			totalLoot = 0;
		}
		
		else if (carryCapacity >=  maxLoot){
			totalLoot = maxLoot;
			ID[randomPlayer].gold = ID[randomPlayer].gold - totalLoot;
			ID[x].gold = ID[x].gold  + totalLoot;	
		}
		else{
			totalLoot = carryCapacity;
			ID[randomPlayer].gold = ID[randomPlayer].gold - totalLoot;
			ID[x].gold = ID[x].gold  + totalLoot;
			
		}
		
	}
	
	
	//IF it is the player that is defending show report
	if (randomPlayer == 0){

	document.getElementById('console').value += "________________<br>";
	document.getElementById('console').value += "Remaining:<br>";
	document.getElementById('console').value += "________________<br><br>";
	
	document.getElementById('console').value += "Attacker:<br>";
	document.getElementById('console').value += "Axes: " + ID[x].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[x].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[x].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[x].cavalry + "<br><br>";
	
	document.getElementById('console').value += "Defender:<br>";
	document.getElementById('console').value += "Axes: " + ID[randomPlayer].axes + "<br>";
	document.getElementById('console').value += "Swords: " + ID[randomPlayer].swords + "<br>";
	document.getElementById('console').value += "Archers: " + ID[randomPlayer].archers + "<br>";
	document.getElementById('console').value += "Cavalry: " + ID[randomPlayer].cavalry + "<br><br>";

	document.getElementById('console').value += "Loot: " + totalLoot + "<br>";
	}


	if(DefenderSurvival < 0){
	document.getElementById('console').value += "Winner: " + ID[x].name + "<br>";
	}
	else {
	document.getElementById('console').value += "Winner: " + ID[randomPlayer].name + "<br>";
	}
	
	}
	
	
	
					
					
				}
				else{
		
		
		
				//Math.floor(Math.random()*(max-min+1)+min);
				var random1 = Math.floor(Math.random()*(100-0+1)+0);
				console.log("Random number = " + random1);

					////// BUILD swords
					if(random1 >= 0 && random1 <= 19){
						if(ID[x].swords_cost <= ID[x].gold){
						console.log("Build swords");
						console.log("Current swords = " + ID[x].swords);
						//Math.floor(Math.random()*(max-min+1)+min);
						var random_swords = Math.floor(Math.random()*(51-40+1)+40);
						if(random_swords + ID[x].total_troops <= ID[x].capacity){
							console.log("Number of swords trained = " + random_swords);
							ID[x].swords = ID[x].swords + random_swords;
							console.log("Updated swords = " + ID[x].swords);
							ID[x].gold = ID[x].gold - ID[x].swords_cost;
							console.log("gold decreased by = " + ID[x].swords_cost)
							console.log("current gold = " + ID[x].gold)
							}
							else{
							console.log("You havn't got the housing capacity"  );
							console.log("Attempting to build housing instead..");
								if(ID[x].housing_cost <= ID[x].gold){
									console.log("Build housing");
									ID[x].housing = ID[x].housing + 1;
									console.log("New housing level = " + ID[x].housing);
									ID[x].gold = ID[x].gold - ID[x].housing_cost;
									console.log("gold decreased by = " + ID[x].housing_cost)
									console.log("current gold = " + ID[x].gold)
								}
								else{
									console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );
								}
							}
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford troops"  );
							
						}
						
					}
					
					
					////// BUILD HOUSING
					if(random1 >= 20 && random1 <= 34){
						console.log("Build housing");
						if(ID[x].housing_cost <= ID[x].gold){
						ID[x].housing = ID[x].housing + 1;
						console.log("New housing level = " + ID[x].housing);
						ID[x].gold = ID[x].gold - ID[x].housing_cost;
						console.log("gold decreased by = " + ID[x].housing_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford housing which is " +  ID[x].housing_cost  );

						}
						
					
					}
					
					
					////// BUILD GOLD MINE
					if(random1 >= 35 && random1 <= 59){
						
						if(ID[x].goldmine_cost <= ID[x].gold){
						
						console.log("Build goldmine");
						ID[x].goldmine = ID[x].goldmine + 1;
						console.log("New goldmine level = " + ID[x].goldmine);
						ID[x].gold = ID[x].gold - ID[x].goldmine_cost;
						console.log("gold decreased by = " + ID[x].goldmine_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford goldmine which is " + ID[x].goldmine_cost  );

						}
						
					}
					
					
					////// BUILD WALL
					if(random1 >= 60 && random1 <= 100){
						
						if(ID[x].wall_cost <= ID[x].gold){
						
						console.log("Build wall");
						ID[x].wall = ID[x].wall + 1;
						console.log("New wall level = " + ID[x].wall);
						ID[x].gold = ID[x].gold - ID[x].wall_cost;
						console.log("gold decreased by = " + ID[x].wall_cost)
						console.log("current gold = " + ID[x].gold)
						}
						else{
							console.log("You have " + ID[x].gold + "g you can't afford wall which is " + ID[x].wall_cost );

						}
						
					
					}
			
			 }
			}
		

			console.log("---------------------------------");	
			
			
			
		// Calculate costing (level 1 = 100)
		ID[x].housing_cost = ID[x].housing * 100;
		ID[x].goldmine_cost = ID[x].goldmine * 100;
		ID[x].wall_cost = ID[x].wall * 100;
		
		
		// Calculate total troops, gold, gold income, capacity, wall defence, 
		ID[x].gold_income = ID[x].goldmine * 25;
		ID[x].gold = (ID[x].gold + (ID[x].goldmine * 25));
		ID[x].capacity = ID[x].housing * 50;
		ID[x].total_troops = ID[x].swords + ID[x].archers + ID[x].axes + ID[x].cavalry;
		ID[x].wall_defence = ID[x].wall / 100+1;
		ID[x].turn = ID[x].turn + 1;
		
		
			x++;
			
			
			
			
			

				
}
				response = JSON.stringify([json]);
				response = response.substring(0, response.length - 1);
				response = response.substring(1, response.length);
				document.getElementById('update').value = response;
				
				if (CantConfirm == 0){
				document.getElementsByClassName('PlayerChoice')[0].innerHTML += "<br>Action Confirmed!<br><br>";
				}
				


				
				
				//location.reload(true);
					



		

}


function MapClick(id, playerID){

var own = 11;
var own1 = own.toString().substr(0, 1);
var own2 = own.toString().substr(1, 1);
var id1 = id.toString().substr(0, 1);
var id2 = id.toString().substr(1, 1);

var json = JSON.parse(xhr.response);
var AI = json.AI;
var ID = AI.ID;


var distance = Math.round((Math.pow(own1-id1,2)+Math.pow(id2-own2,2))/10);
document.getElementById('AttackButton').style.visibility = 'visible';


document.getElementsByClassName('PlayerChoice')[0].innerHTML = "<B>Attacking</B><BR> Player ID: " + playerID + "<BR>" + " Player Name: " + ID[playerID].name + " " + "<BR>" + "Attack will arrive in: " + distance + " turns";

if (distance == 0){
	alert("You can't attack yourself!");
	Reset();
}



}

