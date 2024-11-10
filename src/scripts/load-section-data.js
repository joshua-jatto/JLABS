import recentProjects from "./project-data.js";
import learnCodingArticles from "./articles-data.js";

const recent = [...recentProjects]; //spreads imported objects into an array
const topRecent = recent.slice(0, 3); //create new array with first three objects from recents array


document.addEventListener("DOMContentLoaded", () => {
  loadRecentprojects("recent-projects", topRecent);
  loadArticles("learn-coding", learnCodingArticles);
});

//handles loading of recent project to html
function loadRecentprojects(containerId, data) {
  const container = document.getElementById(containerId);
  container.className +=
    " md:overflow-x-hidden overflow-x-auto hover:overflow-x-auto flex flex-row justify-center items-start";

  data.forEach((item) => {
    const card = document.createElement("section");
    card.className =
      "flex justify-center mx-auto items-center rounded-lg overflow-hidden shadow-sm mt-4";

    card.innerHTML = `
      <a href="${item.liveLink}"  class="ring-2 ring-green-500 rounded-xl  flex flex-col p-2 items-center justify-center gap-2  hover:opacity-[.9] shadow-xl mt-2" target="_blank">
        <img src="${item.image}" alt="${item.title}" class="w-[40px] h-[40px] ring-3 ring-green-500 md:w-[120px] md:h-[120px] object-cover rounded-full">
        <h2 class="text-center text-black text-md md:text-[1rem] font-semibold mb-3 -ml-2  py-2">${item.title}</h2>
        <p class=" text-right text-sm text-green-300 md:text-[2rem] mt-0">✔</p>
      </a>
    `;

    container.appendChild(card);
  });
}

//handles loading of learning resources links to html
function loadArticles(containerId, data) {
  const container = document.getElementById(containerId);
  container.className +=
    " md:overflow-x-hidden overflow-x-auto hover:overflow-x-auto md:flex-row justify-center gap-2 mx-auto";

  data.forEach((item) => {
    const card = document.createElement("section");
    card.className =
      "flex flex-col rounded-lg overflow-hidden ring-gray-200 shadow-md";

    card.innerHTML = `
      <a href="${item.link}" class=" w-full p-4 hover:opacity-[.9] shadow-xl  rounded-md mt-2 hover:animate-pulse">
        <img src="${item.image}" alt="${item.title}" class="w-[100%] h-[200px] md:w-[250px] mx-auto object-contain rounded-md shadow-sm">
        <div class="truncate -mt-1">
          <h2 class="text-left text-black text-md font-semibold">${item.title}</h2>
          <p class="text-left text-sm text-wrap text-green-300 mt-0">${item.description.substring(0, 45)}...</p>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}
