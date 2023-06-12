window.onload = () => {
  let profile_name = document.getElementById("profile_name");
  let logout_login = document.getElementById("logout_login");

  let current_user = JSON.parse(localStorage.getItem("current_Myntra_user"));

  if (current_user) {
    let logoutStructure = ` <button class="logs" onclick="logout()">logout</button>`;
    logout_login.innerHTML = logoutStructure;
    profile_name.innerHTML = current_user.userName_myntra.toUpperCase();
  } else {
    window.location.href = "../login.html";
    let loginStructure = ` <button class="logs" onclick="login()">login</button>`;
    logout_login.innerHTML = loginStructure;
  }
};

function logout() {
  //   window.location.reload();
  localStorage.removeItem("current_Myntra_user");
  window.location.href = "../login.html";
}

function login() {
  window.location.href = "../login.html";
}
