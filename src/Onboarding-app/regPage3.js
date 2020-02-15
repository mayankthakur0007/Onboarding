import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/paper-button/paper-button.js';
import '../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '../../node_modules/@polymer/paper-listbox/paper-listbox.js';
import '../../node_modules/@polymer/paper-item/paper-item.js';
import '../../node_modules/@polymer/paper-input/paper-input.js';
import '../../node_modules/@polymer/iron-form/iron-form.js';


/**
 * @customElement
 * @polymer
 */
class RegPage3 extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
    }
    paper-button{
      background-color:black;
      color:white;
  }
    #btn{
      margin:10px;
     
    }
    paper-input{
      width:300px;
     
    }
    #input{
      display:flex;
      flex-direction:column;
      flex-wrap:wrap;
    }
    .items{
      margin:40px;
     
    }
    #start{
      margin-top:-18px;
    }
  </style>
  <iron-form id="form3">
  <form>
  <div id="input">
    <div class="items"> <paper-input type="text" label="Current Organization" id="company" required></paper-input></div>
    <div class="items"> <paper-input type="text" label="Designation" id="designation"required></paper-input></div>
  </div>
    <div class="items"><paper-button type="submit" id="btn" class="btn btn-success" on-click="_handleRegister">Complete Registration</paper-button></div>
  </form>
  </iron-form>

    `;
  }
  static get properties() {
    return {
      users: {
        type:Array,
        value: []
      }
    };
  }
  formreset(){
    this.$.form3.reset();
  }
  _handleRegister(event) {
 if(this.$.form3.validate()){
    let company = this.$.company.value;
    let designation = this.$.designation.value;
    let page3data = [company,designation];
    this.dispatchEvent(new CustomEvent('page3-data', { detail: {page3data:page3data}, bubbles: true, composed: true }));
 }
    return false;
  }
}

window.customElements.define('reg-page3', RegPage3);
