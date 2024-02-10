function setCurrentTab() {
    chrome.tabs.query({active: true}, ([tab]) => {
        if (tab.url.includes("https://support.google.com/chromebook/?visit_id")){
            chrome.tabs.update(tab.id, { url: "chrome://newtab" })
        }
    });
}

setCurrentTab()