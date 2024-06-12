import { news } from "./datas.js"

const newsContent = document.getElementById("news-content");

function getQueryParams() {
    return new URLSearchParams(window.location.search);
}

window.onload = function () {
    const params = getQueryParams();
    // headerImg.setAttribute("src", params.get("image"));
    let contentDiv = document.createElement("div");
    contentDiv.innerHTML = `
        <h1>${params.get("title")}</h1>
        <img src="${params.get("image")}"/>
        <p>${params.get("date")}</p>
        <p>${params.get("description")}</p>
        <h1>RELATED NEWS</h1>
    `;

    newsContent.appendChild(contentDiv);

    for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * news.length)
        const randomDiv = document.createElement("div");
        randomDiv.innerHTML = `
            <div class="news-container">
                <img src = "${news[randomNum].image}" width = "100" />
                <div class="news-content">
                    <h4>${news[randomNum].date}</h4>
                    <h1>${news[randomNum].title}</h1>
                    <div>
                        <button class="news-button">READ MORE</button>
                    </div>
                </div>
            </div>
        `;
        newsContent.appendChild(randomDiv);
    }

    
}



// <div class="news-container">
//     <img src = "${item.image}" width = "100" />
//     <div class="news-content">
//         <h4>${item.date}</h4>
//         <h1>${item.title}</h1>
//         <div>
//             <button class="news-button">READ MORE</button>
//         </div>
//     </div>
// </div>

// <div class="news-container">
//     <img src = "${item.image}" width = "100" />
//     <div class="news-content">
//         <h4>${item.date}</h4>
//         <h1>${item.title}</h1>
//         <div>
//             <button class="news-button">READ MORE</button>
//         </div>
//     </div>
// </div>