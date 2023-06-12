function signInForm(event) {
  event.preventDefault();

  let login_email = document.getElementById("login_email_myntra").value;
  let login_password = document.getElementById("login_password_myntra").value;

  if (login_email && login_password) {
    let myntra_check_user = JSON.parse(
      localStorage.getItem("myntra_reg_users")
    );
    let flag = false;
    let current_myntra_user;

    for (let i = 0; i < myntra_check_user.length; i++) {
      if (
        login_email === myntra_check_user[i].userEmail_myntra &&
        login_password === myntra_check_user[i].userPassword_myntra
      ) {
        flag = true;
        current_myntra_user = myntra_check_user[i];
      }
    }
    if (flag) {
      localStorage.setItem(
        "current_Myntra_user",
        JSON.stringify(current_myntra_user)
      );
      alert("logged in Successfully");
      window.location.href = "../home.html";
    } else {
      alert("invalid details please try again");
      document.getElementById("login_email_myntra").value = "";
      document.getElementById("login_password_myntra").value = "";
    }
  } else {
    alert("please fill all the field");
  }
}
