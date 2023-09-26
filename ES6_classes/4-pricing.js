import Currency from './3-currency.js';
export default class Pricing{
    constructor(amout, currency){
        if(typeof amout !=='Number') throw TypeError ('Amout must be number');
        if(typeof currency!=='currency') throw TypeError('Currency must be curreny');
    }
    get amout(){
        this.amout = amout;
    }
    set amout(value){
        if(amout !== 'Number') throw TypeError('amout must be number ');
        return this.amout = value;
    }
    get currency(){
        this.currency = this.currency;
    }
    set currency(value){
        if(currency !=='currency') throw TypeError('currency must be currency');
        return this.currency =  value ;
    }
    
    displayFullprice() {
        return `${this._amout} (${this._currency})`;
    }
     static convertPrice(amount,conversionRate) {
       return amount * conversionRate;
    }

}
 