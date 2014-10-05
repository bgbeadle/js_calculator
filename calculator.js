// CALCULATOR.JS
//
//
//

// 
var Calc = {};

Calc.run = function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
};

Calc.textRow = {id: "textRow", type: "text", value: "", onclick:""};
Calc.button7 = {id: "button7", type: "button", value: 7, onclick:""};
Calc.button8 = {id: "button8", type: "button", value: 8, onclick:""};
Calc.button9 = {id: "button9", type: "button", value: 9, onclick:""};
Calc.buttonAdd = {id: "buttonAdd", type: "button", value: '+', onclick:""};
Calc.button4 = {id: "button4", type: "button", value: 4, onclick:""};
Calc.button5 = {id: "button5", type: "button", value: 5, onclick:""};
Calc.button6 = {id: "button6", type: "button", value: 6, onclick:""};
Calc.buttonSub = {id: "buttonSub", type: "button", value: '-', onclick:""};
Calc.button1 = {id: "button1", type: "button", value: 1, onclick:""};
Calc.button2 = {id: "button2", type: "button", value: 2, onclick:""};
Calc.button3 = {id: "button3", type: "button", value: 3, onclick:""};
Calc.buttonMul = {id: "buttonMul", type: "button", value: '*', onclick:""};
Calc.button0 = {id: "button0", type: "button", value: 0, onclick:""};
Calc.buttonDec = {id: "buttonDec", type: "button", value: '.', onclick:""};
Calc.buttonEq = {id: "buttonEq", type: "button", value: '=', onclick:""};
Calc.buttonDiv = {id: "buttonDiv", type: "button", value: '/', onclick:""};
Calc.buttonClr = {id: "buttonClr", type: "button", value: 'C', onclick:""};
Calc.buttonMC = {id: "buttonMC", type: "button", value: 'MC', onclick:""};
Calc.buttonMR = {id: "buttonMR", type: "button", value: 'MR', onclick:""};
Calc.buttonMA = {id: "buttonMA", type: "button", value: 'M+', onclick:""};

Calc.displayElement = function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

}

Calc.display = function() {
  var s;
  s = "<table id=\"myTable\" border=5>"
  s += "<tr><td>" + Calc.displayElement(Calc.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.button7);
  s += Calc.displayElement(Calc.button8);
  s += Calc.displayElement(Calc.button9);
  s += Calc.displayElement(Calc.buttonAdd);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.button4);
  s += Calc.displayElement(Calc.button5);
  s += Calc.displayElement(Calc.button6);
  s += Calc.displayElement(Calc.buttonSub);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.button1);
  s += Calc.displayElement(Calc.button2);
  s += Calc.displayElement(Calc.button3);
  s += Calc.displayElement(Calc.buttonMul);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.button0);
  s += Calc.displayElement(Calc.buttonDec);
  s += Calc.displayElement(Calc.buttonEq);
  s += Calc.displayElement(Calc.buttonDiv);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.buttonClr);
  s += Calc.displayElement(Calc.buttonMC);
  s += Calc.displayElement(Calc.buttonMR);
  s += Calc.displayElement(Calc.buttonMA);
  s += "</tr></td>";
  "</table>";
  return s;
}

Calc.attachHandlers = function() {
  Calc.button9.onclick = "Calc.button9Handler()";
  Calc.button8.onclick = "Calc.button8Handler()";
  Calc.button7.onclick = "Calc.button7Handler()";
  Calc.button6.onclick = "Calc.button6Handler()"; 
  Calc.button5.onclick = "Calc.button5Handler()";
  Calc.button4.onclick = "Calc.button4Handler()";
  Calc.button3.onclick = "Calc.button3Handler()";
  Calc.button2.onclick = "Calc.button2Handler()";
  Calc.button1.onclick = "Calc.button1Handler()";
  Calc.button0.onclick = "Calc.button0Handler()";
  Calc.buttonAdd.onclick = "Calc.buttonAddHandler()";
  Calc.buttonSub.onclick = "Calc.buttonSubHandler()";
  Calc.buttonMul.onclick = "Calc.buttonMulHandler()";
  Calc.buttonDiv.onclick = "Calc.buttonDivHandler()";
  Calc.buttonEq.onclick = "Calc.buttonEqHandler()";
  Calc.buttonClr.onclick = "Calc.buttonClrHandler()";
  Calc.buttonDec.onclick = "Calc.buttonDecHandler()";
  Calc.buttonMR.onclick = "Calc.buttonMRHandler()";
  Calc.buttonMC.onclick = "Calc.buttonMCHandler()";
  Calc.buttonMA.onclick = "Calc.buttonMAHandler()";
}

Calc.button9Handler = function() {
  textRow.value += 9;
}

Calc.button8Handler = function() {
  textRow.value += 8;
}

Calc.button7Handler = function() {
  textRow.value += 7;
}

Calc.button6Handler = function() {
  textRow.value += 6;
}

Calc.button5Handler = function() {
  textRow.value += 5;
}

Calc.button4Handler = function() {
  textRow.value += 4;
}

Calc.button3Handler = function() {
  textRow.value += 3;
}

Calc.button2Handler = function() {
  textRow.value += 2;
}

Calc.button1Handler = function() {
  textRow.value += 1;
}

Calc.button0Handler = function() {
  textRow.value += 0;
}

Calc.buttonAddHandler = function() {
  
}

Calc.buttonSubHandler = function() {
  
}

Calc.buttonMulHandler = function() {
  
}

Calc.buttonDivHandler = function() {
  
}

Calc.buttonDecHandler = function() {
  textRow.value += '.';
}

Calc.buttonClrHandler = function() {
  textRow.value = "";
}

Calc.buttonMRHandler = function() {
  
}

Calc.buttonMAHandler = function() {
  
}

Calc.buttonMCHandler = function() {
  
}

Calc.buttonEqHandler = function() {
  
}