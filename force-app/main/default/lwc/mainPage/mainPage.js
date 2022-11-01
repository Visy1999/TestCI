import { LightningElement } from 'lwc';
import picture from '@salesforce/resourceUrl/picture';
export default class MainPage extends LightningElement { 
    pictureRoom = picture;

    showMore(event) {
        const showDetails = new CustomEvent('showdetails', { detail: 'Id'});
        this.dispatchEvent(showDetails);
    }

    renderedCallback() {
        console.log(window.innerWidth);
        if(window.innerWidth < 1025) { 
            let cleaningList = this.template.querySelectorAll('.cleaning');
            let picture = this.template.querySelectorAll('.picture');
            let description = this.template.querySelectorAll('.description');
            let nameCleaning = this.template.querySelectorAll('.nameCleaning');
            let timeCleaning = this.template.querySelectorAll('.timeCleaning');
            let date = this.template.querySelector('.date');
            let countCleaning = this.template.querySelector('.countCleaning');
            
            date.classList.add('mobileDate');
            date.classList.remove('date');
            
            countCleaning.classList.add('mobileCountCleaning');
            countCleaning.classList.remove('countCleaning');
            
            picture.forEach(evement =>{
                evement.classList.add('mobilePicture');
                evement.classList.remove('picture');
            });

            cleaningList.forEach(evement =>{
                evement.classList.add('mobileCleaning');
                evement.classList.remove('cleaning');
            });

            description.forEach(evement =>{
                evement.classList.add('mobileDescription');
                evement.classList.remove('description');
            });

            nameCleaning.forEach(evement =>{
                evement.classList.add('mobileNameCleaning');
                evement.classList.remove('nameCleaning');
            });

            timeCleaning.forEach(evement =>{
                evement.classList.add('mobileTimeCleaning');
                evement.classList.remove('timeCleaning');
            });

        }
    }
}