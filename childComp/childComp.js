import {
    LightningElement,
    api
} from 'lwc';

export default class Eventsource extends LightningElement {

    @api param1;
    @api param2;

    handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        var param1, param2;
        if (name == 'text1' && event.target.value != null && event.target.value != undefined) {
            this.param1 = event.target.value;
        } else if (name == 'text2' && event.target.value != null && event.target.value != undefined) {
            this.param2 = event.target.value;
        }

        console.log('11 -> ' + this.param1);
        console.log('11 -> ' + this.param2);

        this.dispatchEvent(new CustomEvent(
            'inptext', {
                bubbles: true,
                composed: false
            }));
    }
}