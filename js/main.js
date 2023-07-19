// Generate text
const resetButton = document.querySelector(".reset-button");
const copyButton = document.querySelector(".copy-button");
const textInput = document.getElementById("textInput");
const generatedText = document.getElementById("generatedText");
const copyAlert = document.getElementById("copyAlert");
const emptyAlert = document.getElementById("emptyAlert");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();
  if (text === "") {
    generatedText.value = "";
    resetButton.style.display = "none";
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
  var emptyAlert = document.getElementById("emptyAlert");
  emptyAlert.style.opacity = "1";
  emptyAlert.style.display = "block";

  setTimeout(() => {
    emptyAlert.style.opacity = "0";
    setTimeout(() => {
      emptyAlert.style.display = "none";
    }, 1000);
  }, 5000);
}


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
    textInput.style.backgroundColor = "#353537";
    textInput.style.color = "#f1f5f9";
    generatedText.style.backgroundColor = "#353537";
    generatedText.style.color = "#f1f5f9";
  } else {
    body.style.backgroundColor = "#f1f5f9";
    body.style.color = "#27272a";
    footer.style.backgroundColor = "#f1f5f9";
    footer.style.color = "#27272a";
    textInput.style.backgroundColor = "#f8f9fa";
    textInput.style.color = "#000000";
    generatedText.style.backgroundColor = "#f8f9fa";
    generatedText.style.color = "#000000";
  }
});

darkModeSwitchInner.addEventListener("change", () => {
  darkModeSwitch.checked = darkModeSwitchInner.checked;
});