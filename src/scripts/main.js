// import {currentCV}  from "./myLinks.js"; //attempts to import cv link from external js file

const menuToggle = document.getElementById("menuToggle");
const darkModeToggle = document.getElementById("darkModeToggle");
const navLinks = document.getElementById("navLinks");
const mobileNavLinks = document.getElementById("mobileNavLinks");
const nav = document.getElementById("nav");
const waConnect = document.getElementById("wa-connect");

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

//darkmode functiona;ity and toggle
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

//appends cv link to html a-tag // connect with functionality
document.addEventListener("DOMContentLoaded", () => {
  const cv = document.getElementById("cv");
  //#TODO try storing cv link in an external var export file
  cv.href = "https://drive.google.com/file/d/1iDQ9RsUi1Dmyfdv8kRpyaJQab0hg22cS/view?usp=sharing";
});


waConnect.addEventListener('click',()=>{
  // Replace PHONE_NUMBER with the desired phone number, including country code.
  const phoneNumber = '+2348127967257'; 
  const message = encodeURIComponent('Hello Joshua, can we collabrate on....?');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.location.href = url;
});