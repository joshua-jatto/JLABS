import {projectData}  from "./data.js"

//handles rendering of projects from imported array
function displayProjects(projects) {
  const projectContainer = document.getElementById("project-posts");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className =
      " flex flex-col ring-2 md:ring-0  md:flex-row p-6 rounded-lg shadow-md md:w-[calc(50%-1rem)] mb-6 hover:shadow-lg hover:ring-2 ";

    projectElement.innerHTML = `
        <img src="${project.image}" alt="${
      project.title
    }" class="rounded-md  w-full md:w-[40%] object-cover mb-4 md:mb-0">
        <div class="flex flex-col justify-between md:ml-6">
          <h2 class="text-2xl font-bold text-purple-700">${project.title}</h2>
          <p class="text-gray-500 text-sm mb-2">Created ${project.date}</p>
          <p class="text-gray-700 mb-4">${project.description.substring(
            0,
            150
          )}...</p>
  
          <div class="flex items-center gap-2 mb-4">
          <a href="${
            project.repoLink
          }" target="_blank" class="text-purple-700 hover:underline mt-auto flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 mr-1">
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.2-1.4-4.2-1.4-.5-1.2-1.3-1.5-1.3-1.5-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 .1 1.6.6 1.9.8.1-.7.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.3-3.5-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a12 12 0 0 1 6.3 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8 1 1.3 2.1 1.3 3.5 0 4.9-2.8 5.9-5.5 6.2.4.3.8 1 .8 2.1v3c0 .4.3.8.8.6A12 12 0 0 0 12 .5z"/>
          </svg>
          View on GitHub
        </a>
        ${
          project.isLive
            ? `<a href="${project.liveLink}" target="_blank" class="text-green-500 ring-2 p-[4px] ring-fuchsia-700 rounded-xl font-semibold animate-pulse hover:underline mt-auto flex items-center pointer">
             View LIVE
        </a>`
            : ""
        }
          </div>
          
          
        </div>
      `;
    projectContainer.appendChild(projectElement);
  });
};

// renders projects dynamically to projects page
document.addEventListener("DOMContentLoaded", () => {
  displayProjects(projectData);
});
