import { LightningElement,api} from 'lwc';
import Name_Field from '@salesforce/schema/Contact.Name';
import Phone_Field from '@salesforce/schema/Contact.Phone';
export default class LightningDataServices extends LightningElement {
    @api recordId;
    objectApiName='Contact';
    fields = [Name_Field, Phone_Field];
    nameField = Name_Field;
    phoneField = Phone_Field;
}