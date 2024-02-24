class BatteryDisplay {
    eventNames = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];

    constructor(element) {
        this.element = element;
        this.render();
        this.listenForUpdates()
    }

    async getBattery() {
        let battery = await navigator.getBattery()
            .catch(() => reportError("Error reading battery."));

        battery.secsLeft = Math.min(battery.chargingTime, battery.dischargingTime)
        battery.isFull = battery.level === 1

        return battery
    }

    async render() {
        let battery = await this.getBattery()
        this.element.textContent = this.getPercentMessage(battery) + this.getChargingMessage(battery)
    }

    getPercentMessage(battery) {
        return `${Math.round(battery.level * 100)}%`
    }

    getChargingMessage(battery) {
        return battery.charging ? " ~" : ""
    }


    async listenForUpdates() {
        let battery = await this.getBattery();

        for (let eventName of this.eventNames) {
            battery.addEventListener(eventName, this.render.bind(this))
        }
    }
}

export { BatteryDisplay }