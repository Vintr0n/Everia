<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="script\script.js"></script>
<link rel="stylesheet" type="text/css" href="script\style.css">
</head>



<body>



<div class="menu">



<div class="Costs">

</div>

<div class="ButtonContainer">
<br>
<button id="Button" value="Axes" onclick="PlayerChoiceFunction(this)"><img src="images\axe.png">Axemen</button>
<button id="Button" value="Swords" onclick="PlayerChoiceFunction(this)"><img src="images\sword.png">Swords</button>
<button id="Button" value="Archers" onclick="PlayerChoiceFunction(this)"><img src="images\archer.png">Archers</button>
<button id="Button" value="Cavalry" onclick="PlayerChoiceFunction(this)"><img src="images\cavalry.png">Cavalry</button>
<br>
<br>
<button id="Button" value="Housing" onclick="PlayerChoiceFunction(this)"><img src="images\housing.png">Housing</button>
<button id="Button" value="Gold Mine" onclick="PlayerChoiceFunction(this)"><img src="images\goldmine.png">Gold Mine</button>
<button id="Button" value="Wall" onclick="PlayerChoiceFunction(this)"><img src="images\wall.png">Wall</button>
<button id="Button" value="Barracks" onclick="PlayerChoiceFunction(this)"><img src="images\barracks.png">Barracks</button>
<br>
<br>
</div>

<div class="Action">
Action:


<div class="PlayerChoice">
<br>
<br>
</div>
</div>



<br>

<div class="ActionButtons">
<button id="Button" value="Reset" onclick="Reset()"><img src="images\reset.png">Reset</button>
<button id="Button" value="Confirm" onclick="Update();"><img src="images\next.png">Confirm</button>
<br>
<br>
<form action ="" method ="POST">
<button id="Button" class="EndTurn" value="EndTurn" onclick="isActionConfirmed();"><img src="images\next.png">End Turn</button>
<button id="AttackButton" value="Attack" onclick="isActionConfirmed();"><img src="images\attack.png">Attack</button>
<!--input type="submit" id="Button" value="Post Update" onclick="PostUpdate()"; /-->  
<!--button id="Button" value="Post Update" onclick="PostUpdate();">Post</button> -->
<input type="hidden" name="PostUpdate" id="update" size="50"/>
<input type="hidden" name="ConsoleUpdate" id="console" size="50"/>
</form>
<br>
</div>

<?php



if (isset($_POST['PostUpdate']) && $_POST['PostUpdate'] != "" ) {
	file_put_contents('ai.json', $_REQUEST['PostUpdate']);
	
	
	
$a=@$_REQUEST["ConsoleUpdate"];
$myfile = fopen("console.txt", "r+"); 
$current = fread($myfile, filesize("console.txt")); 
rewind($myfile); 
fwrite($myfile, $a.$current); 
rewind($myfile); 
fclose($myfile); 

}

?>
</div>

<div class="bar">

</div>


<div class="console">
<b>Console:</b><br><br>
</div>

</div>

<table class="grid" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td onclick="MapClick(this.id, '0');" id="11"><img class="tile" src="images\village.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="12"><img class="tile" src="images\forest1.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="13"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="14"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="15"><img class="tile" src="images\lake.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="16"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="17"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="18"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="19"><img class="tile" src="images\forest2.png" class="tiles"></td>
</tr>
<tr>
<td onclick="MapClick(this.id);" id="21"><img class="tile" src="images\forest2.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="22"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="23"><img class="tile" src="images\forest1.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="24"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="25"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="26"><img class="tile" src="images\texture.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="27"><img class="tile" src="images\lake.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="28"><img class="tile" src="images\forest2.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="28"><img class="tile" src="images\texture.png" class="tiles"></td>
</tr>
<tr>
<td onclick="MapClick(this.id);" id="31"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="32"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="33"><img class="tile" src="images\lake.png"></td>
<td onclick="MapClick(this.id);" id="34"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="35"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="36"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="37"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="38"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="39"><img class="tile" src="images\texture.png"></td>
</tr>
<tr>
<td onclick="MapClick(this.id);" id="41"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="42"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="43"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="44"><img class="tile" src="images\forest2.png"></td>
<td onclick="MapClick(this.id);" id="45"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="46"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="47"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id, '1');" id="48"><img class="tile" src="images\village.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="49"><img class="tile" src="images\forest2.png"></td>
</tr>
<tr>
<td onclick="MapClick(this.id);" id="51"><img class="tile" src="images\forest2.png"></td>
<td onclick="MapClick(this.id);" id="52"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="53"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="54"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="55"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="56"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="57"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="58"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="59"><img class="tile" src="images\texture.png"></td>
</tr>
<tr>
<td onclick="MapClick(this.id);" id="61"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="62"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="63"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="64"><img class="tile" src="images\forest2.png"></td>
<td onclick="MapClick(this.id);" id="65"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="66"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="67"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="68"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="69"><img class="tile" src="images\texture.png"></td>
</tr>
<tr>
<td><img class="tile" src="images\texture.png"></td>
<td><img class="tile" src="images\texture.png"></td>
<td><img class="tile" src="images\lake.png"></td>
<td onclick="MapClick(this.id, '2');" id="74"><img class="tile" src="images\village.png" class="tiles"></td>
<td><img class="tile" src="images\texture.png"></td>
<td><img class="tile" src="images\forest2.png"></td>
<td><img class="tile" src="images\texture.png"></td>
<td><img class="tile" src="images\texture.png"></td>
<td><img class="tile" src="images\lake.png"></td>
</tr>
<tr>
<td onclick="MapClick(this.id);" id="81"><img class="tile" src="images\forest2.png"></td>
<td onclick="MapClick(this.id);" id="82"><img class="tile" src="images\forest1.png"></td>
<td onclick="MapClick(this.id);" id="83"><img class="tile" src="images\forest2.png"></td>
<td onclick="MapClick(this.id);" id="84"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="85"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="86"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id);" id="87"><img class="tile" src="images\texture.png"></td>
<td onclick="MapClick(this.id, '3');" id="88"><img class="tile" src="images\village.png" class="tiles"></td>
<td onclick="MapClick(this.id);" id="89"><img class="tile" src="images\lake.png"></td>
</tr>
</tbody>
</table>
</body>
</html>
