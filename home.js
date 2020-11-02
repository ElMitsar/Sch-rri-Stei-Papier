
function home() {
    let container = document.getElementById("home");
    /* let inputField = container.querySelector("#your_name"); */
	let startButton = container.querySelector("#start_game");
	/* let inputCount = container.querySelector("#rounds"); */

    console.log(container);
    /* console.log(inputField); */
    console.log(startButton);

    startButton.addEventListener('click', function(e) {            /* startbutton wird bei klick ausgeführt, nur wenn name eingegeben reagiert if bedingung */
		/* let playerName = inputField.value; */		/* Definition für game.js nicht zugänglich */
		/* var playerCount = inputCount.value;	*/	/* Definition für game.js nicht zugänglich */

        if (playerName, playerCount) {
			if (playerCount < 1) {playerCount = 1;}
            saveScore(playerName);
            window.main.setName(playerName);
            window.main.showGame();
            window.game.start();
        }
		
		else 
		{
			alert("Um das Spiel starten zu können muss ein Spielername eingegeben werden");			<!-- Eigenergänzung -->
		}
    });
}

function saveScore(playername) {
    xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/php/save-score.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Score saved!");
        }
      };

    var score = Math.floor(10 + (Math.random() * 50));
    xhttp.send("username="+playername+"&score=" + score);
}