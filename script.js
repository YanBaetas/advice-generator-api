const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceNew = document.querySelector(".icon-dice");
const loadScreen = document.querySelector(".load");

const getAdvice = async () => {
  try {
    loadScreen.classList.add("show");
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceJSON = await response.json();

    adviceId.innerHTML = adviceJSON.slip.id;
    adviceText.innerHTML = adviceJSON.slip.advice;
    loadScreen.classList.remove("show");
  } catch (error) {
    console.log(error);
    loadScreen.classList.remove("show");
  }

  // Another Way
  /*await fetch("https://api.adviceslip.com/advice").then((response) => {
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
  });*/
};

getAdvice();
adviceNew.addEventListener("click", getAdvice);
