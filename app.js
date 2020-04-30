const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");

const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners() {
    amountElement.addEventListener("input",exchangeCurrency);

    firstSelect.onchange = function () {        // Bazı tarayıcılarda hata verdiği için, selectList'lere add.EventListener yerine .onchange ile evente atıyormuşuz.
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex]);
        ui.changeFirst();
        exchangeCurrency();
    };

    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
        exchangeCurrency();
    };

};

function exchangeCurrency() {

    currency.changeAmount(amountElement.value);

    currency.exchange()
    .then(response => {
        ui.displayResult(response);     // yakaladığı respons'u arayüze yazdırmak için fonksiyona yönlendiriyoruz.
    })
    .catch(err => console.error(err));

};