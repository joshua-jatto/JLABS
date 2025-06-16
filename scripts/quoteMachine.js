const cyberSecurityTips = [
  "Use strong, unique passwords for every account.",
  "Use password managers.",
  "HTTPS tends to be more secure than HTTP.",
  "Enable two-factor authentication (2FA) wherever possible.",
  "Keep your OS, apps, and browsers updated.",
  "Avoid suspicious links and attachments in emails.",
  "Use a password manager to store credentials.",
  "Avoid public Wi-Fi unless you're using a VPN.",
  "Lock your screen when away from your device.",
  "Back up your data regularly to a secure location.",
  "Be cautious of phishing—verify senders.",
  "Never reuse passwords across sites.",
  "Install antivirus and anti-malware tools.",
  "Check app permissions before installation.",
  "Verify URLs before entering login details.",
  "Disable Bluetooth when not in use.",
  "Secure home Wi-Fi with WPA3 encryption.",
  "Use encrypted messaging for sensitive info.",
  "Log out of shared/public devices.",
  "Clear browser cache and cookies regularly.",
  "Audit your online presence frequently.",
  "Stay informed. Cybersecurity is ever-evolving."
];

let currentTip = 0;
const quoteBox = document.getElementById("quote-box");

function showNextTip() {
  if (!quoteBox) return;

  quoteBox.innerText = `> ${cyberSecurityTips[currentTip]}`;

  // Animate
  quoteBox.classList.remove("animate-fade-in");
  void quoteBox.offsetWidth; // Reflow to restart animation
  quoteBox.classList.add("animate-fade-in");

  // Next index
  currentTip = (currentTip + 1) % cyberSecurityTips.length;
}

// Start immediately
showNextTip();
setInterval(showNextTip, 5000);


document.addEventListener("DOMContentLoaded",()=>{
  quoteMachine(cyberSecurityTips)
})