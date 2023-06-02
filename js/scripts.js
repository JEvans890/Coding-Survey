window.onload = function();
let form = document.querySelector("form");
form.onsubmit = function(event) {
    const LanguageSuggestion = {
        Websites:{
            beginner: {
                simple: {
                    windows:{
                        popular
                    }
                }
            }
        }
        Phone Apps:{}
        Video Games:
        advanced:
        intermediate:
        beginner:
        windows:
        mac:
        linux:
        No Preference:
        Simple:
        Concise:
        Flexible:
        Popular:
        Niche:

    }


const inputField = document.getElementById("inputField");
const name = inputField.value;
inputField.value = "";
let result;
  if (name === "") {
    result = "Please enter your name.";
  } else if (name === "John") {
    result = "Hello, John!";
  } else {
    result = "Hello, " + name + "!";
  };
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.textContent = result;
  resultContainer.classList.remove("hidden");
});

event.preventDefault();
};
