const SAVE_DELAY = 1000

let version = document.querySelector('.version')
let chrome_version = document.querySelector('.chrome_version')


version.textContent = "v" + chrome.runtime.getManifest().version
chrome_version.textContent =  "Crm v" + Number(navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)/)[2])

//Stealth
let stealthTextBox = document.querySelector(".stealth-textbox")
let stealthUrl = localStorage.stealthUrl

stealthTextBox.value = stealthUrl

let stealthWait = false
stealthTextBox.addEventListener("input", (event)=>{
    if (!stealthWait) {
        localStorage.stealthUrl = stealthTextBox.value
        stealthWait = true
        setTimeout(() => { stealthWait = false; localStorage.stealthUrl = stealthTextBox.value}, SAVE_DELAY);
    }
})

//Bottom Left Bar
const SHORTCUTS_URL = "chrome://extensions/shortcuts"
let [
    reset,
    keybinds
] = document.querySelectorAll('svg')

reset.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset Skiovox helper settings?")) {
        localStorage.clear()
        chrome.runtime.reload()
    }
})

keybinds.addEventListener('click', () => {
    chrome.tabs.create({ url: SHORTCUTS_URL })
})
