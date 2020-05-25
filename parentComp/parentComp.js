import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    valueInp1;
    valueInp2;
    handleSelect(event) {
        this.valueInp1 = event.detail.param1;
        this.valueInp2 = event.detail.param2;
    }
}