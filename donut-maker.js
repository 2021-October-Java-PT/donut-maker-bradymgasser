class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerPrice, donutMultiplierCount, donutMultiplierPrice) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerPrice = autoClickerPrice;
        this.donutMultiplierCount = donutMultiplierCount;
        this.donutMultiplierPrice = donutMultiplierPrice;
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

    getDonutMultiplierCount() {
        return this.getDonutMultiplierCount;
    }

    getDonutMultiplierPrice() {
        return this.getDonutMultiplierPrice;
    }

    click() {
        if (this.donutMultiplierCount === 0){
        this.donutCount +1;
    } else {
        this.donutCount += (Math.pow(1.2, this.donutMultiplierCount));
    }

    buyAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice) {
            this.donutCount -= this.autoClickerPrice;
            this.autoClickerCount += 1;
            this.autoClickerPrice += (autoClickerPrice * .1)
        }
    }

    activateAutoClickers() {
        if (this.autoClickerCount > 0 && this.donutMultiplierCount === 0) {
            this.donutCount += this.autoClickerCount;
        } else if (this.autoClickerCount > 0 && this.donutMultiplierCount > 0) {
            this.donutCount += this.autoClickerCount * (Math.pow(1.2, this.donutMultiplierCount));
        }
    }

    buyDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierPrice) {
            this.donutCount -= this.donutMultiplierPrice;
            this.donutMultiplierCount += 1;
            this.donutMultiplierPrice += (donutMultiplierPrice * .1)
        }

    }
    }

export default DonutMaker;