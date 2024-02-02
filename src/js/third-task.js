const loginFormRef = document.querySelector(".login__form");

export default function thirdTask() {
  loginFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const loginFormData = {
      login: evt.target.elements.login.value,
      password: evt.target.elements.password.value,
    };

    const getLocalStorageData = localStorage.getItem("Login form data");
    if (!getLocalStorageData) {
      localStorage.setItem("Login form data", JSON.stringify(loginFormData));
      alert(`Вітаю, ${loginFormData.login}, Ви зареєструвалися 🥳`);
    } else {
      const parseLocalStorageData = JSON.parse(getLocalStorageData);
      if (
        loginFormData.login === parseLocalStorageData.login &&
        loginFormData.password === parseLocalStorageData.password
      ) {
        alert(`${parseLocalStorageData.login}, Ви вже зареєстровані 🥂`);
      } else {
        localStorage.setItem("Login form data", JSON.stringify(loginFormData));
        alert(`Вітаю, ${loginFormData.login}, Ви успішно оновили дані 👏`);
      }
    }
  });
}
