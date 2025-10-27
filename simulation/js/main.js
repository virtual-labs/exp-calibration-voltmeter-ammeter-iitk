// 381 line is for the roatation  of needele of standard and tested ammeter 
var c = false;
var c2 = false;
var c3 = false;
var rotate = false;

var load = false;
var looper;
var degrees = 0;
var switchcount = 0;
var phasecount = 0;
var loadcount = 0;
voltage1 = 0;
Current = 0;
Speed = 0;
e = false;

function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
   }
   
   function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
   }







// function to turn on the main switch or mcb and give the value of voltage supply to both the voltmeter and ammeter 

function switch1on() {
	a1 = document.getElementById('switch1');
         
	if (c == false) {
		a1.setAttribute('transform', 'translate(0,6)');
		a1.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.getElementById('firstbulb').style.fill = 'red';
			bulb1color = document.getElementById('secondbulb').style.fill = 'red';
			load = true;
			// bulb1color = document.getElementById('thirdbulb').style.fill = 'yellow';
		}



		// else if (phasecount == 1) {
		// 	bulb1coloer = document.getElementById('firstbulb').style.fill = 'red';
		// 	bulb1color = document.getElementById('secondbulb').style.fill = 'yellow';
		// 	b1 = document.getElementById('sbulb').innerHTML = 'B';
		// 	bulb1color = document.getElementById('thirdbulb').style.fill = 'blue';
		// 	b2 = document.getElementById('tbulb').innerHTML = 'Y';
		// }
		c = true;
		switchcount = switchcount + 1;
		loadcount = loadcount + 1;

// testred voltmeter and voltmeter
		const voltageRange = document.getElementById("voltage1");
		voltageRange.disabled = false;
		voltageRange.addEventListener("input", function () {
			var value1 = voltageRange.value;
			var voltmeter_1 = document.getElementById('voltmeter').innerHTML = value1 + ' V';
			var value2 = (Math.random() * 0.5 + 0.1).toFixed(2);
			if (+value1 == 0) {
				value2 = 0;
			}
			const testVoltmeter = document.getElementById("test-voltmeter").innerHTML = (+value1) + +value2 + ' V'
			voltageRange.disabled = false;
		});



		var tableswitch = document.querySelector("#tableswitch");
		tableswitch.addEventListener('click', () => {
			
			if (rotate == false && load) {
				tableswitch.style.transform = "rotate(8deg)";
				tableswitch.style.transformOrigin = "500px 610px ";
				tableswitch.style.transition = 'transform 0.5s'
				rotate = true;


			}
			else if (rotate == true) {
				document.getElementById('tableswitch').style.transform = "rotate(54deg)";
				rotate = false;
				a = document.getElementById('loadswitch1');
				a2 = document.getElementById('loadswitch2');
				a3 = document.getElementById('loadswitch3');
				a4 = document.getElementById('loadswitch4');
				a5 = document.getElementById('loadswitch5');



				{
					bulb2color = document.querySelectorAll('.loadbulb2');
					bulb3color = document.querySelectorAll('.loadbulb3');
					bulb4color = document.querySelectorAll('.loadbulb4');
					bulb5color = document.querySelectorAll('.loadbulb5');


					a.setAttribute('transform', 'translate(-3.9,0)');
					a2.setAttribute('transform', 'translate(-3.9,0)');
					a3.setAttribute('transform', 'translate(-3.9,0)');
					a4.setAttribute('transform', 'translate(-3.9,0)');
					a5.setAttribute('transform', 'translate(-3.9,0)');
					bulb1color = document.querySelectorAll('.loadbulb1');

					bulb1color.forEach((val) => {
						val.style.fill = 'white';
					})
					bulb2color.forEach((val) => {
						val.style.fill = 'white';
					})
					bulb3color.forEach((val) => {
						val.style.fill = 'white';
					})
					bulb4color.forEach((val) => {
						val.style.fill = 'white';
					})
					bulb5color.forEach((val) => {
						val.style.fill = 'white';
					})
					c = false;
					switchcount = 0;

				}
				// -------------------------- ammeter rotation tends to zeror ,function ------------------------------------
			let ammeterRotate = () => {
				
				taneedle.style.transition = 'transform 2s';
				taneedle.style.transformOrigin = "377.81px 417.11px";
			
				saneedle.style.transform = (`rotate(${0}deg)`);
				taneedle.style.transform = (`rotate(${0}deg)`);
				
				saneedle.style.transition = 'transform 2s';
				saneedle.style.transformOrigin = "569.54px 409.86px";
			}
			ammeterRotate()

			}
			var stammeter1=document.getElementById("stammeter");
			stammeter1.innerHTML = '0 A';
			var testammeter1=document.getElementById("test-ammeter");
			testammeter1.innerHTML = '0 A';
			

			return rotate;
		});

	}

	else if (c == true) {
		a1.setAttribute('transform', 'translate(0,20)');
		bulb1color = document.getElementById('firstbulb').style.fill = 'white';
		bulb1color = document.getElementById('secondbulb').style.fill = 'white';
		//bulb1color = document.getElementById('thirdbulb').style.fill = 'white';
		c = false;
		switchcount = 0;
		var voltmeter_1 = document.getElementById('voltmeter').innerHTML = '0 V';
		var testVoltmeter = document.getElementById("test-voltmeter").innerHTML = '0 V';
		const voltageRange = document.getElementById("voltage1");
		voltageRange.disabled = true;
		voltageRange.value = 0;

		document.getElementById("voltage-1-display").innerText = voltageRange.value;
		load = false;




	}
	return load;
}


