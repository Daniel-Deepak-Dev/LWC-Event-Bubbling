import {
    LightningElement,
    api
} from 'lwc';


export default class Eventcontainer extends LightningElement {
    @api valueInp1;
    @api valueInp2;
    handleSelect(event) {
        var param1 = event.target.param1;
        var param2 = event.target.param2;
        console.log('param1 --> '+param1);
        console.log('param2 --> '+param2);
        if(param1 != null && param1 != undefined)  this.valueInp1 = param1;
        if(param2 != null && param2 != undefined)  this.valueInp2 = param2;
    }
}