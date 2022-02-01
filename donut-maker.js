// const newDonutCountDisplay = document.querySelector('.newDonutCountDisplay');

class DonutMaker {
    constructor(
        dountCount,
        autoClickerCount,
        autoClickerPrice,
        donutMultiplierCount,
        donutMultiplierPrice
        ) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerPrice = autoClickerPrice;
        this.donutMultiplierCount = donutMultiplerCount;
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
        return this.DonutMultiplierCount;
    }

    getDonutMultiplierPrice() {
        return this.DonutMultiplierPrice;
    }

    click() {
        if (this.donutMultiplierCount === 0) {
            this.donutCount += 1;
    }
    else {
        this.donutCount += Math.pow(1.2, this.donutMultiplierCount);
        this.donutCount = Math.round(this.donutCount);
    }
}

    buyDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierPrice) {
            this.donutCount -= this.donutMultiplierPrice;
            this.donutMultiplierCount += 1;
            this.donutMultiplierPrice += (this.donutMultiplierPrice * .1);
        }
    }   

    buyAutoClicker() {
        if (this.donutCount >= this.autoClickerPrice) {
            this.donutCount -= this.autoClickerPrice;
            this.autoClickerCount += 1;
            this.autoClickerPrice += (autoClickerPrice * .1);
        }
    }

    activateAutoClickers() {
         if (this.autoClickerCount > 0) {
             setInterval(() => {
                if (this.donutMultiplierCount === 0) {
                    this.donutCount += 1;
            }
            else {
                this.donutCount += Math.pow(1.2, this.donutMultiplierCount);
                this.donutCount = Math.round(this.donutCount);
             }
            }, 1000);
         }
    }

    // updateDonutCount() {
    //     newDonutCountDisplay.innerText = Math.round(this.donutCount);
    // }

    reset() {
        location.reload;
    }
}
export default DonutMaker;