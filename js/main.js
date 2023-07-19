// Generate text
const generateButton = document.querySelector(".generate-button");
const resetButton = document.querySelector(".reset-button");
const copyButton = document.querySelector(".copy-button");
const textInput = document.getElementById("textInput");
const generatedText = document.getElementById("generatedText");
const copyAlert = document.getElementById("copyAlert");
const emptyAlert = document.getElementById("emptyAlert");
generateButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    showEmptyAlert();
  } else {
    const generated = text.replace(/ /g, " 🤸 ");
    generatedText.value = generated;
    resetButton.style.display = "block";
  }
});
copyButton.addEventListener("click", () => {
  const generated = generatedText.value.trim();
  if (generated === "") {
    if (textInput.value.trim() === "") {
      showEmptyAlert();
    } else {
      generatedText.focus();
      showEmptyAlert();
    }
  } else {
    generatedText.select();
    document.execCommand("copy");
    copyAlert.style.display = "block";
    setTimeout(() => {
      copyAlert.style.display = "none";
    }, 3000);
  }
});
resetButton.addEventListener("click", () => {
  textInput.value = "";
  generatedText.value = "";
  resetButton.style.display = "none";
});

function showEmptyAlert() {
  emptyAlert.style.display = "block";
  setTimeout(() => {
    emptyAlert.style.display = "none";
  }, 3000);
}
generatedText.addEventListener("input", () => {
  const generated = generatedText.value.trim();
  resetButton.style.display = generated !== "" ? "block" : "none";
});
// Dark mode toggle
const darkModeSwitch = document.getElementById("darkModeSwitch");
const darkModeSwitchInner = document.getElementById("darkModeSwitchInner");
const body = document.body;
const footer = document.querySelector("footer");

darkModeSwitch.addEventListener("change", () => {
  if (darkModeSwitch.checked) {
    body.style.backgroundColor = "#27272a";
    body.style.color = "#f1f5f9";
    footer.style.backgroundColor = "#27272a";
    footer.style.color = "#f1f5f9";
  } else {
    body.style.backgroundColor = "#f1f5f9";
    body.style.color = "#27272a";
    footer.style.backgroundColor = "#f1f5f9";
    footer.style.color = "#27272a";
  }
});

darkModeSwitchInner.addEventListener("change", () => {
  darkModeSwitch.checked = darkModeSwitchInner.checked;
});
