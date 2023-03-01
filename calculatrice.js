let display = document.getElementById('display');
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
}

function clearDisplay() {
    alert('Fonctionnalité en cours de développement !');
}

function undo() {
    alert('Fonctionnalité en cours de développement !');
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