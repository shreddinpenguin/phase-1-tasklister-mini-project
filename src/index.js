document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    renderTask(e.target["new-task-description"].value)
    form.reset()
  })
  function renderTask (task) {
    let li = document.createElement("li")
    li.textContent = `${task} `
    document.querySelector("#tasks").appendChild(li)
    let btn = document.createElement("button")
    btn.textContent = "x"
    li.appendChild(btn)
    btn.addEventListener("click", (e) => {
      e.target.parentNode.remove()
    })
  }
});
