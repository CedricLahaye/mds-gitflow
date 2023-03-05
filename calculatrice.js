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
	if(currentCalculation !== '') {
		currentResult = eval(currentCalculation);
		display.value = currentResult;
		history.push([currentCalculation, currentResult]);
		historyTable.innerHTML += '<tr id="test"><td>' + currentCalculation + '</td><td>' + currentResult + '</td></tr>';
		currentCalculation = '';
	}
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

document.addEventListener('keydown', function(event) {
	event.preventDefault();
  var keyValue = event.key;
  var keyCode = event.code;
	let keyDisplay = ['Numpad0','Numpad1','Numpad2','Numpad3','Numpad4','Numpad5','Numpad6','Numpad7','Numpad8','Numpad9','NumpadMultiply','NumpadDivide','NumpadSubtract','NumpadAdd','NumpadDecimal'];

	if(keyDisplay.includes(keyCode)){
    currentCalculation += keyValue;
    display.value = currentCalculation;
	} else if (keyCode === 'NumpadEnter'){
		calculate();
	}
});