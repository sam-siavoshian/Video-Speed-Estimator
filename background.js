// background.js
chrome.runtime.onInstalled.addListener(() => {
    // Set default settings including language
    chrome.storage.sync.set({
        position: "top-right",
        theme: "dark",
        timerFormat: "minutes",
        language: "en",
        enableAnimations: true,
    });
    console.log("Default settings saved.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "saveSettings") {
        chrome.storage.sync.set(request.settings, () => {
            console.log("Settings saved:", request.settings);
            sendResponse({ success: true });

            // Broadcast updated settings to all active tabs
            chrome.tabs.query({ url: "<all_urls>" }, (tabs) => {
                tabs.forEach((tab) => {
                    chrome.tabs.sendMessage(
                        tab.id,
                        { type: "updateSettings", settings: request.settings },
                        () => {
                            if (chrome.runtime.lastError) {
                                console.warn(`Tab ${tab.id} is inactive: ${chrome.runtime.lastError.message}`);
                            }
                        }
                    );
                });
            });
        });
        return true; // Required to indicate async response
    }
});