// function written to open or close the slide pannel which is given to the simulator 
function openNav() {
	document.getElementById("mySidepanel").style.width = "500px";
	document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}

function getVoltage(id) {
	if (id === 'voltage1') {
		voltage1 = document.getElementById(id).value;
		document.getElementById("voltage-1-display").innerText = voltage1;
	}

}


a = document.getElementById('loadswitch1');

// function to turn on the loadswitch button no 1
function loadswitch1on() {


	

	if (c == false && load && rotate) {
		a.setAttribute('transform', 'translate(22,-5)');
		a.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb1color = document.querySelectorAll('.loadbulb1');
			bulb1color.forEach((val) => {
				val.style.fill = 'red';
			})
		}
		c = true;
		switchcount = switchcount + 1;
	// 	e=1;
	// console.log(e)
	z1=1
	}




	else if (c == true) {
		a.setAttribute('transform', 'translate(-3.9,0)');
		bulb1color = document.querySelectorAll('.loadbulb1');
		bulb1color.forEach((val) => {
			val.style.fill = 'white';
		})
		c = false;
		switchcount = 0;
    //     e=0;
	// console.log(e)
	z1=0
	}
	
	changeValStammeter()
	
}





// function to turn on the loadswitch button no 2

function loadswitch2on() {
	a2 = document.getElementById('loadswitch2');

	if (c == false && load && rotate) {
		a2.setAttribute('transform', 'translate(22,-5)');
		a2.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb2color = document.querySelectorAll('.loadbulb2');
			bulb2color.forEach((val) => {
				val.style.fill = 'red';
			})
		}
		c = true;
		switchcount = switchcount + 1;
		z2=1
	}


	else if (c == true) {
		a2.setAttribute('transform', 'translate(-3.9,0)');
		bulb2color = document.querySelectorAll('.loadbulb2');
		bulb2color.forEach((val) => {
			val.style.fill = 'white';
		})
		c = false;
		switchcount = 0;
		z2=0;

	}
	changeValStammeter()
}
// function to turn on the loadswitch button no 3


function loadswitch3on() {
	a3 = document.getElementById('loadswitch3');

	if (c == false && load && rotate) {
		a3.setAttribute('transform', 'translate(22,-5)');
		a3.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb3color = document.querySelectorAll('.loadbulb3');
			bulb3color.forEach(val => {
				val.style.fill = 'red';
			});
		}
		c = true;
		switchcount = switchcount + 1;
		z3 = 1;
	}


	else if (c == true) {
		a3.setAttribute('transform', 'translate(-3.9,0)');
		bulb3color = document.querySelectorAll('.loadbulb3');
		bulb3color.forEach(val => {
			val.style.fill = 'white';
		});
		c = false;
		switchcount = 0;
		z3 = 0;

	}
	changeValStammeter()
}
// function to turn on the loadswitch button no 4

