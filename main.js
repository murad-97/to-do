const form = document.querySelector("#form");

const section = document.querySelector(".container");

const input = document.querySelector("input");

const heart = `<span class="icon-checkbox-checked"></span>`;

const list = document.getElementById("list")



form.addEventListener("submit", (eo) => {
  if (input.value=="") {
    eo.preventDefault();
    alert("fill the feald");

    
  } else {
    
    eo.preventDefault();
  const task = `<div  class="task">
<span class="icon-star icon"></span>

<p lang="ar" class="text">${input.value}</p>

<div>
  
  

  <span class="icon-trash-o icon"></span>
  <span class="icon-checkbox-unchecked"></span>
</div>
</div>`;
  
  section.parentElement.classList.remove("dn")
  
  section.innerHTML += task;
  localStorage.setItem("task",JSON.stringify(task))

 
  input.value=""
  }
  
});

section.addEventListener("click", (eo) => { 
switch (eo.target.className) {
  case "icon-trash-o icon":
    if (section.childElementCount === 1) {
      section.parentElement.classList.add("dn");
    }
    
     eo.target.parentElement.parentElement.remove();
    break;
    case "icon-checkbox-unchecked":
      eo.target.classList.add("dn");
      eo.target.parentElement.parentElement
        .getElementsByClassName("text")[0]
        .classList.add("text-decoration");
      eo.target.parentElement.innerHTML += heart;
    break;
    case "icon-checkbox-checked":
      eo.target.parentElement
      .getElementsByClassName("icon-checkbox-unchecked")[0]
      .classList.remove("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("text")[0]
      .classList.remove("text-decoration");
    eo.target.classList.add("dn");
    
    break;
    case "icon-star icon":
      eo.target.classList.add("icon-star2");
      section.prepend(eo.target.parentElement)
    break;
    case "icon-star icon icon-star2":
      eo.target.classList.remove("icon-star2")
    break;


  default:
    break;
}
});


