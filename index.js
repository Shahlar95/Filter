let main = document.getElementsByClassName("main");
let main2 = document.getElementsByClassName("main2");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let lists = document.getElementById("list-box");
let search = document.getElementsByClassName("search");
let searchBar = document.getElementsByClassName("search-bar");
let filterTodo = document.getElementById("filter");
let btn2 = document.getElementById("btn2");

if (JSON.parse(localStorage.getItem("local")) === null) {
  localStorage.setItem("local", JSON.stringify([]));
}

function writer() {
  let newArr = JSON.parse(localStorage.getItem("local"));
  lists.innerHTML = "";
  newArr.forEach((element) => {
    lists.innerHTML += `<li class = "listElement">
        <p >${element}</p><i class="fa-solid fa-xmark" onclick = deleteTodo("${element}") ></i>
         </li>`;
  });
}   

btn.addEventListener("click", () => {
  let arr = JSON.parse(localStorage.getItem("local"));
  if (input.value === "" || input.value === " ") {
    alert("Hec bir element daxil etmemisiniz")
    
  }else{
    localStorage.setItem("local", JSON.stringify([...arr, input.value]));
    
  }
  writer();
  input.value="";
});

function deleteTodo(e) {
   let del =  JSON.parse(localStorage.getItem("local"));
   let newArr = del.filter(item => item !== e );
   localStorage.setItem("local",JSON.stringify(newArr));
   writer();
}

filterTodo.addEventListener("keyup", (e)=>{
  
  let rightFilter = e.target.value.toLowerCase();
  let listElement = document.querySelectorAll(".listElement");

  listElement.forEach((x)=>{

      let text = x.textContent.toLowerCase();
      if (text.indexOf(rightFilter) === -1 ) {

        x.setAttribute("style", "display : none")
        
      }
      else{
        x.setAttribute("style", "display : block, space-between")
      }
  })

 
});

btn2.addEventListener("click", () => {
  let listElement = document.querySelectorAll(".listElement");
  filterTodo.value = "";
  listElement.forEach((x) => {
    x.style.display = "flex";

  });
});

writer();

