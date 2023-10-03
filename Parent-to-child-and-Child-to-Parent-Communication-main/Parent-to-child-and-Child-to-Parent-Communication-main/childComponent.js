import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api parentMessage;
    childMessage;
    firstName;
    lastName;

   handleChildChange(event){
    this.childMessage = event.target.name;
    if(event.target.name==='firstName'){
        this.firstName = event.target.value;
    }else if(event.target.name==='lastName'){
         this.lastName = event.target.value;
    }
   }

   handleClick(){
    let evt = new CustomEvent('getchildmessage',{detail : {
        Fname:this.firstName,Lname:this.lastName
    }});
    this.dispatchEvent(evt);
   }

}