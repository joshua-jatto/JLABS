import {projectData} from "./data.js";
import {learnCodingArticles} from "./data.js";

const recent = [...projectData]; //spreads imported objects into an array
const topRecent = recent.slice(0, 3); //create new array with first three objects from recents array


document.addEventListener("DOMContentLoaded", () => {
  loadRecentprojects("recent-projects", topRecent);
  loadArticles("learn-coding", learnCodingArticles);
});

// Handles loading of recent projects to HTML
function loadRecentprojects(containerId, data) {
  const container = document.getElementById(containerId);
  // Remove existing flex classes to use grid layout
  // container.classList.remove("flex", "flex-row", "justify-center");
  
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "w-full h-full transition-all duration-300 hover:scale-[1.02]";
    
    card.innerHTML = `
      <a href="${item.liveLink}" class=" bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500/50 rounded-xl p-4 h-full flex flex-col items-center justify-between gap-3 shadow-lg hover:shadow-green-500/20 hover:border-green-400 transition-all duration-300 group">
        <div class="flex flex-col items-center gap-3">
          <img src="${item.image}" alt="${item.title}" class="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg bg-gray-700 p-2 border border-green-500/30 group-hover:border-green-400 transition-colors">
          <h2 class="text-center text-white text-base md:text-sm font-bold mt-2">${item.title}</h2>
        </div>
        <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}

// Handles loading of learning resources links to HTML
function loadArticles(containerId, data) {
  const container = document.getElementById(containerId);
  // Remove existing flex classes to use grid layout
  // container.classList.remove("flex", "flex-col", "items-center");
  
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "w-full h-full transition-all duration-300 hover:scale-[1.02]";
    
    card.innerHTML = `
      <a href="${item.link}" class=" bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 h-full flex flex-col gap-4 shadow-lg hover:shadow-purple-500/20 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
        <div class="bg-gray-900/50 border border-gray-700 rounded-lg p-3 flex justify-center">
          <img src="${item.image}" alt="${item.title}" class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-contain rounded-md">
        </div>
        <div class="flex-1 flex flex-col">
          <h2 class="text-white text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">${item.title}</h2>
          <p class="text-gray-400 text-sm md:text-base flex-1 line-clamp-3 truncate(10)">${item.description}</p>
          <span class="mt-4 text-purple-500 font-medium text-sm flex items-center gap-1">
            Explore resource
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}