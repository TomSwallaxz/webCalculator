function calcAdd() {
  txtBox1 = Number.getElementById("numberOne").value;
  txtBox2 = Number.getElementById("numberTwo").value;

  sum = txtBox1 + txtBox2;
  Number.getElementById("result").value += sum;
}

function calcAdd() {
  txtBox1 = Number(document.getElementById("numberOne").value);
  txtBox2 = Number(document.getElementById("numberTwo").value);

  sum = txtBox1 + txtBox2;
  document.getElementById("result").setAttribute('value', sum);
}

function calcSub() {
  let firstInput = document.getElementById("numberOne").value;
  let secondInput = document.getElementById("numberTwo").value;

  document.getElementById("result").setAttribute('value', firstInput - secondInput);
}

function calcMul() {
  // Get <input> elements
  let firstInput = document.getElementById("numberOne");
  let secondInput = document.getElementById("numberTwo");

  // Parse the text entered in each into numbers
  var num1 = Number(firstInput.value);
  var num2 = Number(secondInput.value);

  // Find their sum
  var sum = num1 + num2;

  // Get the output element
  var resultElement = document.getElementById("result");

  // Display the sum in the output element
  resultElement.innerHTML = sum;
}
