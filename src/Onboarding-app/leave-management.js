import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import  '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

/**
 * @customElement
 * @polymer
 */
class LeaveManagement extends PolymerElement {
    static get template() {
        return html`
    <style>
    header{
        background-color:rgba(0,50,255,0.6);

        color:white;
        display:grid;
        grid-template-rows:1fr;
        grid-template-columns:1fr 1fr 1fr;
        grid-template-areas: "heading pageName logo";
    }   
     iron-icon{
        color:white;
    }
    #pageName{
        grid-area:pageName;
    }
    #logo{
        grid-area: logo;
    }
    #heading{
        grid-area: heading;
    }
    #tsms{
        width:100%;
        height:200px;

    }
    #lms{
        width:100%;
        height:200px;


    }
    #buttons{
        width:50%;
        margin:10px auto;
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
    }
    paper-card{
        text-align:center;
        margin:10px auto;
        height:500px;
    }
    #applyLeave{
        background-color:green;
        color:white;
    }
    #lmsPortal{
        width:25%;
        text-align:center;
        background-color:whitesmoke;
        margin:10px auto;
        border-radius:5px;
        padding:15px;
    }
    h1{
        margin:10%;
    }
    </style>
    <header>
    <div id="heading"><h2>Employee Portal</h2></div>
    <div id="pageName"><h2><iron-icon icon="event" slot="prefix"></iron-icon>Leave Management System</h2></div>
    <div id="logo"><h2>Onboarding<iron-icon icon="assignment-ind"></iron-icon></h2></div>
</header>
<main>
<div id="lmsPortal">
<vaadin-date-picker id="date" label="Select Date" on-change="_getDate" ></vaadin-date-picker>
<p><h1>Date Selected:</h1><h2>{{dateSelected}}</h2></p>
<paper-button id="applyLeave" >Apply Leave</paper-button>
</div>
</main>
    `;
    }
    static get properties() {
        return {
            dateSelected:{
                type:String,
                value:''
            }

        };
    }
    _getDate(){
    this.dateSelected=this.$.date.value;
        console.log(this.dateSelected);
}
_handleLeave(){
    this.$.tsms.style.display='none';
    this.$.lmsPortal.style.display='block';
    this.$.lms.style.display='block';
    

}
_handleTimesheet(){

}

}

window.customElements.define('leave-page', LeaveManagement);