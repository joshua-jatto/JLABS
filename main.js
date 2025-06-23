import { projectData } from "/scripts/data.js";

//mobile-nav functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNavLinks = document.getElementById("mobileNavLinks");

  menuToggle.addEventListener("click", () => {
    // Toggle icon between ☰ and ✕
    menuToggle.textContent === "✕"
      ? (menuToggle.textContent = "☰")
      : (menuToggle.textContent = "✕");

    // Toggle visibility and apply transition effects
    mobileNavLinks.classList.toggle("hidden");
    mobileNavLinks.classList.add("flex");
    mobileNavLinks.classList.toggle("scale-100");
    mobileNavLinks.classList.toggle("opacity-100");
  });
});

//darkmode functionality and toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("darkModeToggle");

  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme or default to "day"
  if (savedTheme === "night") {
    document.body.classList.add("night");
    themeToggleButton.textContent = "☀️"; // Sun icon for night mode
  } else {
    document.body.classList.add("day");
    themeToggleButton.textContent = "🌙"; // Moon icon for day mode
  }

  // Toggle between day and night themes
  themeToggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("day")) {
      document.body.classList.replace("day", "night");
      themeToggleButton.textContent = "☀️";
      localStorage.setItem("theme", "night");
    } else {
      document.body.classList.replace("night", "day");
      themeToggleButton.textContent = "🌙";
      localStorage.setItem("theme", "day");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const waConnect = document.getElementById("wa-connect");
  if (waConnect) {
    waConnect.addEventListener("click", () => {
      // Replace PHONE_NUMBER with the desired phone number, including country code.
      const phoneNumber = "+2348127967257";
      const message = encodeURIComponent(
        "Hello Joshua, can we collabrate on....?"
      );
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      window.location.href = url;
    });
  }
});

//handles rendering of projects from imported array
function displayProjects(projects) {
  const projectContainer = document.getElementById("project-posts");
  console.log(projectContainer);

  projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className = " bg-zinc-750 glass rounded-lg shadow-md overflow-hidden max-w-sm w-full";

  projectElement.innerHTML = `
    <div class="flex flex-col h-full">
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        class="w-full h-36 sm:h-40 object-cover"
      >
      
      <div class="p-4 flex flex-col flex-grow text-left">
        <div class="mb-2">
          <h2 class="text-lg font-semibold text-white truncate">${project.title}</h2>
          <p class="text-zinc-500 text-xs mt-0.5">${project.date}</p>
        </div>
        
        <p class="text-sm text-white dark:text-zinc-400 mb-3 flex-grow">
          ${project.description.substring(0, 120)}...
        </p>
        
        <div class="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-700 text-sm">
          <a 
            href="${project.repoLink}" 
            target="_blank" 
            class="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
          >
            <i class="fab fa-github"></i>
            <span>Source</span>
          </a>
          
          ${project.isLive ? `
            <a 
              href="${project.liveLink}" 
              target="_blank" 
              class="text-primary hover:bg-primary/90  px-3 py-1.5 rounded-md font-medium flex items-center gap-1 transition-colors duration-200"
            >
              <i class="fas fa-rocket"></i>
              <span>Live</span>
            </a>` 
          : `
            <span class="px-3 py-1.5 bg-gray-100 text-gray-500 dark:bg-zinc-800 dark:text-zinc-400 font-medium rounded-md">
              Coming Soon
            </span>`
          }
        </div>
      </div>
    </div>
  `;

  projectContainer.appendChild(projectElement);
});
}


// renders projects dynamically to projects page
document.addEventListener("DOMContentLoaded", () => {
  displayProjects(projectData);
});


setInterval(() => {
  document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}, 1000);
