function buttonfunction() {
	let x = 0

	let text1 = document.getElementById("textbox1").value;
	console.log(text1);
	
	let text2 = document.getElementById("textbox2").value;
	console.log(text2);
	
	let answer1 = document.querySelector("#answer1").checked;
	console.log('true');
	
	let answer2 = document.querySelector("#answer2").checked;
	console.log('true');
	
	let answer3 = document.querySelector("#answer3").checked;
	console.log('true');
	
	let number1 = document.querySelector("#number1").checked;
	console.log('true');
	
	let number2 = document.querySelector("#number2").checked;
	console.log('true');
	
	let number3 = document.querySelector("#number3").checked;
	console.log('true');
	if (answer1) {
		x = x + 1
	}
	console.log(x)
	if (answer3) {
		x = x + 0.5
	}
	console.log(x)
	if (text1 == ("Yukino Yukinoshita")) {
		x = x + 1
	}
	console.log(x)
	if (text2 == ("yes") || textbox2 == ("Yes")) {
		x = x + 1
	}
	console.log(x)
	if ((number3) && (number2 !=true) && (number1 !=true)) {
		x = x + 1
	}
	console.log(x.toString()+"/4")
	
	document.getElementsByClassName("paragraph")[0].innerHTML = "Your score is "+ x.toString()+"/4";
	if (answer1) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "1) Correct"
	} else if (answer3) {
		document.getElementsByClassName("paragraph")[1].innerHTML = "1) Half Marks"
	} else {
		document.getElementsByClassName("paragraph")[1].innerHTML = "1) Incorrect"
	}
	if ((number3) && (number2 !=true) && (number1 !=true)) { 
		document.getElementsByClassName("paragraph")[2].innerHTML = "2) Correct"
	} else { 
		document.getElementsByClassName("paragraph")[2].innerHTML = "2) Incorrect"
	}
	if (text1 == ("Yukino Yukinoshita")) {
		document.getElementsByClassName("paragraph")[3].innerHTML = "3) Correct"
	} else {
		document.getElementsByClassName("paragraph")[3].innerHTML = "3) Incorrect"
	}
	if (text2 == ("yes") || textbox2 == ("Yes")) {
		document.getElementsByClassName("paragraph")[4].innerHTML = "4) correct"
	} else {
		document.getElementsByClassName("paragraph")[4].innerHTML = "4) Incorrect"
	}
	if (x > 2) {
		document.getElementsByClassName("paragraph")[5].innerHTML = "Good job, you passed"
	} else {
		document.getElementsByClassName("paragraph")[5].innerHTML = "You fucked up you fucktard"
	}
	if (x == 4) {
		document.getElementsByClassName("paragraph")[5].innerHTML = "You got perfect, good job"
	}
}