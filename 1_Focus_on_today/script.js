const checkBoxList = document.querySelectorAll(".custom_checkbox");

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("completed");
  });
});
