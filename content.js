// content.js
(() => {
    function updateEstimatedTime(video, settings) {
        const originalDuration = video.duration;
        const playbackRate = video.playbackRate;

        // Validate playbackRate to avoid division by zero
        const validPlaybackRate = playbackRate > 0 ? playbackRate : 1;
        const adjustedTime = (originalDuration / validPlaybackRate / 60).toFixed(2); // Convert to minutes

        // Find existing duration display in video controls
        // Note: This approach may need adjustments based on different websites' video player structures
        // Attempt to find a common selector for duration display
        const durationSelectors = [
            '.ytp-time-duration', // YouTube
            '.vjs-duration',      // Video.js players
            '.duration',          // Generic
        ];

        let durationElement = null;

        for (const selector of durationSelectors) {
            durationElement = video.parentElement.querySelector(selector);
            if (durationElement) break;
        }

        if (durationElement) {
            // Check if adjusted time is already added
            if (!durationElement.querySelector('.adjusted-time')) {
                const adjustedSpan = document.createElement('span');
                adjustedSpan.className = 'adjusted-time';
                adjustedSpan.style.marginLeft = '5px';
                adjustedSpan.style.fontSize = '12px';
                adjustedSpan.style.color = settings.theme === "dark" ? "white" : "black";
                adjustedSpan.innerText = `(Adjusted: ${adjustedTime} min)`;
                durationElement.parentElement.appendChild(adjustedSpan);
            } else {
                // Update existing adjusted time
                const adjustedSpan = durationElement.querySelector('.adjusted-time');
                adjustedSpan.innerText = `(Adjusted: ${adjustedTime} min)`;
            }
        } else {
            // Fallback: If no duration element found, append to video container
            let displayElement = video.parentElement.querySelector(".estimated-time");

            if (!displayElement) {
                displayElement = document.createElement("div");
                displayElement.className = `estimated-time ${settings.theme}`;
                displayElement.style.position = "absolute";

                // Set position based on settings
                if (settings.position.includes("top")) {
                    displayElement.style.top = "10px";
                }

                if (settings.position.includes("left")) {
                    displayElement.style.left = "10px";
                } else {
                    displayElement.style.right = "10px";
                }

                // Set background and text color based on theme
                displayElement.style.backgroundColor =
                    settings.theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)";
                displayElement.style.color = settings.theme === "dark" ? "white" : "black";

                // Additional styles
                displayElement.style.padding = "3px 6px";
                displayElement.style.borderRadius = "4px";
                displayElement.style.fontSize = "12px";
                displayElement.style.boxShadow = settings.enableAnimations
                    ? "0px 2px 4px rgba(0, 0, 0, 0.2)"
                    : "none";
                displayElement.style.transition = settings.enableAnimations
                    ? "transform 0.3s ease, box-shadow 0.3s ease"
                    : "none";

                // Ensure parent element allows visibility
                video.parentElement.style.position = "relative";
                video.parentElement.style.overflow = "visible"; // Ensure displayElement is visible

                video.parentElement.appendChild(displayElement);
            } else {
                // Update theme class
                displayElement.className = `estimated-time ${settings.theme}`;

                // Update position based on settings
                displayElement.style.top = "";
                displayElement.style.left = "";
                displayElement.style.right = "";

                if (settings.position.includes("top")) {
                    displayElement.style.top = "10px";
                }

                if (settings.position.includes("left")) {
                    displayElement.style.left = "10px";
                } else {
                    displayElement.style.right = "10px";
                }

                // Update background and text color based on theme
                displayElement.style.backgroundColor =
                    settings.theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)";
                displayElement.style.color = settings.theme === "dark" ? "white" : "black";

                // Update box shadow based on animations setting
                displayElement.style.boxShadow = settings.enableAnimations
                    ? "0px 2px 4px rgba(0, 0, 0, 0.2)"
                    : "none";

                // Update transition based on animations setting
                displayElement.style.transition = settings.enableAnimations
                    ? "transform 0.3s ease, box-shadow 0.3s ease"
                    : "none";
            }

            // Update the display text
            displayElement.innerText = `Adjusted Time: ${adjustedTime} min`;
        }
    }

    function applySettingsToVideos(settings) {
        const videoElements = document.querySelectorAll("video");
        videoElements.forEach((video) => {
            if (!video.dataset.observed) {
                video.dataset.observed = "true"; // Mark video as observed
                video.addEventListener("ratechange", () => updateEstimatedTime(video, settings));
                video.addEventListener("loadedmetadata", () => updateEstimatedTime(video, settings));
            }
            updateEstimatedTime(video, settings); // Update time display
        });
    }

    // Listen for settings updates
    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "updateSettings") {
            applySettingsToVideos(message.settings);
        }
    });

    // Initial setup
    chrome.storage.sync.get(["position", "theme", "enableAnimations"], (settings) => {
        const defaultSettings = {
            position: "top-right",
            theme: "dark",
            enableAnimations: true,
        };
        applySettingsToVideos({ ...defaultSettings, ...settings });
    });
})();
