function game() { /* alle Funktionen von game() werden bei dessen aufruf durchlaufen */
    let container = document.getElementById("game");
    let output = container.querySelector("#output");
    let btnRocks = container.querySelector("#rock");
    let btnPaper = container.querySelector("#paper");
    let btnScissors = container.querySelector("#scissors");

	let roundCountInput = 10;
    let roundCount = playerCount;  /* verwendung funktioniert nicht, weil auf wert nicht zugegriffen werden kann */
    let currentRound = 1;
    let currentWins = 0;
	let currentLoses = 0;
	let currentUndecided = 0;								/* selbst hinzugefügt */
    let aiOptions = ["rock", "paper", "scissors"];
    let currentAiOption;									/* unbenutzt */
    let currentPlayerOption;
    let waitForInput = false;

    function startGame() {				/* Wird aufgerufen */
        currentRound = 1;
        addLine("--------------------------------------------");
        addLine("Neues Spiel gestartet");
        addLine("--------------------------------------------");
        runRound();
    }

    function runRound() {		/* aufgerugen durch function startGame() */ 
        addLine("Runde " + currentRound + " von " + roundCount + " - Wähle deine Option"); /* ausgabe von  Runde x von y - wähle deine Option*/
        waitForInput = true;
    }

    function addLine(msg) {
        output.innerHTML += msg + "<br />";
    }
	
	function clearLine() {
		output.innerHTML = "";
		addLine("--------------------------------------------");
        addLine("Neues Spiel gestartet");
        addLine("--------------------------------------------");
	}

    function scoreMove() {  /* Funktion prüft Spieler eingabe gegen noch zu generierenden Wert */
	console.log(roundCount, currentRound);
		if (roundCount != currentRound)			/* stellt sicher dass Ablauf nicht zu oft durchgeführt wird */
		{ 
		let RandomComputerOption = aiOptions[Math.floor(Math.random() * aiOptions.length)];
		if (RandomComputerOption == "rock") 
		{
			if (currentPlayerOption == "rock") { currentUndecided++; }
			if (currentPlayerOption == "scissors") { currentLoses++; }
			if (currentPlayerOption == "paper") { currentWins++; }
		}
		if (RandomComputerOption == "paper") 
		{
			if (currentPlayerOption == "rock") { currentLoses++; }
			if (currentPlayerOption == "scissors") { currentWins++; }
			if (currentPlayerOption == "paper") { currentUndecided++; }
		}
		if (RandomComputerOption == "scissors") 
		{
			if (currentPlayerOption == "rock") { currentWins++; }
			if (currentPlayerOption == "scissors") { currentUndecided++; }
			if (currentPlayerOption == "paper") { currentLoses++; }
		}
		currentRound++;				/* Rundenanzahl wird hochgezählt */
		clearLine();
		runRound();
		}
		if (roundCount <= currentRound)
		{
			alert("Spielabbruch");
			Gameover();
		}
		
		
		
		
		

    }
	
	function Gameover() 
	{ 
		/* output.classList.add("hidden"); */
		h1.classList.add("hidden");
		rock.classList.add("hidden");
		paper.classList.add("hidden");
		scissors.classList.add("hidden");
		output.innerHTML = "";
		if (currentWins == currentLoses) {addLine("Es ist Unentschieden!");}
		else if (currentWins > currentLoses) {addLine("Du hast Gewonnen!");}
		else if (currentWins < currentLoses) {addLine("Du hast Verloren!");}
		addLine("Statistik:");
		/* addLine("Spielername:	" + playerName); */ /* verwendung funktioniert nicht, weil nicht darauf zugegriffen werden kann */
		addLine("Durchgänge:	" + roundCount);
		addLine("Gewonnen:	" + currentWins);
		addLine("Verloren:	" + currentLoses);
		addLine("Unentschieden:	" + currentUndecided);
		
	}

    function processInput(value) {
        console.log("clicked on ", value, waitForInput);
        if (waitForInput) {
            currentPlayerOption = value; /* enthält nach Durchlauf User Eingabe */
            waitForInput = false;
            scoreMove();
        }
    }

    btnPaper.addEventListener('click', function(e) {
        processInput("paper");
    });
    btnRocks.addEventListener('click', function(e) {
        processInput("rock");
    });
    btnScissors.addEventListener('click', function(e) {
        processInput("scissors");
    });

    return {
        start: function() {
            startGame();
        }
    }
}