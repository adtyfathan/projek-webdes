import { news } from "./datas.js";

const newsWrapper = document.querySelector(".news-wrapper");

news.forEach(item => {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("news-container");
    contentDiv.innerHTML = `
        <img src="${item.image}" width="100" />
        <div class="news-content">
            <h4>${item.date}</h4>
            <h1>${item.title}</h1>
            <div>
                <button class="news-button">READ MORE</button>
            </div>
        </div>
    `;
    newsWrapper.appendChild(contentDiv);
})