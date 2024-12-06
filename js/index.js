let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userpass = document.getElementById("userpass");
let users = JSON.parse(localStorage.getItem("users")) || [];let dis = document.getElementById("id")
let dip = document.getElementById("pd")


function signup() {
  if (validation()) {
    if (isexisit()) {
    dis.innerHTML="Email is already exist";
    dis.classList.remove("display"); 

    } else {

      dis.classList.add("display"); 
      let user = {

        name: userName.value,
        email: userEmail.value,
        pass: userpass.value
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
     
      dip.classList.remove("display"); 
    }
  }
  else{
    return
  }
}

function validation() {
  let regex = {
    msgname: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/,
    msgemail: /^[a-zA-Z][a-zA-Z0-9]+@gmail\.com$/,
    msgpass: /^[a-zA-Z0-9]{8,}$/
  };



  if (regex.msgname.test(userName.value) && regex.msgemail.test(userEmail.value) && regex.msgpass.test(userpass.value)) {
    dis.classList.add("display"); 
    return true;
  } else {
    dis.classList.remove("display"); 
    return false;
  }
}

function isexisit() {
  let user = {
    name: userName.value,
    email: userEmail.value,
    pass: userpass.value
  };

 
  for (let i = 0; i < users.length; i++) {
    if (user.email.toLowerCase() === users[i].email.toLowerCase()) {
      return true;  
    }
  }

  return false;  
}
function login() {
  let user = {
    email: userEmail.value,
    pass: userpass.value
  };

  let found = false;
  for (let i = 0; i < users.length; i++) {

    if (user.email.toLowerCase() === users[i].email.toLowerCase() && user.pass === users[i].pass) {
      dis.classList.remove("display");
      localStorage.setItem("sessionUsername", users[i].name);
      found = true;
      

      window.location.href = "../home.html";
   
      break;
    }
  }

  if (!found) {
    dip.classList.remove("display");
 
  }
}

    
    
function remove() {
  localStorage.removeItem("sessionUsername");
}



