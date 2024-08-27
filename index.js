let boxWidth = 16;
let boxHeight = 16;

let body = document.querySelectorAll("body")[0];
let container = document.querySelectorAll("#container")[0];

let form = document.createElement("form");
body.insertBefore(form, container);

let input = document.createElement("input");
let button = document.createElement("button");
button.textContent = "CREATE";

let functionCreateBox = (numberBox) => {

  for (let i = 0; i < numberBox; i++) {
    for (let y = 0; y < numberBox; y++) {
      let box = document.createElement("div");
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
      });
      box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "white";
      });
      box.style.width = (boxWidth - 2.5) + "px";
      box.style.height = (boxHeight - 2.5) + "px";
      box.setAttribute("class", "box");
      container.appendChild(box);
    }
    container.style.width = boxWidth * numberBox + "px";
    container.style.height = boxHeight * numberBox + "px";
  }
};
input.addEventListener("change", () => {
  console.log(input.value);
    numberBox = input.value;
    functionCreateBox(numberBox);
});
form.appendChild(input);
form.appendChild(button);
