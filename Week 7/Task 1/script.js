const myP = document.getElementsByTagName('p');
myP[0].innerHTML = "<h1>This is h1 updated</h1>";
const btn = document.getElementById('btn');
btn.onclick = change;
function change(){
document.querySelector("div > p").innerHTML = "Hello World!";
}