import { LightningElement, track } from 'lwc';
export default class LwcCmp extends LightningElement {
    @track showMainPage = true;
    @track showMainDetails = false;
    showDetails(event){
        this.showMainPage = false;
        this.showMainDetails = true;
    }
    showHomePage(event){ 
        this.showMainDetails = false;
        this.showMainPage = true;
    }
}