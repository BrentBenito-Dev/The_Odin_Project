const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Red text that says "Hey I'm red"
const redText = document.createElement("p");
redText.setAttribute("style", "color: red;");
redText.textContent = "Hey I'm red";
document.body.appendChild(redText);

// Blue text that says "I'm a blue h3!"
const blueText = document.createElement("h3");
blueText.setAttribute("style", "color: blue;");
blueText.textContent = "I'm a blue h3!";
document.body.appendChild(blueText);

function addContentToContainer(){
    // div with a black border and pink background color 
    const divElement = document.createElement("div");
    divElement.setAttribute("style", "background: pink; border: 5px solid black;");

    const divHeader = document.createElement("h1");
    divHeader.textContent = "I'm in a div";

    const divParagraph = document.createElement("p");
    divParagraph.textContent = "ME TOO!";
    // adding the children before adding the parent to the container
    divElement.appendChild(divHeader);
    divElement.appendChild(divParagraph);

    // add it to the container
    container.appendChild(divElement);
}


function alertFunction(){
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", alertFunction);

const btnAddContent = document.querySelector("#btn-add-content");
btnAddContent.addEventListener("click", addContentToContainer);
