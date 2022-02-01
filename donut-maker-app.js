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

var modal = document.getElementById("aboutModal");
var btn = document.getElementById("about");
var span = document.getElementsByClassName("closeAbout")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


var modal2 = document.getElementById("inspirationModal");
var btn2 = document.getElementById("inspiration");
var span2 = document.getElementsByClassName("closeInspiration")[0];

btn2.onclick = function () {
    modal2.style.display = "block";
};

span2.onclick = function () {
    modal2.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};

var modal3 = document.getElementById("contactModal");
var btn3 = document.getElementById("contact");
var span3 = document.getElementsByClassName("closeContact")[0];

btn3.onclick = function () {
    modal3.style.display = "block";
};

span3.onlick = function () {
    modal3.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};
