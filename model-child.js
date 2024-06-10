const modelChild = document.querySelector(".model-child-wrapper");

function getQueryParams() {
    return new URLSearchParams(window.location.search);
}

window.onload = function () {
    const params = getQueryParams();
    // console.log(params.get("model"))
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("model-child-container");
    contentDiv.innerHTML = `
        <h4>${params.get("brand")}</h4>
        <h1>${params.get("model")}</h1>
        <p>${params.get("power")}</p>
        <p>${params.get("max_speed")}</p>
        <p>${params.get("price")}</p>
    `;
    modelChild.appendChild(contentDiv);
}



