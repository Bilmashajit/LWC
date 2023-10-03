import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message;
    messageFromChild;
    firstName;
    lastName;

    handleChange(event){
        this.message = event.target.value;
        console.log('--- change value--',this.message);
    }

    handleChildMethod(event){
       this.firstName = event.detail.Fname;
       this.lastName = event.detail.Lname;
    }

}