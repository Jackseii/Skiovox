import { TimeDisplay } from "../../new-tab/time-display.js";
import { DateDisplay } from "../../new-tab/date-display.js";
import { BatteryDisplay } from "./battery.js";

let time = document.querySelector('.time')
let date = document.querySelector('.date')
let battery = document.querySelector('.battery')

new TimeDisplay(time)
new DateDisplay(date)

const HOME_URL = "chrome://newtab"
const EXTENSION_SETTINGS_URL = chrome.extension.getURL('options.html');
const AUDIO_URL = "chrome://os-settings/audio"

let [
    home,
    audio,
    settings
] = document.querySelectorAll('svg')

home.addEventListener('click', () => {
    chrome.tabs.create({ url: HOME_URL })
})

audio.addEventListener('click', () => {
    chrome.tabs.create({ url: AUDIO_URL })
})

settings.addEventListener('click', () => {
    chrome.tabs.create({ url: EXTENSION_SETTINGS_URL })
})

new BatteryDisplay(battery)