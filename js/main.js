$(document).ready(function() {
    $(".loading .spinner").fadeOut(4000 ,()=>{
        $(".loading").fadeOut(4000)
    } );
    
})

var userNameInput = document.getElementById("usernameInput") ;
var userEmailInput = document.getElementById("userEmailInput") ;
var userPasswordInput = document.getElementById("userPasswordInput") ;
var signup =  document.getElementById("signupBtn") ;
var containerData  ;
if(localStorage.getItem("users") == null) {
    containerData = [] ;
} else {
    containerData = JSON.parse(localStorage.getItem("users")) ;
}
function signUp() {
    validInputs() ;
     isExist() ;
    if(validInputs() == true &&  isExist() == false) {
        var user = {
            name:userNameInput.value ,
            email:userEmailInput.value,
            passw:userPasswordInput.value,
        }
        //   console.log(user) ;
          containerData.push(user) ;
          localStorage.setItem("users", JSON.stringify(containerData)) ;
          console.log(containerData) ;
          var confirmMsg = document.getElementById("confirmMsg");
          confirmMsg.classList.replace("d-none","d-block") ;
          var signin = document.getElementById("signin") ;
          signin.classList.replace("d-none","d-block") ;
    } else {
        var tryAgainMsg = document.getElementById("tryAgainMsg") ;
        tryAgainMsg.classList.replace("d-none","d-block") ;
    }
};

// Create function Validation Name
function ValidationInputName() {
   var usernameAlert = document.getElementById("usernameAlert");
    var regex = /^[A-Za-z]{4,10}(\s?[A-Za-z]{4,10})?$/ ;
    if(regex.test(userNameInput.value) == true && userNameInput.value != "") {
        userNameInput.classList.add("is-valid") ;
        userNameInput.classList.remove("is-invalid") ;
        usernameAlert.classList.replace("d-block","d-none");
        return true ;
    }
      else {
        userNameInput.classList.add("is-invalid") ;
        userNameInput.classList.remove("is-valid") ;
        usernameAlert.classList.replace("d-none","d-block");
        return false ;
      }
}
// Create function Validation Password
function ValidationInputPassword() {
    var userPasswordAlert = document.getElementById("userPasswordAlert");
     var regex = /^.{5,15}$/ ;
     if(regex.test(userPasswordInput.value) == true && userPasswordInput.value != "") {
        userPasswordInput.classList.add("is-valid") ;
        userPasswordInput.classList.remove("is-invalid") ;
        userPasswordAlert.classList.replace("d-block","d-none");
         return true ;
     }
       else {
        userPasswordInput.classList.add("is-invalid") ;
        userPasswordInput.classList.remove("is-valid") ;
        userPasswordAlert.classList.replace("d-none","d-block");
         return false ;
       }
 }
// Create function Validation Email
function ValidationInputEmail() {
    var userEmailAlert = document.getElementById("userEmailAlert");
     var regex = /@[a-z]{5,15}(\.com)$/ ;
     if(regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
        userEmailInput.classList.add("is-valid") ;
        userEmailInput.classList.remove("is-invalid") ;
        userEmailAlert.classList.replace("d-block","d-none");
         return true ;
     }
       else {
        userEmailInput.classList.add("is-invalid") ;
        userEmailInput.classList.remove("is-valid") ;
        userEmailAlert.classList.replace("d-none","d-block");
         return false ;
       }
 }
function validInputs() {
    ValidationInputName() ;
    ValidationInputPassword() ;
    ValidationInputEmail()

    if(ValidationInputName() == true && ValidationInputEmail() == true && ValidationInputPassword() == true)
    {
        return true ;
    } else {
        return false ;
    }
};
 function isExist() {

    var accountExistMsg = document.getElementById("accountExistMsg") ;
    for(var i = 0 ; i < containerData.length ; i++) {
        if(containerData[i].name.toLowerCase() == userNameInput.value.toLowerCase() || 
           containerData[i].email.toLowerCase() == userEmailInput.value.toLowerCase()) 
           {
            userNameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            accountExistMsg.classList.replace("d-none","d-block") ;
            return true ;
           } 
    } return false ;
 };

 var loginEmail = document.getElementById("loginEmail")
 function login() {
   var fillMsg = document.getElementById("fillMsg") ;
   var wrongMsg = document.getElementById("wrongMsg")
   for(var i = 0 ; i < containerData.length ; i++) {

    if(containerData[i].email.toLowerCase() == loginEmail.value.toLowerCase())
    {
        var loginBtn = document.getElementById("loginBtn");
        loginBtn.setAttribute("href", "welcome.html") ;
        var username = document.getElementById("username");
        username.innerHTML = userNameInput.value
    }
    else
             {
                 wrongMsg.classList.replace("d-none", "d-block");
              }
   }
}
