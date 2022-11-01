import { LightningElement, track } from 'lwc';
import createNewCase from '@salesforce/apex/MainDetailsController.createCase';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class MainDetails extends LightningElement {

    @track recId = '5005h00000WVKjGAAX';

    showHomePage(event){
        const home = new CustomEvent('home', { detail: 'Id'});
        this.dispatchEvent(home);
    }

    renderedCallback() {
        if(window.innerWidth < 1025) {
            let date = this.template.querySelector('.date');
            let countCleaning = this.template.querySelector('.countCleaning');
            let main = this.template.querySelector('.main');
            let information = this.template.querySelector('.information');
            let buttonHome = this.template.querySelector('.buttonHome');
            let mainButtons = this.template.querySelector('.mainButtons');
            let buttonToFix = this.template.querySelector('.buttonToFix');
            let buttonPropDet = this.template.querySelector('.buttonPropDet');
            
            date.classList.add('mobileDate');
            date.classList.remove('date');

            countCleaning.classList.add('mobileCountCleaning');
            countCleaning.classList.remove('countCleaning');

            main.classList.add('mobileMain');
            main.classList.remove('main');

            information.classList.add('mobileInformation');
            information.classList.remove('information');

            buttonHome.classList.add('mobileButtonHome');
            buttonHome.classList.remove('buttonHome');

            mainButtons.classList.add('mobileMainButtons');
            mainButtons.classList.remove('mainButtons');

            buttonToFix.classList.add('mobileButtonToFix');
            buttonToFix.classList.remove('buttonToFix');

            buttonPropDet.classList.add('mobileButtonPropDet');
            buttonPropDet.classList.remove('buttonPropDet');

            let title = this.template.querySelectorAll('.title');
            title.forEach(evement =>{
                evement.classList.add('mobileTitle');
                evement.classList.remove('title');
            });

            let taskItem = this.template.querySelectorAll('.taskItem');
            taskItem.forEach(evement =>{
                evement.classList.add('mobileTaskItem');
                evement.classList.remove('taskItem');
            });

        }
    }

    createCase() {
        createNewCase().then(response => {
            console.log('response ' + response);
            if(response === 'true') { 
                console.log('response ' + response);
                const evt = new ShowToastEvent({
                    title: 'Toast Success',
                    message: 'Opearion sucessful',
                    variant: 'success'
                });
                this.dispatchEvent(evt);
            }
        })
    }

    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;
        alert('No. of files uploaded : ' + uploadedFiles.length);
    }
}