function setFullscreen(bool) {
    chrome.windows.getLastFocused((window) => {
      let state = bool
        ? chrome.windows.WindowState.MAXIMIZED
        : chrome.windows.WindowState.NORMAL
      chrome.windows.update(window.id, { state })
    })
  }

setFullscreen(false)
setFullscreen(true)