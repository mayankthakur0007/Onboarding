import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '../../node_modules/@polymer/paper-input/paper-input.js';
import '../../node_modules/@polymer/paper-button/paper-button.js';
import '../../node_modules/@polymer/iron-ajax/iron-ajax.js';
import '../../node_modules/@polymer/app-route/app-location.js';
import '../../node_modules/@polymer/paper-toast/paper-toast.js';
import '../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '../../node_modules/@polymer/paper-listbox/paper-listbox.js';
import '../../node_modules/@polymer/paper-item/paper-item.js';
import '../../node_modules/@polymer/app-route/app-route.js';
import '../../node_modules/@polymer/iron-pages/iron-pages.js';
import '../../node_modules/@polymer/iron-selector/iron-selector.js';
import '../../node_modules/@polymer/paper-tabs/paper-tab.js';
import '../../node_modules/@polymer/paper-tabs/paper-tabs.js';
import './regPage1.js';
import './regPage3.js';

/**
 * @customElement
 * @polymer
 */

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);
class RegistrationForm extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
.btn{
    margin:100px;
    
}
#content{
    background-color:white;
}
paper-button{
    background-color:black;
    color:white;
}

      </style>
      <app-location route="{{route}}">
      </app-location>
      <div id="content">
      <h1>Onboarding Details</h1>
      <paper-tabs selected={{selected}} scrollable>
      <paper-tab>Personal Details</paper-tab>
      <paper-tab on-click="step3">Professional Details</paper-tab>
    </paper-tabs>
    <iron-pages selected="{{selected}}">
    <div>
    <reg-page1 name="view1" id="page1"></reg-page1>
    </div>
    <div>
    <reg-page3 name="view3" id="page3"></reg-page3>
    </div>    
  </iron-pages>
  </div>

  <iron-ajax id="ajax" on-response="_handleResponse" handle-as="json" content-type='application/json'></iron-ajax>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            selected: {
                type: Number,
                value: 0,
                observer:'selected'
            },
            routeData: Object,
            subroute: Object,
            action: {
                type: String,
                value: 'List'
            },
            users: {
                type: Array,
                value: []
            },
            page1data: {
                type: Array
            }
        };
    }

    /** getdata function for fetching the data from the database and showing it. Ajax request is done in pets
    
    for the data with sell property value "yes" only. This function is also called when any new pet is added 
    
    so that the list got again refreshed **/
connectedCallback(){
    super.connectedCallback();
}
    ready() {
        super.ready();
        this.addEventListener('page1-data', function (event) {
            this.page1data = event.detail.page1data;
            this.selected = event.detail.selected;
        });
        this.addEventListener('page3-data', function (event) {
            this.page3data = event.detail.page3data;
            let pg1data = this.page1data;
            let pg3data = this.page3data;
            let users = { employeeName: pg1data[0], email: pg1data[1], gender: pg1data[2], dateOfBirth: pg1data[3],experience: pg3data[0], dateOfJoining: pg3data[1] }
            this._makeAjax(`http://10.117.189.55:9090/employeemanagement/employees`, "post", users);
            this.$.page1.formreset();
            this.$.page3.formreset();
            // this.dispatchEvent(new CustomEvent('login-refreshdata', { detail: {}, bubbles: true, composed: true }));
            // this.set('route.path', 'login');
        });
    }

    step2() {

        this.$.page1._handleNext();


    }


    _makeAjax(url, method, postObj) {
        const ajax = this.$.ajax;
        ajax.method = method;
        ajax.url = url;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        ajax.generateRequest();
    }

    defaultPage() {
        this.selected = '0';
    }
    _handleResponse(event) {

        switch (this.action) {

            case 'List':
                this.users = event.detail.response;
                console.log(this.users)
                break;
        }


    }

}

window.customElements.define('registration-form', RegistrationForm);
