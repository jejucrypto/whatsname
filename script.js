let username;

document.getElementById("myLogic").onclick = function(){
  username = document.getElementById("myInput").value;
  document.getElementById("myh1").textContent = 'Hello ${username}';
}