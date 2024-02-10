function setCurrentTab() {
    chrome.tabs.query({active: false}, ([tab]) => {
        if (tab.url.includes("https://support.google.com/chromebook/?visit_id")){
            chrome.tabs.remove(tab.id)
        }
    });
}

function setFullscreen(bool) {
    chrome.windows.getLastFocused((window) => {
      let state = bool
        ? chrome.windows.WindowState.MAXIMIZED
        : chrome.windows.WindowState.NORMAL
      chrome.windows.update(window.id, { state })
    })
  }



chrome.windows.onCreated.addListener(()=>{
  chrome.tabs.create({url: "chrome://newtab", selected: false}, myTab => {
    function listener(tabId, changeInfo, tab) {
        // make sure the status is 'complete' and it's the right tab
        if (tabId === myTab.id && changeInfo.status == 'complete') {
            setCurrentTab()
            setFullscreen(false)
            setFullscreen(true)
            chrome.tabs.onUpdated.removeListener(listener);
        }
    };
    chrome.tabs.onUpdated.addListener(listener);
  });
})

