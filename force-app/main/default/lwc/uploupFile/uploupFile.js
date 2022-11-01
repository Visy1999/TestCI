import { LightningElement } from 'lwc';

export default class UploupFile extends LightningElement {

    recId = '5005h00000WVKjGAAX';
    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;
        alert('No. of files uploaded : ' + uploadedFiles.length);
    }
}