const loginForm = document.getElementById("login-form");
const name = document.getElementById("login-name");
const pass = document.getElementById("login-password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (name.value.trim() === "" || pass.value.trim() === "") {
    alert("Тут пусто");
    return;
  } else if (pass.value.trim().length < 8) {
    alert("Пороль Меньше 8");
    return;
  }
  const isSuccess = register(name.value.trim(), pass.value.trim());

  if (isSuccess) {
    name.value = "";
    pass.value = "";
    window.location.href = "login.html";
  }
});

function register(name, pass) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  localStorage.setItem("users", JSON.stringify({ name, pass }));
}
