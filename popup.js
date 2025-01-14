document.addEventListener("DOMContentLoaded", () => {
    // Tab Navigation
    const tabs = document.querySelectorAll(".sidebar ul li");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
  
        tab.classList.add("active");
        tabContents[index].classList.add("active");
      });
    });
  
    // Save Settings
    document.getElementById("test").addEventListener("click", () => {
      const position = document.getElementById("position").value;
      const theme = document.getElementById("theme").value;
      const timerFormat = document.getElementById("timer-format").value;
  
      const settings = { position, theme, timerFormat };
  
      chrome.runtime.sendMessage({ type: "saveSettings", settings }, (response) => {
        if (response.success) {
          alert("Settings applied!");
        } else {
          alert("Failed to apply settings.");
        }
      });
    });
  
    // Reset to Defaults
    document.getElementById("reset").addEventListener("click", () => {
      chrome.storage.sync.set({
        position: "top-right",
        theme: "dark",
        timerFormat: "minutes"
      }, () => {
        alert("Settings reset to defaults!");
        window.location.reload();
      });
    });
  
    // Load Settings
    chrome.storage.sync.get(["position", "theme", "timerFormat"], (settings) => {
      document.getElementById("position").value = settings.position || "top-right";
      document.getElementById("theme").value = settings.theme || "dark";
      document.getElementById("timer-format").value = settings.timerFormat || "minutes";
    });
  });
  