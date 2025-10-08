const addTask = document.querySelector("#addTask")
const box = document.querySelector(".dialogBox")

addTask.addEventListener("click", () => {

  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block"
  } 
})

