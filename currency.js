class Currency {

    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        // this.url = `https://api.exchangeratesapi.io/latest?base=${firstCurrency}`;

        this.amount = null;     // her event oluştuğunda değişeceğinden null olarak değer verdik.
    };

    exchange(){

        return new Promise((resolve,reject) => {

            fetch(`https://api.exchangeratesapi.io/latest?base=${firstCurrency.value}`)
            .then(response => response.json())
            .then(data => { 
                const parity = data.rates[this.secondCurrency]; // or data["rates"][this.secondCurrency] 
                const amount2 = Number(this.amount);
                const changed = parity * amount2;
    
                console.log(data);
                resolve(changed);
            
            })
            // .catch(err => console.error(err));
            .catch(err => reject(err));


        });


    };

    changeAmount(newAmount){
        this.amount = newAmount;
    };

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    };

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    };

};