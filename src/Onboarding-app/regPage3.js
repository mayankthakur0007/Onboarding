import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/paper-button/paper-button.js';
import '../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '../../node_modules/@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '../../node_modules/@polymer/paper-item/paper-item.js';
import '../../node_modules/@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-location.js';
import '../../node_modules/@polymer/iron-form/iron-form.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

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

  paper-button {
    background-color: black;
    color: white;
  }

  #btn {
    margin: 10px;

  }

  paper-input {
    width: 300px;

  }

  #input {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .items {
    margin: 40px;

  }
  #dialog{
            display:block;
            width:800px;
            padding:100px;
            height:500px;
        }
  #start {
    margin-top: -18px;
  }
</style>
<app-location route={{route}}></app-location>
<iron-form id="form3">
  <form>
    <div id="input">
      <div class="items">
        <paper-input type="text" label="Experience" id="experience" required error-message="Enter Experience">
        </paper-input>
      </div>
      <div class="items">
        <vaadin-date-picker id="start" label="Date Of Joining" placeholder="Date Of Joining" on-change="startChanged">
        </vaadin-date-picker>
      </div>
      <div class="items">
        <paper-button type="submit" id="btn" class="btn btn-success" on-click="_handleRegister">Complete Registration
        </paper-button>
      </div>
  </form>
</iron-form>
<paper-dialog id="modal">
 <h1>Onboarding Successfull!!!</h1>
 <h2>You will get your login details after HR approval. </h2>
  <div class="buttons">
    <paper-button dialog-confirm autofocus on-click="_handleClose">Close</paper-button>
  </div>
</paper-dialog>

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
formreset() {
this.$.form3.reset();
}
_handleClose(){
  this.set('route.path', './home')
}
startChanged() {
this.date = this.$.start.value;
}
_handleRegister(event) {
if (this.$.form3.validate()) {
let experience = this.$.experience.value;
let doj = this.date;
let page3data = [experience, doj];
this.$.modal.open();
this.dispatchEvent(new CustomEvent('page3-data', { detail: { page3data: page3data }, bubbles: true, composed: true }));


}

}
}

window.customElements.define('reg-page3', RegPage3);