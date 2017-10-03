var BasicCard = require("./BasicCard.js");
var Inquirer = require("Inquirer");
var ClozeCard = function (text,cloze){
	this.text = text,
	this.cloze = cloze,
	this.partial = this.text.replace(this.cloze, ".........");
};
var flashCard = function() {
	Inquirer.prompt([{
		type: "list",
		message: "What type of flash card you want to use?",
		choices: ["Basic", "Cloze",],
		name: "userPick",
	}]).then(function (inquirerResponse){
		if (inquirerResponse.userPick === "Basic"){
			var question = new BasicCard("Who was the first president of the United States?", "George Washington");
			console.log(question.front);
			setTimeout(function(){ console.log(question.back); }, 5000);
		} 
		if (inquirerResponse.userPick === "Cloze"){
			var question = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
			console.log(question.partial);
			setTimeout(function(){ console.log(question.cloze); console.log(question.text);}, 5000);
		}
	});
};

flashCard();
