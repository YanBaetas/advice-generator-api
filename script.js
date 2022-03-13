const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceNew = document.querySelector(".icon-dice");
const loadScreen = document.querySelector(".load");

const getAdvice = () => {
  loadScreen.classList.add("show");
  fetch("https://api.adviceslip.com/advice").then((response) => {
    return response
      .json()
      .then((data) => {
        adviceId.innerHTML = data.slip.id;
        adviceText.innerHTML = data.slip.advice;
        loadScreen.classList.remove("show");
      })
      .catch((error) => {
        console.log(Error(error));
        loadScreen.classList.remove("show");
      });
  });
};

getAdvice();
adviceNew.addEventListener("click", getAdvice);
