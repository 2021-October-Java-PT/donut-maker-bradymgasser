class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerPrice, donutMultiplierCount, donutMultiplierPrice) {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierPrice = 10;
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
        if (this.donutMultiplierCount === 0 && this.autoClickerCount === 0){
        this.donutCount +1;
    } else {
        this.donutCount += (this.autoClickerCount * 1) += (Math.pow(1.2, this.donutMultiplierCount));
        this.donutCount = Math.round(this.donutCount);
    }
}

    buyAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice) {
            this.donutCount -= this.autoClickerPrice;
            this.autoClickerPrice += (autoClickerPrice * .1)
            this.autoClickerPrice = Math.round(this.autoClickerPrice);
        }
    }

    activateAutoClickers() {
        if (this.autoClickerCount > 0 && this.donutMultiplierCount === 0) {
            setInterval(() => {
            this.donutCount += this.autoClickerCount;
        }, 1000);
        } else if (this.autoClickerCount > 0 && this.donutMultiplierCount > 0) {
            setInterval(() => {
            (this.donutCount += this.autoClickerCount) * (Math.pow(1.2, this.donutMultiplierCount));
        }, 1000);
        }
    }

    buyDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierPrice) {
            this.donutCount = Math.round(this.donutCount -= this.donutMultiplierPrice);
            this.donutMultiplierCount += 1;
            this.donutMultiplierPrice = Math.round(this.donutMultiplierPrice += donutMultiplierPrice * .1);
        }
    }

    roundDonutCount() {
        this.donutGameCount.innterText = Math.round(this.donutCount);
    }
    reset() {
        location.reload;
    }
    }

export default DonutMaker;