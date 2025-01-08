const itemList = document.querySelector("ul");
const btnAddItem = document.querySelector("#add-item");
const inputName = document.querySelector("#item");

function addItem(){
    const itemName = inputName.value;
    inputName.value = "";
    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    const btnDelete = document.createElement("button");

    listItem.appendChild(itemSpan);
    listItem.appendChild(btnDelete);
    itemSpan.textContent = itemName;
    btnDelete.textContent = "Delete";

    itemList.appendChild(listItem);
    inputName.focus();

}

btnAddItem.addEventListener("click", addItem);


