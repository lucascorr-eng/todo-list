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

  const text = input.value.trim(); //value pega o valor do imput, o trim tira os espaços antes e depois
  if (!text) return;

  const li = document.createElement("li");
  li.className = "list";
  li.innerHTML = `
    <p>${text}</p>
    <button type="button" class="deleteList">
      <img src="assets/trash.svg" alt="">
    </button>
  `;

  list.appendChild(li); //pega o elemento criado li e coloca ele dentro do list (ul) como ultimo filho
  form.reset();
  box.style.display = "none";
})


list.addEventListener("click", (event) => {
  const btn = event.target.closest(".deleteList"); //esse monitoramento permite observar os novos elementos
  if (!btn) return; // se não tiver essa linha, qualquer região que for clicada vai apagar o item
  //ou seja, se o button for nulo encerra a função ali msm

  const itemList = document.querySelector(".list") 
  itemList.remove()
});


// aqui foi para eu entender como estava funcionando

// const deleteBtn = document.querySelector(".deleteList") 
// deleteBtn.addEventListener("click", () => {
//   alert("Você clicou no botão")
// }) 




//aqui eu consegui remover, mas somente os arquivos que já eram nativos do html, o que eram cirados parece q o event listener não conseguia monitorar

// const itemLits = document.querySelector(".list")
// deleteBtn.addEventListener("click", () => {
//   itemLits.remove()
// }) 
