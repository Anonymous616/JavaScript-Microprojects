const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyBtn = document.getElementById("copy-btn");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
copyBtn.addEventListener("click", function () {
  copyToClipboard();
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function copyToClipboard() {
  navigator.clipboard.writeText(color.textContent);
}
