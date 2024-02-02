// !add page refs
const pagesFormRef = document.querySelector(".pages__form");
const pagesInputRef = document.querySelector(".pages__input");
const pagesListRef = document.querySelector(".pages__list");
const pagesOpenButtonRef = document.querySelector("[data-button=pagesOpen]");
const pagesBackdropRef = document.querySelector("[data-backdrop=pages]");
const pagesCloseButtonRef = document.querySelector("[data-button=pagesClose]");
const titleInputRef = document.querySelector("[data-input=pagesTitle]");
const linkInputRef = document.querySelector("[data-input=pagesLink]");
const sendPagesFormRef = document.querySelector("[data-button=sendPagesModal]");
// !

// !edit page refs
const openEditPagesButtonRef = document.querySelector(
  "[data-button=pagesEdit]"
);
const closeEditPagesButtonRef = document.querySelector(
  "[data-button=pagesCloseEdit]"
);
const editPagesFormRef = document.querySelector(".edit-pages__form");
const editPagesTitleRef = document.querySelector("[data-input=editPagesTitle]");
const editPagesLinkRef = document.querySelector('[data-input="editPagesLink"]');
const editBackdropRef = document.querySelector("[data-backdrop=pagesEdit]");
const editNumPageRef = document.querySelector('[data-input="numEditPage"]');
// !

// !delete page refs
const openDeletePageButtonRef = document.querySelector(
  "[data-button=pagesDelete]"
);
const closeDeletePagesButtonRef = document.querySelector(
  "[data-button=pagesCloseDelete]"
);
const deleteBackdropRef = document.querySelector("[data-backdrop=pagesDelete]");
const deletePagesFormRef = document.querySelector(".delete-pages__form");
const deleteNumPageRef = document.querySelector("[data-input=numDeletePage]");
// !

// !function open and close modal
function togglePagesModal() {
  pagesBackdropRef.classList.toggle("is-hidden");
}
// !

export default function fourthTask() {
  pagesOpenButtonRef.addEventListener("click", togglePagesModal);
  pagesCloseButtonRef.addEventListener("click", togglePagesModal);

  // !add pages
  pagesFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let pagesArr = [];
    const dataForm = {
      title: titleInputRef.value,
      link: linkInputRef.value,
    };

    if (
      localStorage?.getItem("pagesList") ||
      localStorage.getItem("pagesList")
    ) {
      pagesArr = JSON.parse(localStorage.getItem("pagesList"));
    }
    pagesArr.push(dataForm);

    localStorage.setItem("pagesList", JSON.stringify(pagesArr));

    const currentIdx = pagesArr.length;
    pagesListRef.insertAdjacentHTML(
      "beforeend",
      `<li>${currentIdx}. <a href=${linkInputRef.value}>${titleInputRef.value}</a></li>`
    );
    pagesBackdropRef.classList.add("is-hidden");
    pagesFormRef.reset();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const pagesListData = JSON.parse(localStorage.getItem("pagesList"));
    // console.log(pagesListData);
    if (pagesListData) {
      pagesListData.forEach((page, idx) => {
        const currentIdx = idx + 1;
        pagesListRef.insertAdjacentHTML(
          "beforeend",
          `<li>${currentIdx}. <a href=${page.link}>${page.title}</a></li>`
        );
      });
    }
  });

  // !edit page
  openEditPagesButtonRef.addEventListener("click", () => {
    editBackdropRef.classList.toggle("is-hidden-edit");
  });
  closeEditPagesButtonRef.addEventListener("click", () => {
    editBackdropRef.classList.toggle("is-hidden-edit");
  });

  editNumPageRef.addEventListener("input", (evt) => {
    const inputValue = Number(evt.target.value);
    const localStorageData = JSON.parse(localStorage.getItem("pagesList"));

    if (
      inputValue >= 1 &&
      inputValue <= localStorageData.length &&
      localStorageData.length > 0 &&
      localStorageData
    ) {
      editPagesTitleRef.value = localStorageData[inputValue - 1].title;
      editPagesLinkRef.value = localStorageData[inputValue - 1].link;
    } else alert("Перевірте значення яке ви ввели");
  });

  editPagesFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const inputValue = Number(editNumPageRef.value);
    const localStorageData = JSON.parse(localStorage.getItem("pagesList"));

    if (
      inputValue >= 1 &&
      inputValue <= localStorageData.length &&
      localStorageData.length > 0 &&
      localStorageData
    ) {
      localStorageData[inputValue - 1].title = editPagesTitleRef.value;
      localStorageData[inputValue - 1].link = editPagesLinkRef.value;
      localStorage.setItem("pagesList", JSON.stringify(localStorageData));

      pagesListRef.innerHTML = ``;

      localStorageData.forEach((page, idx) => {
        const currentIdx = idx + 1;
        pagesListRef.insertAdjacentHTML(
          "beforeend",
          `<li>${currentIdx}. <a href=${page.link}>${page.title}</a></li>`
        );
      });
    }

    editBackdropRef.classList.add("is-hidden-edit");
    editPagesFormRef.reset();
  });

  // !delete page
  openDeletePageButtonRef.addEventListener("click", () => {
    deleteBackdropRef.classList.toggle("is-hidden-delete");
  });
  closeDeletePagesButtonRef.addEventListener("click", () => {
    deleteBackdropRef.classList.toggle("is-hidden-delete");
  });

  deleteNumPageRef.addEventListener("input", (evt) => {
    const localStorageData = JSON.parse(localStorage.getItem("pagesList"));

    if (
      evt.target.value > 0 &&
      evt.target.value <= localStorageData.length &&
      localStorageData
    )
      return;
    else alert("Перевірте значення яке ви ввели");
  });

  deletePagesFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const inputValue = Number(deleteNumPageRef.value);
    const localStorageData = JSON.parse(localStorage.getItem("pagesList"));

    if (
      inputValue > 0 &&
      inputValue <= localStorageData.length &&
      localStorageData
    ) {
      localStorageData.splice(inputValue - 1, 1);
      console.log(localStorageData);
      localStorage.setItem("pagesList", JSON.stringify(localStorageData));

      pagesListRef.innerHTML = ``;
      localStorageData.forEach((page, idx) => {
        const currentIdx = idx + 1;
        pagesListRef.insertAdjacentHTML(
          "beforeend",
          `<li>${currentIdx}. <a href=${page.link}>${page.title}</a></li>`
        );
      });
      deleteBackdropRef.classList.add("is-hidden-delete");
      deletePagesFormRef.reset();
    }
  });
}
