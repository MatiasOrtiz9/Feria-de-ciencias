const Questions = [{
	q: "¿Cual fue su peso?",
	a: [{ text: "5 toneladas", isCorrect: false },
	{ text: "6 toneladas", isCorrect: false },
	{ text: "8 toneladas", isCorrect: true },
	{ text: "12 toneladas", isCorrect: false }
	]

},
{
	q: "¿Cual fue su habitad?",
	a: [{ text: "Humedal", isCorrect: false, isSelected: false },
	{ text: "Selva", isCorrect: false },
	{ text: "Desierto", isCorrect: false },
	{ text: "Bosque", isCorrect: true }
	]
},
{
	q: "¿En que año fue descubierto?",
	a: [{ text: "1973", isCorrect: false },
	{ text: "1992", isCorrect: true },
	{ text: "2005", isCorrect: false },
	{ text: "2002", isCorrect: false }
	]

},
{
	q: "¿Cual fue su altura?",
	a: [{ text: "3-5 metros aprox.", isCorrect: false },
	{ text: "6-9 metros", isCorrect: false },
	{ text: "8 metros", isCorrect: false },
	{ text: "7 metros aprox.", isCorrect: true }
	]	
},
{
	q: "¿A finales de que año vivio?",
	a: [{ text: "78 millones de años", isCorrect: false },
	{ text: "92 milones de años", isCorrect: false },
	{ text: "85 millones de años", isCorrect: true },
	{ text: "95 millones de años", isCorrect: false }
	]	
},
{
	q: "¿Donde se encontraron los restos?",
	a: [{ text: "Rio colorado, Neuquen", isCorrect: true },
	{ text: "Lago Lácar, Neuquen", isCorrect: false },
	{ text: "Bariloche, Rio Negro", isCorrect: false },
	{ text: "Tucuman", isCorrect: false }
	]	
},

]

let currQuestion = 0
let score = 0

function loadQues() {

	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

    const button = document.createElement("button");
    button.innerText = "Volver";
    button.addEventListener("click", function () {
        window.location.href = "/informacion";
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.style.textAlign = "center";
    buttonContainer.appendChild(button);

    totalScore.appendChild(buttonContainer);
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}