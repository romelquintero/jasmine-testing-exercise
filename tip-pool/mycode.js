function appendDeleteBtn(tr) {
  let newTd = document.createElement("td");
  newTd.className = "deleteBtn";
  newTd.innerText = "X";

  newTd.addEventListener("click", function () {
    removeElement(tr);
  });

  tr.append(newTd);
}

function removeElement(ele) {
  ele.parentNode.removeChild(ele);
}

// function appendTd(tr, value) {
//   let newTd = document.createElement("td");
//   newTd.innerText = value;

//   tr.append(newTd);
// }
