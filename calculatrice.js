let display = document.getElementById('display');
let historyTable = document.getElementById('history');
let history = [];
let currentCalculation = '';
let currentResult = '';

function addToDisplay(value) {
    currentCalculation += value;
    display.value = currentCalculation;
}

function calculate() {
    currentResult = eval(currentCalculation);
    display.value = currentResult;
    currentCalculation = '';
    history.push([currentCalculation, currentResult]);
	historyTable.innerHTML += '<tr><td>' + currentCalculation + '</td><td>' + currentResult + '</td></tr>';
	currentCalculation = '';
}

function clearDisplay() {
    alert('Fonctionnalité en cours de développement !');
}

function undo() {
    alert('Fonctionnalité en cours de développement !');
}

function exportHistory() {
    alert('Fonctionnalité en cours de développement !');
}