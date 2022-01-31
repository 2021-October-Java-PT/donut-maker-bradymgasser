const newDonutCount = document.querySelector('.newDonutCount');

class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
        this.donutMultiplierCount = 1;
        this.donutMultiplierPrice = 0;
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
        this.donutMultiplierCount = this.donutMultiplierCount * 1;
        this.donutCount += this.donutMultiplierCount;
    }

    buyDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierPrice) {
            this.donutCount -= this.donutMultiplierPrice;
            this.donutMultiplierCount += 1;
            this.donutMultiplierPrice += (this.donutMultiplierPrice * 1);
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
                 this.donutCount += this.donutMultiplierCount * this.autoClickerCount;
                 this.donutCount += this.autoClickerCount * 1;
                 newDonutCount.innerText = this.getDounutCount();
             }, 1000);
         }
    }

    updateDonutCount() {
        newDonutCount.innerText = Math.round(this.donutCount);
    }

    reset() {
        location.reload;
    }
}
export default DonutMaker;