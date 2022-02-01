import DonutMaker from './donut-maker.js'

renderPage();

function renderPage() {
    makeDonut();
}

function makeDonut() {

    const donutMakerBtn = document.querySelector('#donutMakerBtn');
    const newDonutCountDisplay = document.querySelector('#newDonutCountDisplay');
    const buyAutoClickerBtn = document.querySelector('#buyAutoClickerBtn');
    const buyDonutMultiBtn = document.querySelector('#buyDonutMultiBtn');
    const resetGameToZeroBtn = document.querySelector('#resetGameToZeroBtn');
    const autoClickerGameCounter = document.querySelector('#autoClickerGameCounter');
    const autoClickerGamePrice = document.querySelector('#autoClickerGamePrice');
    const donutMultiGameCounter = document.querySelector('#donutMultiGameCounter');
    const donutMultiGamePrice = document.querySelector('#donutMultiGamePrice');

    const theBigDonutMaker = new DonutMaker();



    donutMakerBtn.addEventListener("click", () => {
        theBigDonutMaker.click();
        newDonutCountDisplay.innerText = Math.round(theBigDonutMaker.donutCount)
       
    });

    buyDonutMultiBtn.addEventListener("click", () => {
        theBigDonutMaker.buyDonutMultiplier();
        donutMultiGameCounter.innerText = theBigDonutMaker.donutMultiplierCount;
        donutMultiGamePrice.innerText = Math.round(theBigDonutMaker.donutMultiplierPrice)
        newDonutCountDisplay.innerText = Math.round(theBigDonutMaker.donutCount)
    });

    buyAutoClickerBtn.addEventListener("click", () => {
        theBigDonutMaker.buyAutoClicker();
        autoClickerGameCounter.innerText = theBigDonutMaker.autoClickerCount;
        autoClickerGamePrice.innerText = Math.round(theBigDonutMaker.autoClickerPrice)
        newDonutCountDisplay.innerText = Math.round(theBigDonutMaker.donutCount)
        theBigDonutMaker.activateAutoClickers();
        

    });

    resetGameToZeroBtn.addEventListener("click", () => {
        location.reload();
    });
}

var modalA = document.getElementById("aboutModal");
var btnA = document.getElementById("about");
var spanA = document.getElementsByClassName("closeAbout")[0];

btnA.onclick = function () {
    modalA.style.display = "block";
};

spanA.onclick = function () {
    modalA.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalA) {
        modalA.style.display = "none";
    }
};


var modalI = document.getElementById("inspirationModal");
var btnI = document.getElementById("inspiration");
var spanI = document.getElementsByClassName("closeInspiration")[0];

btnI.onclick = function () {
    modalI.style.display = "block";
};

spanI.onclick = function () {
    modalI.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalI) {
        modalI.style.display = "none";
    }
};

var modalC = document.getElementById("contactModal");
var btnC = document.getElementById("contact");
var spanC = document.getElementsByClassName("closeContact")[0];

btnC.onclick = function () {
    modalC.style.display = "block";
};

spanC.onlick = function () {
    modalC.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalC) {
        modalC.style.display = "none";
    }
};
