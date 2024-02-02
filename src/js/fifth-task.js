// !contacts list
const contactsListRef = document.querySelector(".contacts__list");
// !

// ?add contact refs
const addContactOpenButtonRef = document.querySelector(
  "[data-button=addContact]"
);
const addContactCloseButtonRef = document.querySelector(
  "[data-button=contactCloseAdd]"
);
const addContactBackdropRef = document.querySelector(
  "[data-backdrop=addContact]"
);
const addContactFormRef = document.querySelector("[data-form=addContact]");
// ?

// *edit contact refs
const editContactOpenButtonRef = document.querySelector(
  "[data-button=editContact]"
);
const editContactCloseButtonRef = document.querySelector(
  "[data-button=contactCloseEdit]"
);
const editContactBackdropRef = document.querySelector(
  "[data-backdrop=editContact]"
);
const numEditContactRef = document.querySelector(
  '[data-input="numEditContact"]'
);
const editContactFormRef = document.querySelector("[data-form=editContact]");
// *

// todo: delete contact refs
const deleteContactOpenButtonRef = document.querySelector(
  "[data-button=deleteContact]"
);
const deleteContactCloseButtonRef = document.querySelector(
  "[data-button=contactCloseDelete]"
);
const deleteContactBackdropRef = document.querySelector(
  "[data-backdrop=deleteContact]"
);
const numDeleteContactRef = document.querySelector(
  '[data-input="numDeleteContact"]'
);
const deleteContactFormRef = document.querySelector(
  "[data-form=deleteContact]"
);
// todo

