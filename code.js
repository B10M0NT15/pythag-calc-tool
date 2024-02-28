function highlightSide(side) {
  const hypo = document.getElementById("side-alpha");
  const vert = document.getElementById("side-beta");
  const horiz = document.getElementById("side-creek");
  const sideObj = {
    a: horiz,
    b: vert,
    c: hypo,
  };
  const arr = [hypo, vert, horiz];
  arr.forEach((item) => (item.style.backgroundColor = "blue"));
  sideObj[side].style.backgroundColor = "red";
}

function lblInputs(adjacent, opposite, hypotenuse) {
  document.getElementById("label-alpha").textContent = adjacent;
  document.getElementById("label-beta").textContent = opposite;
  document.getElementById("label-creek").textContent = hypotenuse;
}

function errorHandler(check1, check2, check3) {
  const condition1 = check3 <= check1;
  const condition2 = check3 <= check2;
  list = [check1, check2, check3];
  for (let i = 0; i < list.length; i++) {
    if (isNaN(list[i])) {
      window.alert("Please make sure your inputs are nummerical!");
    }
  }
  // This if statment below is still popping up even if the for loop above is true.
  //lets fix this issue.
  if (condition1 || condition2) {
    window.alert("Make sure C > A or B!");
  }
}

function changeLbls() {
  console.log("Yoooo");
  const sideSolve = document.getElementById("side-selector").value;
  highlightSide(sideSolve);
  const labelA = document.getElementById("label-a");
  const labelB = document.getElementById("label-b");

  if (sideSolve === "a") {
    //change labels to b & c
    labelA.textContent = "Leg (b)";
    labelB.textContent = "Hypotenuse";
    return;
  }
  if (sideSolve === "b") {
    //change labels to a & c
    labelA.textContent = "Leg (a)";
    labelB.textContent = "Hypotenuse";
    return;
  }
  if (sideSolve === "c") {
    //change labels to a & b
    labelA.textContent = "Leg (a)";
    labelB.textContent = "Leg (b)";
    return;
  }
}
function getValues() {
  const sideSelect = document.getElementById("side-selector");
  console.log(sideSelect.value);

  const sideA = document.getElementById("side-a");
  console.log(sideA.value);

  const sideB = document.getElementById("side-b");
  console.log(sideB.value);

  const userInputs = {
    sideToSolve: sideSelect.value,
    side1: sideA.value,
    side2: sideB.value,
  };

  return userInputs;
}

function solver(inputObj) {
  const { sideToSolve, side1, side2 } = inputObj;
  errorHandler(sideToSolve, side1, side2);
  if (sideToSolve !== "c") {
    // solve for leg a & b
    const answer = Math.sqrt(side2 ** 2 - side1 ** 2);
    if (sideToSolve === "a") {
      lblInputs(answer, side1, side2);
    } else {
      lblInputs(side1, answer, side2);
    }
    lblInputs(side1, side2, answer);

    return answer;
  }

  // solve for c
  const answer = Math.sqrt(side2 ** 2 + side1 ** 2);
  return answer;
}

function calculate() {
  const userInputs = getValues();
  const answer = solver(userInputs);
  document.getElementById("result").textContent = answer;
}

window.addEventListener("load", changeLbls);
