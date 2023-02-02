
function login() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "teamsegay" && password == "segay.vn") {
    swal({
      title: "Success!",
      text: "Login successfully",
      icon: "success",
    })
.then((success) => {
  swal(` ${success= window.location.href = "index_admin.html"}, ${success= window.localStorage.clear()}`);
})

   
  } else if(username !=='teamsegay' && password ==='segay.vn') {
    swal({
      title: "failed!",
      text: "Account is incorrect, please try again!",
      icon: "warning",
    });
  }
  else if(username ==='teamsegay' && password !=='segay.vn') {
    swal({
      title: "failed!",
      text: "Password is incorrect, please try again!",
      icon: "warning",
    });
  }
  else if(username ==='' && password ==='') {
    swal({
      title: "failed!",
      text: "Account and password is not blank, please try again!",
      icon: "warning",
    });
  }
  else  {
    swal({
      title: "failed!",
      text: "Account or password is incorrect, please try again!",
      icon: "warning",
    });
  }
}


