(() => {
    function formatTime(seconds, format) {
        if (format === "hh:mm:ss") {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = Math.floor(seconds % 60);
            return `${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
        }
        return (seconds / 60).toFixed(2) + " min";
    }

    function updateEstimatedTime(video, settings) {
        const originalDuration = video.duration;
        const playbackRate = video.playbackRate || 1;
        const adjustedTime = formatTime(originalDuration / playbackRate, settings.timerFormat || "minutes");

        const durationSelectors = [
            ".ytp-time-duration", // YouTube
            ".vjs-duration",      // Video.js players
            ".duration",          // Generic
        ];
        
        let durationElement = null;
        
        for (const selector of durationSelectors) {
            // Search from the video player's root or its direct container
            durationElement = video.closest("div").querySelector(selector);
            if (durationElement) break;
        }

        if (durationElement) {
            if (!durationElement.querySelector(".adjusted-time")) {
                const adjustedSpan = document.createElement("span");
                adjustedSpan.className = "adjusted-time";
                adjustedSpan.style.marginLeft = "5px";
                adjustedSpan.style.fontSize = "12px";
                adjustedSpan.style.color = settings.theme === "dark" ? "white" : "black";
                adjustedSpan.innerText = `(Adjusted: ${adjustedTime})`;
                durationElement.parentElement.appendChild(adjustedSpan);
            } else {
                const adjustedSpan = durationElement.querySelector(".adjusted-time");
                adjustedSpan.innerText = `(Adjusted: ${adjustedTime})`;
            }
        } else {
            let displayElement = video.parentElement.querySelector(".estimated-time");

            if (!displayElement) {
                displayElement = document.createElement("div");
                displayElement.className = `estimated-time ${settings.theme}`;
                displayElement.style.position = "absolute";

                if (settings.position.includes("top")) {
                    displayElement.style.top = "10px";
                }

                if (settings.position.includes("left")) {
                    displayElement.style.left = "10px";
                } else {
                    displayElement.style.right = "10px";
                }

                displayElement.style.backgroundColor =
                    settings.theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)";
                displayElement.style.color = settings.theme === "dark" ? "white" : "black";
                displayElement.style.padding = "3px 6px";
                displayElement.style.borderRadius = "4px";
                displayElement.style.fontSize = "12px";
                displayElement.style.boxShadow = settings.enableAnimations
                    ? "0px 2px 4px rgba(0, 0, 0, 0.2)"
                    : "none";
                displayElement.style.transition = settings.enableAnimations
                    ? "transform 0.3s ease, box-shadow 0.3s ease"
                    : "none";

                video.parentElement.style.position = "relative";
                video.parentElement.style.overflow = "visible";

                video.parentElement.appendChild(displayElement);
            } else {
                displayElement.className = `estimated-time ${settings.theme}`;

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

                displayElement.style.backgroundColor =
                    settings.theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)";
                displayElement.style.color = settings.theme === "dark" ? "white" : "black";
                displayElement.style.boxShadow = settings.enableAnimations
                    ? "0px 2px 4px rgba(0, 0, 0, 0.2)"
                    : "none";
                displayElement.style.transition = settings.enableAnimations
                    ? "transform 0.3s ease, box-shadow 0.3s ease"
                    : "none";
            }

            displayElement.innerText = `Adjusted Time: ${adjustedTime}`;
        }
    }

    function applySettingsToVideos(settings) {
        const videoElements = document.querySelectorAll("video");
        videoElements.forEach((video) => {
            if (!video.dataset.observed) {
                video.dataset.observed = "true";
                video.addEventListener("ratechange", () => updateEstimatedTime(video, settings));
                video.addEventListener("loadedmetadata", () => updateEstimatedTime(video, settings));
            }
            updateEstimatedTime(video, settings);
        });
    }

    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "updateSettings") {
            applySettingsToVideos(message.settings);
            // If content script displays any UI elements, apply language here as well
        }
    });

    chrome.storage.sync.get(["position", "theme", "timerFormat", "enableAnimations", "language"], (settings) => {
        const defaultSettings = {
            position: "top-right",
            theme: "dark",
            timerFormat: "minutes",
            enableAnimations: true,
            language: "en"
        };
        applySettingsToVideos({ ...defaultSettings, ...settings });
    });
})();