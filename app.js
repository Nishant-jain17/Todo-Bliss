const inputBox = document.querySelector("#inputbox");
const listContainer = document.querySelector("#listContainer");

function addTask() {
  if (inputBox.value === "") {
    alert("Enter Atleast One task ");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeData();
    }
    e.preventDefault();
  },
  false
);

function storeData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function ShowData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
ShowData();
