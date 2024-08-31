let boxWidth = 16;
let boxHeight = 16;

let body = document.querySelectorAll("body")[0];
let container = document.querySelectorAll("#container")[0];

let form = document.createElement("form");
body.insertBefore(form, container);

let input = document.createElement("input");
input.type = 'text'
input.id = 'inputBox'

let label = document.createElement('label');
label.htmlFor = 'inputBox'
label.textContent = 'How many boxs?'

let button = document.createElement("button");
button.textContent = "CREATE";


//Create boxs
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
      box.style.width = boxWidth - 2.5 + "px";
      box.style.height = boxHeight - 2.5 + "px";
      box.setAttribute("class", "box");
      container.appendChild(box);
    }
    container.style.width = boxWidth * numberBox + "px";
    container.style.height = boxHeight * numberBox + "px";
  }
};

//How many boxs? 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.remove();
  container = document.createElement("div");
  container.setAttribute("id", "container");
  body.appendChild(container);
  if (input.value > 0 && input.value <= 100) {
    numberBox = input.value;
  } else if (input.value > 100) {
    let errorMsg = document.createElement("div");
    errorMsg.textContent = 'Limit box is 100'
    form.appendChild(errorMsg);
    return;
  }

  functionCreateBox(numberBox);
});
form.appendChild(label)
form.appendChild(input);
form.appendChild(button);
input.focus()