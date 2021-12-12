function Add_User(){
    user=document.getElementById("user_input").value;
    localStorage.setItem("User", user);
    window.location="community.html";
}