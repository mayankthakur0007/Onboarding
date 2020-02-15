import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
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

class RegPage1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        #btn{
          margin:10px;
          position:absolute;
          left:950px;
          top:500px;
        }
        paper-input{
          width:300px;
         
        }
        #input{
          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
        }
        .items{
          margin:40px;
         
        }
        paper-button{
          background-color:black;
          color:white;
      }
        #start{
          margin-top:-18px;
        }
      </style>
     <iron-form id="form1">
      <form>
      <div id="input">
        <div class="items"> <paper-input type="text" label="Enter name" id="name" required></paper-input></div>
        <div class="items"> <paper-input type="email" label="Enter email" id="email" required></paper-input></div>
          <div class="items"> <paper-dropdown-menu label="Marrital Status" id="status" required>
         <paper-listbox slot="dropdown-content" selected="0">
          <paper-item>Single</paper-item>
          <paper-item>Divorced</paper-item>
         </paper-listbox>
        </paper-dropdown-menu></div>
        <div class="items"><paper-dropdown-menu label="Gender" id="gender" required>
         <paper-listbox slot="dropdown-content" selected="0">
          <paper-item>Male</paper-item>
          <paper-item>Female</paper-item>
          </paper-listbox>
        </paper-dropdown-menu></div>
  </div>
  <div class="items"><paper-button type="submit" id="btn" class="btn btn-success" on-click="_handleNext">Next Step</paper-button></div>
</form>
</iron-form>
      
    `;
  }
  static get properties() {
    return {
      users: {
        type: Array,
        value: []
      },
      date: String

    };
  }
  startChanged() {

    this.date = this.$.start.value;
  }
  formreset() {
    this.$.form1.reset();
  }
  _handleNext(event) {
    if (this.$.form1.validate()) {
      let name = this.$.name.value;
      let email = this.$.email.value;
      let gender = this.$.gender.value;
      let marritalStatus = this.$.status.value;
      let page1data = [name, email, gender, marritalStatus];
      this.dispatchEvent(new CustomEvent('page1-data', { detail: { page1data: page1data, selected: '1' }, bubbles: true, composed: true }));
    }

  }
}

window.customElements.define('reg-page1', RegPage1);
