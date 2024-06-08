import { data } from "./datas.js";

const modelContainer = document.querySelector(".model-content");
const modelName = document.querySelector(".model-name");
const image = document.querySelector(".model-image");

data.forEach(item => {
    const contentDiv = document.createElement("div");
    const contentItem = document.createElement("h1");
    contentItem.textContent = item.model;
    contentDiv.addEventListener("mouseover", () => {
        changeDisplay(item);
    })
    contentDiv.appendChild(contentItem);
    modelContainer.appendChild(contentDiv);
    // <div>
    //      <h1/>
    // </div>
})

function changeDisplay(item) {
    image.setAttribute("src", item.image);
    modelName.textContent = item.model;
}