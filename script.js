const addTask = document.querySelector("#addTask")
const box = document.querySelector(".dialogBox")

addTask.addEventListener("click", () => {

  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block"
  } 
})


const closeDialog = document.querySelector(".close")

closeDialog.addEventListener("click", () => {
  if (box.style.display === "block") {
    box.style.display = "none"
  }
})


const form = document.getElementById("formAdd");
const input = document.getElementById("descInput");
const list = document.getElementById("toDoList");


form.addEventListener("submit", (e) => {
  e.preventDefault();                 // <— impede comportamento padrão

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "list";
  li.innerHTML = `
    <p>${text}</p>
    <button id="deleteList">
      <img src="assets/trash.svg" alt="">
    </button>
  `;

  list.appendChild(li);
  form.reset();
  box.style.display = "none";
})
