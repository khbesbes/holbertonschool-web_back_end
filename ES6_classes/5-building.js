export default class Buildings{
    constructor(sqft){
        if(this.constructor !==Buildings && this.evacuationWarningMessage !== 'undefined')throw new console.error("extending Building must override evacuationWarningMessage");
        this._sqft =sqft;
    }
    /*getter of sqft */
    get sqft(){
        return this._sqft = sqft;
    }
    /*setter of sqft*/
    set sqft(value){
        this._sqft = value;
    }

}