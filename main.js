let app = new Vue({
    el: '#exchange',
    data: {
        rates: null,
        exg: "SEK",
        selectedToCurrency: "USD",
        inputAmount: 0,
        outputAmount: 0,
    },
    mounted() {
        this.requestData();
    },
    methods: {
        calculateCurrency: function () {
            this.outputAmount = this.inputAmount * this.rates[this.selectedToCurrency];
        },
        //Makes the axios call and updates the data in rates
        requestData: async function () {
            await axios.get(`https://api.exchangeratesapi.io/latest?base=${this.exg}`).then((response) => {
                this.rates = response.data.rates;
                console.log(this.rates);
            }).catch((err) => {
                console.log(err);
            });
        }
    }
})

