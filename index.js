let boxWidth = 14.70;
let boxHeight = 14.70; 

let containerWidth = (boxWidth * boxHeight) + 60;


let container = document.querySelectorAll("#container")[0];
container.style.width = containerWidth + 'px'

console.log(container);
for (let i = 0; i < 16; i++) {
  for (let y = 0; y < 16; y++) {
    let box = document.createElement("div");
    box.style.width = boxWidth + 'px';
    box.style.height = boxHeight + 'px';

    box.setAttribute("class", "box");
    container.appendChild(box);
  }
}
