console.log("index.js is loading");
alert("index.js is connected");

let tips = [
  "Always save your work before closing your browser.",
  "Use strong passwords and do not share them with others.",
  "Check your code carefully for missing brackets, quotation marks, or semicolons.",
  "Debugging means finding and fixing mistakes in your code.",
  "Comments help explain what your code does.",
  "Technology is easier to learn when you practice a little bit at a time.",
  "Digital citizenship means using technology safely, responsibly, and respectfully.",
];

let techTip = document.getElementById("techTip");
let tipButton = document.getElementById("tipButton");

if (techTip && tipButton) {
  tipButton.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * tips.length);
    techTip.textContent = tips[randomIndex];
    techTip.classList.add("highlight-tip");
  });
} else {
  console.log("The techTip paragraph or tipButton button was not found.");
}