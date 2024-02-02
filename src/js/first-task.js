const checkboxesRef = document.querySelectorAll(".checkbox");

export default function firstTask() {
  checkboxesRef.forEach((checkbox) => {
    checkbox.checked = false;

    checkbox.addEventListener("click", () => {
      const checkboxId = checkbox.id;
      const isChecked = checkbox.checked;

      localStorage.setItem(`todo_list_${checkboxId}`, isChecked);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    checkboxesRef.forEach((checkbox) => {
      const checkboxId = checkbox.id;
      const checkboxValue = localStorage.getItem(`todo_list_${checkboxId}`);

      if (checkboxValue === "true") {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
  });
}
