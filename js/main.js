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

const isDarkMode = localStorage.getItem("darkMode") === "true";
darkModeSwitch.checked = isDarkMode;
updateDarkMode(isDarkMode);

darkModeSwitch.addEventListener("change", () => {
  const isDarkMode = darkModeSwitch.checked;
  updateDarkMode(isDarkMode);
  localStorage.setItem("darkMode", isDarkMode.toString());
});

darkModeSwitchInner.addEventListener("change", () => {
  darkModeSwitch.checked = darkModeSwitchInner.checked;
});

function updateDarkMode(isDarkMode) {
  if (isDarkMode) {
    body.style.backgroundColor = "#27272a";
    body.style.color = "#f7fafc";
    footer.style.backgroundColor = "#27272a";
    footer.style.color = "#f7fafc";
    textInput.style.backgroundColor = "#353537";
    textInput.style.color = "#f7fafc";
    generatedText.style.backgroundColor = "#353537";
    generatedText.style.color = "#f7fafc";
  } else {
    body.style.backgroundColor = "#f7fafc";
    body.style.color = "#27272a";
    footer.style.backgroundColor = "#f7fafc";
    footer.style.color = "#27272a";
    textInput.style.backgroundColor = "#edf1ff";
    textInput.style.color = "#000000";
    generatedText.style.backgroundColor = "#edf1ff";
    generatedText.style.color = "#000000";
  }
}