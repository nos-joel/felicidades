//Here, I will watch every move you make
document.addEventListener("click", function(event){
var clickedElClass = event.target.className;
if(clickedElClass == "signIn_button")
{//got the username 
var typedUsername = document.getElementById("username");
alert("the username is: " + typedUsername.value);
}



});