export default function fifthTask() {
  // todo open and close add contact modal
  addContactOpenButtonRef.addEventListener("click", () => {
    addContactBackdropRef.classList.toggle("is-hidden-add-contact");
  });
  addContactCloseButtonRef.addEventListener("click", () => {
    addContactBackdropRef.classList.toggle("is-hidden-add-contact");
  });
  // todo

  // !add contact
  addContactFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let contactsArr = [];
    const contact = {
      name: evt.target.elements.name.value,
      surname: evt.target.elements.surname.value,
      tel: evt.target.elements.tel.value,
      email: evt.target.elements.email.value,
    };

    if (
      localStorage?.getItem("contactsList") ||
      localStorage.getItem("contactsList")
    ) {
      contactsArr = JSON.parse(localStorage.getItem("contactsList"));
    }
    contactsArr.push(contact);

    localStorage.setItem("contactsList", JSON.stringify(contactsArr));

    const currentIdx = contactsArr.length;
    contactsListRef.insertAdjacentHTML(
      "beforeend",
      `<li class=contacts__item>
          <h2>${currentIdx}</h2>
          <p>Name: ${contact.name}</p>
          <p>Surname: ${contact.surname}</p>
          <p>Tel: ${contact.tel}</p>
          <p>Email: ${contact.email}</p>
          </li>`
    );
    addContactBackdropRef.classList.add("is-hidden-contact-add");
    evt.target.reset();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const contactsListData = JSON.parse(localStorage.getItem("contactsList"));
    if (contactsListData) {
      contactsListData.forEach((contact, idx) => {
        const currentIdx = idx + 1;
        contactsListRef.insertAdjacentHTML(
          "beforeend",
          `<li class=contacts__item>
            <h2>${currentIdx}</h2>
            <p>Name: ${contact.name}</p>
            <p>Surname: ${contact.surname}</p>
            <p>Tel: ${contact.tel}</p>
            <p>Email: ${contact.email}</p>
            </li>`
        );
      });
    }
  });

  // todo open and close edit contact modal
  editContactOpenButtonRef.addEventListener("click", () => {
    editContactBackdropRef.classList.toggle("is-hidden-edit-contact");
  });
  editContactCloseButtonRef.addEventListener("click", () => {
    editContactBackdropRef.classList.toggle("is-hidden-edit-contact");
  });
  // todo

  // !edit contact
  numEditContactRef.addEventListener("input", (evt) => {
    const inputValue = Number(evt.target.value);
    const localStorageData = JSON.parse(localStorage.getItem("contactsList"));

    if (
      inputValue > 0 &&
      inputValue <= localStorageData.length &&
      localStorageData.length > 0 &&
      localStorageData
    ) {
      editContactFormRef.elements.name.value =
        localStorageData[inputValue - 1].name;
      editContactFormRef.elements.surname.value =
        localStorageData[inputValue - 1].surname;
      editContactFormRef.elements.tel.value =
        localStorageData[inputValue - 1].tel;
      editContactFormRef.elements.email.value =
        localStorageData[inputValue - 1].email;
    } else alert("Перевірте значення яке ви ввели ❗️");
  });

  editContactFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const inputValue = Number(numEditContactRef.value);
    // console.log(inputValue);
    const localStorageData = JSON.parse(localStorage.getItem("contactsList"));
    // console.log(localStorageData);
    // console.log(editContactFormRef.elements.name.value);

    if (
      inputValue > 0 &&
      inputValue <= localStorageData.length &&
      localStorageData.length > 0 &&
      localStorageData
    ) {
      localStorageData[inputValue - 1].name =
        editContactFormRef.elements.name.value;
      localStorageData[inputValue - 1].surname =
        editContactFormRef.elements.surname.value;
      localStorageData[inputValue - 1].tel =
        editContactFormRef.elements.tel.value;
      localStorageData[inputValue - 1].email =
        editContactFormRef.elements.email.value;

      localStorage.setItem("contactsList", JSON.stringify(localStorageData));

      contactsListRef.innerHTML = ``;

      localStorageData.forEach((contact, idx) => {
        const currentIdx = idx + 1;
        contactsListRef.insertAdjacentHTML(
          "beforeend",
          `<li class=contacts__item>
        <h2>${currentIdx}</h2>
        <p>Name: ${contact.name}</p>
        <p>Surname: ${contact.surname}</p>
        <p>Tel: ${contact.tel}</p>
        <p>Email: ${contact.email}</p>
        </li>`
        );
      });
    }

    editContactBackdropRef.classList.add("is-hidden-edit-contact");
    evt.target.reset();
  });

  // todo open and close delete modal
  deleteContactOpenButtonRef.addEventListener("click", () => {
    deleteContactBackdropRef.classList.toggle("is-hidden-delete-contact");
  });
  deleteContactCloseButtonRef.addEventListener("click", () => {
    deleteContactBackdropRef.classList.toggle("is-hidden-delete-contact");
  });
  // todo

  // !delete contact
  numDeleteContactRef.addEventListener("input", (evt) => {
    const inputValue = Number(evt.target.value);
    const localStorageData = JSON.parse(localStorage.getItem("contactsList"));

    if (
      inputValue > 0 &&
      inputValue <= localStorageData.length &&
      localStorageData
    )
      return;
    else alert("Перевірте значення яке ви ввели ❗️");
  });

  deleteContactFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const inputValue = Number(numDeleteContactRef.value);
    const localStorageData = JSON.parse(localStorage.getItem("contactsList"));

    if (
      inputValue > 0 &&
      inputValue <= localStorageData.length &&
      localStorageData
    ) {
      localStorageData.splice(inputValue - 1, 1);
      localStorage.setItem("contactsList", JSON.stringify(localStorageData));

      contactsListRef.innerHTML = ``;
      localStorageData.forEach((contact, idx) => {
        const currentIdx = idx + 1;
        contactsListRef.insertAdjacentHTML(
          "beforeend",
          `<li class=contacts__item>
      <h2>${currentIdx}</h2>
      <p>Name: ${contact.name}</p>
      <p>Surname: ${contact.surname}</p>
      <p>Tel: ${contact.tel}</p>
      <p>Email: ${contact.email}</p>
      </li>`
        );
      });

      deleteContactBackdropRef.classList.add("is-hidden-delete-contact");
      evt.target.reset();
    }
  });
}
