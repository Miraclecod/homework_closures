//Task 1

// let btn1 = document.getElementById('Button1');

// let btn2 = document.getElementById('Button2');

// btn1.onclick = handleButtonClick;
// btn2.onclick = handleButtonClick;

// function handleButtonClick(e) {
//     e.target.value++;
// }

//Used closures

let handleButtonClick = function() {
    let j = 1;
    return function() {
        this.value = j;
        return j++;
    }
}

let buttonCounts = document.getElementsByTagName('input');
for(let i = 0; i < buttonCounts.length; i++) {
    buttonCounts[i].onclick = handleButtonClick();
}
//Task2

let colors = ['red', 'green' , 'magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let pTag = document.getElementsByTagName('p');

let handleTagPClick = function() {
	let j = 0;
	return function() {
		this.style.color = colors[j];
		j++;
		if (j == colors.length) j=0;
	}
}

for (let i = 0; i < pTag.length; i++) {
    pTag[i].onclick = handleTagPClick();
}

//Task3

let buttonFibonacci = document.querySelectorAll('.task3');

let handleFibonacciClick = function() {
    let j = 0;
    let i = 1;
    let temp;
    return function() {
        this.nextElementSibling.innerHTML = j;
        temp = j;
        j = i;
        i = temp + j;
    }
}

for(let i = 0; i < buttonFibonacci.length; i++) {
    buttonFibonacci[i].onclick = handleFibonacciClick();
}


//Task4
let buttonRandom = document.getElementById('button4');
let spanRandom = document.getElementById('span4');


let handleRandomNumberClick = function() {
    let numbersUsed = [];
    return function() {
        let newNumber = randomVal(0, 10);
        for(let i = 0; i < numbersUsed.length; i++) {
            if(numbersUsed[i] == newNumber) return;
        }
        spanRandom.innerHTML +=  newNumber + ' ';
        numbersUsed.push(newNumber);
    }
}

function randomVal(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

buttonRandom.onclick = handleRandomNumberClick();