import DonutMaker from './donut-maker';

const 

renderPage();

function renderPage() {
    makeDonut();
}

function makeDonut() {

    const donutMakerBtn = document.querySelector('.donutMakerBtn');
    const buyAutoClickerBtn = document.querySelector('buyAutoClickerBtn');
    const buyDonutMultiplierBtn = document.querySelector('buyDonutMultiBtn');
    const resetGameToZeroBtn = document.querySelector('resetGameToZeroBtn');

    const donutCounterDisplay = document.querySelector('donutCounterGameDisplay');
    const autoClickerGameCounter = document.querySelector('autoClickerGameCounter');
    const autoClickerGamePrice = document.querySelector('autoClickerGamePrice');
    const donutMultiGameCounter = document.querySelector('donutMultiGameCounter');
    const donutMultiGamePrice = document.querySelector('donutMultiGamePrice');

    const theBigDonutMaker = new DonutMaker(0, 0, 100, 0, 10);



    donutMakerBtn.addEventListener("click", () => {
        theBigDonutMaker.click();
        donutCounterDisplay.innerText = theBigDonutMaker.donutCount;
    })

    buyAutoClickerBtn.addEventListener("click", () => {
        theBigDonutMaker.buyAutoClicker();
        theBigDonutMaker.activateAutoClickers();
        autoClickerGameCounter.innerText = theBigDonutMaker.autoClickerCount;
        autoClickerGamePrice.innerText = theBigDonutMaker.autoClickerPrice;

    })

    buyDonutMultiplierBtn.addEventListener("click", () => {
        theBigDonutMaker.buyDonutMultiplier();
        donutMultiGameCounter.innerText = theBigDonutMaker.donutMultiplierCount
        donutMultiGamePrice.innerText = theBigDonutMaker.donutMultiplierPrice;
    })

    resetGameToZeroBtn.addEventListener("click", () => {
        theBigDonutMaker.reset();
    })


}