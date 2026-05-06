let tips = [
  "Always save your work before closing your browser.",
  "Use strong passwords and do not share them with others.",
  "Check your code carefully for missing brackets, quotation marks, or semicolons.",
  "Debugging means finding and fixing mistakes in your code.",
  "Comments help explain what your code does.",
  "Technology is easier to learn when you practice a little bit at a time.",
  "Digital citizenship means using technology safely, responsibly, and respectfully.",
  "Always double-check your work before submitting it.",
  "Save your work often so you do not lose progress.",
  "Use clear file names so you can find your work later.",
  "Do not share passwords with anyone except a trusted adult.",
  "Log out of shared computers when you are finished.",
  "Read error messages carefully because they often give clues.",
  "Test your code after each small change.",
  "Use comments to explain what important parts of your code do.",
  "Keep your desktop and files organized.",
  "Think before you click on links or downloads.",
  "Use strong passwords with letters, numbers, and symbols.",
  "Do not post personal information online.",
  "Refresh the page if a website is not loading correctly.",
  "Check that your headphones, microphone, or volume are connected before a video call.",
  "When coding, missing punctuation can break your program.",
  "Ask a specific question when you need help with technology.",
  "Back up important files when possible.",
  "Use respectful language when communicating online.",
  "If something looks suspicious, do not click it.",
  "Practice is the best way to get better with technology.",
];

let techTip = document.getElementById("techTip");
let robotTipImage = document.getElementById("robotTipImage");

function showRandomTip() {
  let randomIndex = Math.floor(Math.random() * tips.length);

  techTip.textContent = tips[randomIndex];
  techTip.classList.add("highlight-tip");

  robotTipImage.classList.remove("robot-clicked");
  void robotTipImage.offsetWidth;
  robotTipImage.classList.add("robot-clicked");
}

if (techTip && robotTipImage) {
  robotTipImage.addEventListener("click", showRandomTip);
} else {
  console.log("The tech tip paragraph or robot image was not found.");
}
