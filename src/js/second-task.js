const formRef = document.querySelector(".form");
const nameInputRef = document.querySelector(".form-name__input");
const surnameInputRef = document.querySelector(".form-surname__input");

export default function secondTask() {
  formRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const formData = {
      name: evt.target.elements.userName.value,
      surname: evt.target.elements.surname.value,
    };
    localStorage.setItem("User data", JSON.stringify(formData));
  });

  const localStorageData = JSON.parse(localStorage.getItem("User data"));

  if (localStorageData !== null && localStorageData !== undefined) {
    nameInputRef.value = localStorageData.name;
    surnameInputRef.value = localStorageData.surname;
  }
}
