function changeLbls() {
  console.log("Yoooo");
  const sideSolve = document.getElementById("side-selector").value;
  if (sideSolve === "a") {
    //change labels to b & c
    document.getElementById("label-a").textContent = "Leg (b)";
    document.getElementById("label-b").textContent = "Hypotenuse";
    return;
  }
  if (sideSolve === "b") {
    //change labels to a & c
    document.getElementById("label-a").textContent = "Leg (a)";
    document.getElementById("label-b").textContent = "Hypotenuse";
    return;
  }
  if (sideSolve === "c") {
    //change labels to a & b
    document.getElementById("label-a").textContent = "Leg (a)";
    document.getElementById("label-b").textContent = "Leg (b)";
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
  if (sideToSolve !== "c") {
    // solve for leg a & b
    const answer = Math.sqrt(side2 ** 2 - side1 ** 2);
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
