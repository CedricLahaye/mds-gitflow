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
	historyTable.innerHTML += '<tr id="test"><td>' + currentCalculation + '</td><td>' + currentResult + '</td></tr>';
	currentCalculation = '';
}

function clearAll() {
    display.value = '';
	currentCalculation = '';
	currentResult = '';
    history.forEach(() => {
        document.getElementById('test').remove();
    })
    history = [];
}

function clearCurrent() {
    display.value = '';
	currentCalculation = '';
	currentResult = '';
}

function exportHistory() {
    let csv = 'Calcul,Résultat\n';
	for (let i = 0; i < history.length; i++) {
		csv += history[i][0] + ',' + history[i][1] + '\n';
	}
	let csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
	let csvUrl = URL.createObjectURL(csvData);
	let hiddenElement = document.createElement('a');
	hiddenElement.href = csvUrl;
	hiddenElement.target = '_blank';
	hiddenElement.download = 'history.csv';
	hiddenElement.click();
}