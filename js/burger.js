document.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("headerName ");
  const profileMenu = document.getElementById("profileMenu");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userNameElement = document.getElementById("user-name");

  // 1. Установка имени пользователя (брать из localStorage или базы данных)
  const savedUserName = localStorage.getItem("currUser") || "Гость";
  userNameElement.textContent = savedUserName;

  // 2. Открытие/закрытие меню при клике на иконку
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle("active");
  });

  // Закрытие меню при клике в любую другую область экрана
  document.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
      profileMenu.classList.remove("active");
    }
  });
});