function loadswitch4on() {
	a4 = document.getElementById('loadswitch4');

	if (c == false && load && rotate) {
		a4.setAttribute('transform', 'translate(22,-5)');
		a4.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb4color = document.querySelectorAll('.loadbulb4');
			bulb4color.forEach(val => {
				val.style.fill = 'red';
			});
		}
		c = true;
		switchcount = switchcount + 1;
		z4 = 1;
	}


	else if (c == true) {
		a4.setAttribute('transform', 'translate(-3.9,0)');
		bulb4color = document.querySelectorAll('.loadbulb4');
		bulb4color.forEach(val => {
			val.style.fill = 'white';
		});
		c = false;
		switchcount = 0;
		z4 = 0;

	}
	changeValStammeter()
}


// function to turn on the loadswitch button no 5
function loadswitch5on() {
	a5 = document.getElementById('loadswitch5');

	if (c == false && load && rotate) {
		a5.setAttribute('transform', 'translate(22,-5)');
		a5.style.transition = 'transform 0.35s';
		if (phasecount == 0) {
			bulb5color = document.querySelectorAll('.loadbulb5');
			bulb5color.forEach(val => {
				val.style.fill = 'red';
			});
		}
		c = true;
		switchcount = switchcount + 1;
		z5 = 1;
	}


	else if (c == true) {
		a5.setAttribute('transform', 'translate(-3.9,0)');
		bulb5color = document.querySelectorAll('.loadbulb5');
		bulb5color.forEach(val => {
			val.style.fill = 'white';
		});
		c = false;
		switchcount = 0;
		z5 = 0;

	}
	changeValStammeter()
}






var loadswitch1=document.getElementById("loadswitch1");
var loadswitch2 = document.getElementById("loadswitch2"); 
var loadswitch3 = document.getElementById("loadswitch3"); 
var loadswitch4 = document.getElementById("loadswitch4"); 
var loadswitch5 = document.getElementById("loadswitch5");
var loadswitch5 = document.getElementById("voltage1");
var stammeter=document.getElementById("stammeter");
var testammeter=document.getElementById("test-ammeter");
var z1 =0;
var z2 = 0;
var z3 = 0;
var z4 =  0;
var z5 = 0;
function changeValStammeter(){
  var sliderVal1 = document.getElementById('voltage1').value
  if(z1 || z2 || z3 || z4 || z5){
	stammeter.innerHTML = (sliderVal1/((z1+z2+z3+z4+z5)*100)).toFixed(3) + ' A'; 
	var randomValue = -0.001 - Math.random() * 0.0010;
	testammeter.innerHTML = (sliderVal1/((z1+z2+z3+z4+z5)*100)+randomValue).toFixed(4) + ' A';
  }else{
	stammeter.innerHTML = 0 + ' A'; 
	testammeter.innerHTML=0 + ' A'; 
  }
    
  let ammeterRotate = () => {
	// console.log(e.target.value)

	const ammeterVal  = (stammeter.innerHTML ).split(" ")[0]
	console.log(ammeterVal)
	var blurValue=ammeterVal*22;
	taneedle.style.transform = (`rotate(${blurValue}deg)`);
	// taneedle.style.transform = ('rotate(60deg)');
	taneedle.style.transition = 'transform 2s';
	taneedle.style.transformOrigin = "377.81px 417.11px";

	saneedle.style.transform = (`rotate(${blurValue}deg)`);
	// saneedle.style.transform = ('rotate(60deg)');
	saneedle.style.transition = 'transform 3s';
	saneedle.style.transformOrigin = "569.54px 409.86px";
}
ammeterRotate()

}

var addnew_row = document.getElementById("addnewRow");
// x.style.display = 'none';
let btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click',()=>{
  console.log("hhhhhhh")
  addnew_row.innerHTML += ` <tr>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>
  <th><input type="text" style="padding: 6px 8px ;width:'50px';"></th>


</tr>`
})

// needle rotate code through the if else statements

