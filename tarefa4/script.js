const body = document.querySelector("body");
const btn = document.querySelector("#alterna");

btn.addEventListener("click", function() {
    body.classList.toggle("darkmode");
    let txt = btn.innerText;
    if(txt == "Dark Mode"){
      btn.innerText = 'Light Mode';
      btn.style.borderColor = "gray";
      btn.style.backgroundColor = "lightgray";
      } else{
       btn.innerText = 'Dark Mode';
       btn.style.backgroundColor = "gray";
       btn.style.borderColor = "lightgray";
      }   
});
