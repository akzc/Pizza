const loginForm = document.getElementById("login-form");
const nameInput = document.getElementById("login-name"); // Переименовали, чтобы не путать с функцией
const passInput = document.getElementById("login-password");

const headerLogin = document.getElementById("header-login");
const headerName = document.getElementById("header-name");

// 1. Функция проверки авторизации (работает везде)
function checkAuth() {
  const currentUser = localStorage.getItem("currUser");

  if (currentUser) {
    // Пользователь ВОШЕЛ: прячем кнопку Login, показываем иконку профиля
    headerLogin.classList.add("hidden");
    headerName.classList.remove("hidden");
  } else {
    // Пользователь НЕ вошел: показываем кнопку Login, прячем профиль
    headerLogin.classList.remove("hidden");
    headerName.classList.add("hidden");
  }
}

// 2. Функция логики входа
function login(username, password) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let foundUser = users.find((user) => user.name === username);

  if (!foundUser) {
    alert("Пользователь не найден");
    return false;
  }
  if (foundUser.pass !== password) {
    alert("Пароль неверный");
    return false;
  }

  // Сохраняем просто чистую строку с именем
  localStorage.setItem("currUser", foundUser.name);
  return true;
}

// 3. БЕЗОПАСНАЯ проверка формы (работает только там, где форма есть)
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let names = nameInput.value.trim();
    let password = passInput.value.trim();

    if (names === "" || password === "") {
      alert("Тут пусто");
      return;
    } else if (password.length < 8) {
      alert("Пароль меньше 8 символов");
      return;
    }

    const isSuccess = login(names, password);
    if (isSuccess) {
      nameInput.value = "";
      passInput.value = "";
      window.location.href = "index.html";
    }
  });
}

// Запускаем проверку при загрузке страницы
checkAuth();
