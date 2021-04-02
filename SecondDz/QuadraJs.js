let count = 0;
let arr = [];
function valueSearch() {
	let A = parseInt(document.getElementById("A").value);
	let B = parseInt(document.getElementById("B").value);
	let C = parseInt(document.getElementById("C").value);
	let elem1 = document.getElementById("errorN");
	while (elem1.firstChild) {
		elem1.removeChild(elem1.lastChild)
 	// statement
 }
 try {
 	if ((isNaN(A) == true) || (isNaN(B) == true)||(isNaN(C) == true)){
 		throw "Error! You must enter a number into the fields!";
 	}
 } catch(e) {
 	let elem1 = document.createElement('div');
 	document.getElementById("errorN").append(elem1);
 	elem1.append(e);
 	return;
 }
 let elem = document.getElementById("out");
 while (elem.firstChild) {
 	elem.removeChild(elem.lastChild)
 	// statement
 }
 calculations(A,B,C);
}


function calculations(A,B,C){
	let X1 = (-B-(Math.pow(B,2)-4*A*C)**(1/2))/(A*2);
	let X2 = (-B+(Math.pow(B,2)-4*A*C)**(1/2))/(A*2);
	if ((isNaN(X1) == true)||(isNaN(X2)) == true) {
		arr[count] = 'Can\'t find roots, change values';
	}else{
		arr[count] = "x1 = "+X1+" x2 = "+X2;
	}
	count = 0;
	for (let i = 0; i<arr.length; i++){
		if (i%2 == 0){
			let elem = document.createElement('div');
			elem.classList.add("greenText");
			document.getElementById("out").append(elem);
			elem.append(arr[i]);
			elem.id = count++;
			elem.addEventListener('click', function (event) {
				elem.remove();
				count--;
				arr.splice(elem.id, 1);
				deleteN();
			});
		}
		else {
			let elem = document.createElement('div');
			elem.classList.add("blueText");
			document.getElementById("out").append(elem);
			elem.append(arr[i]);
			elem.id = count++;
			elem.addEventListener('click', function (event) {
				elem.remove();
				count--;
				arr.splice(elem.id, 1);
				deleteN();
			});
		}
	}
}
function deleteN(){
	let elem = document.getElementById("out");
	while (elem.firstChild) {
		elem.removeChild(elem.lastChild)
 	// statement
 }
 count = 0;
 for (let i = 0; i<arr.length; i++){
 	if (i%2 == 0){
 		let elem = document.createElement('div');
 		elem.classList.add("greenText");
 		document.getElementById("out").append(elem);
 		elem.append(arr[i]);
 		elem.id = count++;
 		elem.addEventListener('click', function (event) {
 			elem.remove();
 			count--;
 			arr.splice(elem.id, 1);
 			deleteN();
 		});
 	}
 	else {
 		let elem = document.createElement('div');
 		elem.classList.add("blueText");
 		document.getElementById("out").append(elem);
 		elem.append(arr[i]);
 		elem.id = count++;
 		elem.addEventListener('click', function (event) {
 			elem.remove();
 			count--;
 			arr.splice(elem.id, 1);
 			deleteN();
 		});
 	}
 }
}
