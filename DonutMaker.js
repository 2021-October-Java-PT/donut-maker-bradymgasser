class DonutMaker {
    constructor(donutCount, autoClickerCount) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
    }

    getDounutCount() {
        return this.donutCount;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    click() {
        this.donutCount ++;
    }

    buyAutoClicker() {
        if (this.donutCount >= 100) {
            this.donutCount -= 100;
            this.autoClickerCount += 1;
        }
    }
}

export default DonutMaker;