function registerForm(event) {
  event.preventDefault();

  let myntra_reg_name = document.getElementById("reg_userName").value;
  let myntra_reg_email = document.getElementById("reg_Email").value;
  let myntra_reg_password = document.getElementById("reg_Password").value;
  let myntra_reg_Cpassword = document.getElementById("reg_Cpassword").value;

  //   console.log(
  //     `myntra user :${myntra_reg_user}, myntra Email :${myntra_reg_email}, myntra password: ${myntra_reg_password}, myntra confirmPassword :${myntra_reg_Cpassword}`
  //   );

  //   alert("form submitted");

  if (
    myntra_reg_name &&
    myntra_reg_email &&
    myntra_reg_password &&
    myntra_reg_Cpassword
  ) {
    if (myntra_reg_password.length >= 8 && myntra_reg_Cpassword.length >= 8) {
      if (myntra_reg_password === myntra_reg_Cpassword) {
        let myntra_reg_user =
          JSON.parse(localStorage.getItem("myntra_reg_users")) || [];

        let flag = false;

        for (let i = 0; i < myntra_reg_user.length; i++) {
          if (myntra_reg_email === myntra_reg_user[i].userEmail_myntra) {
            flag = true;
          }
        }

        if (!flag) {
          let myntra_reg_object = {
            userName_myntra: myntra_reg_name,
            userEmail_myntra: myntra_reg_email,
            userPassword_myntra: myntra_reg_password,
            userCpassword: myntra_reg_Cpassword,
          };
          myntra_reg_user.push(myntra_reg_object);
          localStorage.setItem(
            "myntra_reg_users",
            JSON.stringify(myntra_reg_user)
          );
          alert("Successfully registered");
          window.location.href = "./login.html";
          document.getElementById("reg_userName").value = "";
          document.getElementById("reg_Email").value = "";
          document.getElementById("reg_Password").value = "";
          document.getElementById("reg_Cpassword").value = "";
        } else {
          alert("user Email already registered please try log in");
          window.location.href = "./login.html";
        }
      } else {
        alert("password does not match try again");
      }
    } else {
      alert("Password should be atleast 8 or more Characters");
    }
  } else {
    alert("Please Fill all the Fields");
  }
}
