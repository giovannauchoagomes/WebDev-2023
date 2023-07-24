const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const btn = document.querySelector("#alterna");
const shortcuts = document.querySelector("#shortcuts");
const as = shortcuts.querySelectorAll("a");

btn.addEventListener("click", function() {
    body.classList.toggle("darkmode");
  
    var txt = btn.innerText;
    if(txt == "Dark Mode"){
      btn.innerText = 'Light Mode';
      btn.style.borderColor = "gray";
      btn.style.backgroundColor = "lightgray";
      
      for(let s of sections){
        s.style.backgroundColor = "lightgray";
      };

      for(let a of as){
        a.style.color = "white";
      };
      
    } else{   
       btn.innerText = 'Dark Mode';
       btn.style.backgroundColor = "gray";
       btn.style.borderColor = "lightgray";

       
      for(let s of sections){
        s.style.backgroundColor = "white";
      };
       
       for(let a of as){
        a.style.color = "black";
      };
      }   
});

async function info(){
  let nome = document.querySelector("#user").innerText;
  let nome_user = document.querySelector("#nome");
  let foto_perfil = document.querySelector("#foto_perfil");
  let link = document.querySelector("#link");

  let result = await fetch("https://api.github.com/users/"+nome);
  let json = await result.json();
  
  foto_perfil.src = json.avatar_url;
  nome_user.innerText = json.name; 
  link.href = json.html_url;
}

info()