// var stvneedle=document.getElementById('stvneedle')
// var fadeRang=document.getElementById('voltage1')
// var tvneedle=document.getElementById('tvneedle')

//     fadeRang.addEventListener('input', (e) => {
// 		console.log(e.target.value)
    
//       if(e.target.value<=200){
// 		stvneedle.style.transform = ('rotate(30deg)');
//         stvneedle.style.transition = 'transform 2s';
        
// 		stvneedle.style.transformOrigin = "550.5px 228.94px";
// 		tvneedle.style.transform = ('rotate(30deg)');
// tvneedle.style.transition = 'transform 2s';
// tvneedle.style.transformOrigin = "364.86px 218.27px";
        
   
//       }else{
//         stvneedle.style.transform = ('rotate(60deg)');
// stvneedle.style.transition = 'transform 2s';
// stvneedle.style.transformOrigin = "550.5px 228.94px";

// tvneedle.style.transform = ('rotate(60deg)');
// tvneedle.style.transition = 'transform 2s';
// tvneedle.style.transformOrigin = "364.86px 218.27px";
//       }
      
//     });
// var taneedle=document.getElementById('taneedle');
// var saneedle=document.getElementById('saneedle');
// fadeRang.addEventListener('input', (e) => {
// 	console.log(e.target.value)
// 	if(10<e.target.value<=200){
// 		taneedle.style.transform = ('rotate(30deg)');
//         taneedle.style.transition = 'transform 2s';
       
// 		taneedle.style.transformOrigin = "377.81px 417.11px";

// 		saneedle.style.transform = ('rotate(30deg)');
//         saneedle.style.transition = 'transform 2s';
// 		saneedle.style.transformOrigin = "569.54px 409.86px";
// 		console.log('anand')
// }
	 
// 	  else{
//         taneedle.style.transform = ('rotate(60deg)');
//         taneedle.style.transition = 'transform 2s';
// 		taneedle.style.transformOrigin = "377.81px 417.11px";

// 		saneedle.style.transform = ('rotate(60deg)');
//         saneedle.style.transition = 'transform 2s';
// 		saneedle.style.transformOrigin = "569.54px 409.86px";

		
//       }
      
//     });


//rotation of needle standard and tested ammeter through the function below here 

// var taneedle=document.getElementById('taneedle')
// var fadeRang=document.getElementById('voltage1')
// var saneedle=document.getElementById('saneedle')

//     fadeRang.addEventListener('input', (e) => {
// 		console.log(e.target.value)
// 		var blurValue=e.target.value/3.5;
// 		taneedle.style.transform = (`rotate(${blurValue}deg)`);
// 		// taneedle.style.transform = ('rotate(60deg)');
//         taneedle.style.transition = 'transform 2s';
// 		taneedle.style.transformOrigin = "377.81px 417.11px";

// 		saneedle.style.transform = (`rotate(${blurValue}deg)`);
//         // saneedle.style.transform = ('rotate(60deg)');
//         saneedle.style.transition = 'transform 2s';
// 		saneedle.style.transformOrigin = "569.54px 409.86px";
// 	})


	// standarad voltmeter and tested voltmeter rotation function

	var stvneedle=document.getElementById('stvneedle')
    var fadeRang=document.getElementById('voltage1')
    var tvneedle=document.getElementById('tvneedle')

	fadeRang.addEventListener('input', (e) => {
		console.log(e.target.value)
		var blurValue=e.target.value/4.2;
		stvneedle.style.transform = (`rotate(${blurValue}deg)`);
        stvneedle.style.transition = 'transform 2s';
		stvneedle.style.transformOrigin = "550.5px 228.94px";

		tvneedle.style.transform = (`rotate(${blurValue}deg)`);
        tvneedle.style.transition = 'transform 2s';
        tvneedle.style.transformOrigin = "364.86px 218.27px";
	})


	function printTable() {
		var table = document.getElementById("addnewRow");
		var win = window.open('', '', 'height=700,width=700');
		win.document.write('<html><head>');
		win.document.write('<title>Table</title>');
		win.document.write('</head>');
		win.document.write('<body>');
		win.document.write(table.outerHTML);
		win.document.write('</body></html>');
		win.print();
	  }
