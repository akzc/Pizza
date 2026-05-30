const addPizzali = document.querySelector(".add-pizza-li");
const allButtons = document.querySelectorAll(".add-pizza-ul button");

allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    allButtons.forEach((otherBtn) => {
      otherBtn.classList.remove("add-ul-btn_1", "btn-orange");
    });

    btn.classList.add("add-ul-btn_1", "btn-orange");
  });
});
