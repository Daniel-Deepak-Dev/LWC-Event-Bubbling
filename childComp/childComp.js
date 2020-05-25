import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    param1;
    param2;
    handleChange(event) {
        const name = event.target.name;
        if (name === 'text1') {
            this.param1 = event.target.value;
        } else if (name === 'text2') {
            this.param2 = event.target.value;
        }
        console.log('param 1 -> ' + this.param1);
        console.log('param 2 -> ' + this.param2);

        this.dispatchEvent(new CustomEvent(
            'inptext',
            {
                detail: {
                    param1: this.param1,
                    param2: this.param2
                },
                bubbles: true,
                composed: false
            }
        ));
    }
}
