class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerPrice) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerPrice = autoClickerPrice;
    }

    getDounutCount() {
        return this.donutCount;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getAutoClickerPrice() {
        return this.autoClickerPrice;
    }

    click() {
        this.donutCount +1;
    }

    buyAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice) {
            this.donutCount -= this.autoClickerPrice;
            this.autoClickerCount += 1;
            this.autoClickerPrice += (autoClickerPrice * 1.1)
        }
    }

    activateAutoClickers() {
        if (this.autoClickerCount >= 1) {
            this.donutCount += this.autoClickerCount;
        }
    }
}

export default DonutMaker;