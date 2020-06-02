let guessNumber = Math.round(Math.random() * 30);
let tries = 6;


function restartMessage() {
	return "Загаданно новое число";
}

function triesMore() {
	return "Попыток осталось: " + tries;
}


function isWin(number) {
	return guessNumber === number;
}

function isLose() {
	return tries === 0;
}

function isGt(number) {
	return guessNumber > number;
}

function isLt(number) {
	return guessNumber < number;
}

// Попытки

function makeTriesLess() {
	tries--;
}

// Инициализация:

function init() {
	guessNumber = Math.round(Math.random() * 30);
	tries = 6;
}

function win() {
	init();
	return 'Правильно! ' + restartMessage();
}

function lose() {
	init();
	return 'Попытки закончились. Вы проиграли. Начнем заново ' + restartMessage();
}

function gt() {
	makeTriesLess();
	return 'Мое число больше ' + triesMore();
}

function lt() {
	makeTriesLess();
	return 'Мое число меньше ' + triesMore();	
}

function guess(number) {
	if(isLose()) {
		return lose;
	}
	if(isWin(number)) {
		return win();
	}
	if(isGt(number)) {
		return gt();
	}
	if(isLt(number)) {
		return lt();
	}
	return "ошибка";
	}

$(document).ready(function() {
 $(".btn").click(function() {
   const inputValue = $("input").val();
   const resultValue = guess(+inputValue);
   const $result = $(".result");
   $result.html(resultValue);
 });
});
