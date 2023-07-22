const myDiv = document.getElementById("myDiv");

for (let i = 1; i <= 100; i++) {
  let stringa = i;

  if (i % 3 == 0 && i % 5 == 0) {
    stringa = "Fizzbuzz";
  } else if (i % 3 == 0) {
    stringa = "Fizz";
  } else if (i % 5 == 0) {
    stringa = "Buzz";
  } else {
    console.log(i);
  }

  const myBox = document.createElement("div");
  myBox.innerHTML = stringa;
  myBox.classList.add("box");

  if (stringa == "Fizzbuzz") {
    myBox.classList.add("red");
  } else if (stringa === "Buzz") {
    myBox.classList.add("green");
  } else if (stringa === "Fizz") {
    myBox.classList.add("yellow");
  } else {
    myBox.classList.add("blue");
  }

  myDiv.append(myBox);
}
