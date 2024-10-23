btn = document.getElementById("log");
username = document.getElementById("usr").value;
password = document.getElementById("pass").value;

var storeduser;
var storedpassword;

btn.onclick = function() {

if(storeduser == username && storedpassword == password)
{
    alert('Login successful!');
    window.location.href = 'index.html';
}
else {
    alert('Invalid credentials');
}




}