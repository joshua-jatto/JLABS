(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=["Use strong, unique passwords for every account.","Use password managers.","HTTPS tends to be more secure than HTTP.","Enable two-factor authentication (2FA) wherever possible.","Keep your OS, apps, and browsers updated.","Avoid suspicious links and attachments in emails.","Use a password manager to store credentials.","Avoid public Wi-Fi unless you're using a VPN.","Lock your screen when away from your device.","Back up your data regularly to a secure location.","Be cautious of phishing—verify senders.","Never reuse passwords across sites.","Install antivirus and anti-malware tools.","Check app permissions before installation.","Verify URLs before entering login details.","Disable Bluetooth when not in use.","Secure home Wi-Fi with WPA3 encryption.","Use encrypted messaging for sensitive info.","Log out of shared/public devices.","Clear browser cache and cookies regularly.","Audit your online presence frequently.","Stay informed. Cybersecurity is ever-evolving."];let c=0;const i=document.getElementById("quote-box");function d(){i&&(i.innerText=`> ${l[c]}`,i.classList.remove("animate-fade-in"),i.offsetWidth,i.classList.add("animate-fade-in"),c=(c+1)%l.length)}d();setInterval(d,5e3);document.addEventListener("DOMContentLoaded",()=>{quoteMachine(l)});const m=[{title:"Roadmap.sh",description:"your guide to getting started",image:"/images/roadmaps.png",link:"https://roadmap.sh"},{title:"freecodecamp.org",description:"Learn to code — for free.Build projects.Earn certifications.",image:"/images/freecodecamp.png",link:"https://www.freecodecamp.org/"},{title:"Scrimba.com",description:"A brief overview or summary of the third article.",image:"/images/scrimba.png",link:"https://v2.scrimba.com/home"}],u=[{title:"JLABS-CSQD",author:"Joshua Jatto",date:"2025-06-15",image:"/images/jlabs-csqd-lp.png",description:"Gamified Quizzes for cyber security enthusiats",repoLink:"https://github.com/joshua-jatto/portfolio-website",isLive:!0,liveLink:"https://cyber-security-quiz-dash-9q80ryrgt-joshua-jattos-projects.vercel.app/"},{title:"Speedy Fabricator",author:"Joshua Jatto",date:"2024-2-24",image:"/images/JTHD.png",description:"Web App || PWA automation tool for aluminium window makers and enginners to simple fabricate windows💪",repoLink:"https://github.com/joshua-jatto/JLABS-Speedy_ACP",isLive:!0,liveLink:"https://joshua-jatto.github.io/JLABS-Speedy_ACP/"},{title:"Jatto Constructions",author:"Joshua Jatto",date:"2024-9-01",image:"/images/Speedy-banner.png",description:"A showcase/ info site for my business, built with: React, Swipper.js Tailwind CSS, and Vite.",repoLink:"https://github.com/joshua-jatto/jatto-constructions",isLive:!0,liveLink:"https://jatto-constructions.vercel.app/"}];document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("menuToggle"),n=document.getElementById("mobileNavLinks");t.addEventListener("click",()=>{t.textContent==="✕"?t.textContent="☰":t.textContent="✕",n.classList.toggle("hidden"),n.classList.add("flex"),n.classList.toggle("scale-100"),n.classList.toggle("opacity-100")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("darkModeToggle");localStorage.getItem("theme")==="night"?(document.body.classList.add("night"),t.textContent="☀️"):(document.body.classList.add("day"),t.textContent="🌙"),t.addEventListener("click",()=>{document.body.classList.contains("day")?(document.body.classList.replace("day","night"),t.textContent="☀️",localStorage.setItem("theme","night")):(document.body.classList.replace("night","day"),t.textContent="🌙",localStorage.setItem("theme","day"))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("wa-connect");t&&t.addEventListener("click",()=>{const n="+2348127967257",s=encodeURIComponent("Hello Joshua, can we collabrate on....?"),o=`https://wa.me/${n}?text=${s}`;window.location.href=o})});function p(t){const n=document.getElementById("project-posts");console.log(n),t.forEach(s=>{const o=document.createElement("div");o.className=" bg-zinc-750 glass rounded-lg shadow-md overflow-hidden max-w-sm w-full",o.innerHTML=`
    <div class="flex flex-col h-full">
      <img 
        src="${s.image}" 
        alt="${s.title}" 
        class="w-full h-36 sm:h-40 object-cover"
      >
      
      <div class="p-4 flex flex-col flex-grow text-left">
        <div class="mb-2">
          <h2 class="text-lg font-semibold text-white truncate">${s.title}</h2>
          <p class="text-zinc-500 text-xs mt-0.5">${s.date}</p>
        </div>
        
        <p class="text-sm text-white dark:text-zinc-400 mb-3 flex-grow">
          ${s.description.substring(0,120)}...
        </p>
        
        <div class="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-700 text-sm">
          <a 
            href="${s.repoLink}" 
            target="_blank" 
            class="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
          >
            <i class="fab fa-github"></i>
            <span>Source</span>
          </a>
          
          ${s.isLive?`
            <a 
              href="${s.liveLink}" 
              target="_blank" 
              class="text-primary hover:bg-primary/90  px-3 py-1.5 rounded-md font-medium flex items-center gap-1 transition-colors duration-200"
            >
              <i class="fas fa-rocket"></i>
              <span>Live</span>
            </a>`:`
            <span class="px-3 py-1.5 bg-gray-100 text-gray-500 dark:bg-zinc-800 dark:text-zinc-400 font-medium rounded-md">
              Coming Soon
            </span>`}
        </div>
      </div>
    </div>
  `,n.appendChild(o)})}document.addEventListener("DOMContentLoaded",()=>{p(u)});setInterval(()=>{document.getElementById("clock").textContent=new Date().toLocaleTimeString()},1e3);const g=[...u],f=g.slice(0,3);document.addEventListener("DOMContentLoaded",()=>{h("recent-projects",f),b("learn-coding",m)});function h(t,n){const s=document.getElementById(t);n.forEach(o=>{const e=document.createElement("div");e.className="w-full h-full transition-all duration-300 hover:scale-[1.02]",e.innerHTML=`
      <a href="${o.liveLink}" class=" bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500/50 rounded-xl p-4 h-full flex flex-col items-center justify-between gap-3 shadow-lg hover:shadow-green-500/20 hover:border-green-400 transition-all duration-300 group">
        <div class="flex flex-col items-center gap-3">
          <img src="${o.image}" alt="${o.title}" class="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg bg-gray-700 p-2 border border-green-500/30 group-hover:border-green-400 transition-colors">
          <h2 class="text-center text-white text-base md:text-sm font-bold mt-2">${o.title}</h2>
        </div>
        <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
        </div>
      </a>
    `,s.appendChild(e)})}function b(t,n){const s=document.getElementById(t);n.forEach(o=>{const e=document.createElement("div");e.className="w-full h-full transition-all duration-300 hover:scale-[1.02]",e.innerHTML=`
      <a href="${o.link}" class=" bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 h-full flex flex-col gap-4 shadow-lg hover:shadow-purple-500/20 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
        <div class="bg-gray-900/50 border border-gray-700 rounded-lg p-3 flex justify-center">
          <img src="${o.image}" alt="${o.title}" class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-contain rounded-md">
        </div>
        <div class="flex-1 flex flex-col">
          <h2 class="text-white text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">${o.title}</h2>
          <p class="text-gray-400 text-sm md:text-base flex-1 line-clamp-3 truncate(10)">${o.description}</p>
          <span class="mt-4 text-purple-500 font-medium text-sm flex items-center gap-1">
            Explore resource →
           
          </span>
        </div>
      </a>
    `,s.appendChild(e)})}
