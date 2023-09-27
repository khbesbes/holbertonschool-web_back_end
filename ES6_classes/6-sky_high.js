import Building from './5-building.js'
export default class SkyHighBuilding extends Building{
    constructor(sqst,floor){
        super(sqst);
        this._floor = floor;
    }
    /* getter of sqst*/
    get sqft(){
       return this._sqft;
    }
    /* setter of sqft*/
    set sqft(value){
        this._sqft = value;
    }
    /*getter of floor*/
    get floor(){
        return this._floor;
    }
    /*setter of floor*/
    set floor(value){
        this._floor =value;
    }
    evacuationWarningMessage(){
        return  `Evacuate slowly the ${this._floors} floors`;
    }
}