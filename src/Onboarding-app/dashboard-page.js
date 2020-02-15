import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '../../node_modules/@polymer/app-layout/app-header/app-header.js';
import '../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '../../node_modules/@polymer/app-route/app-location.js';
import '../../node_modules/@polymer/app-route/app-route.js';
import '../../node_modules/@polymer/iron-pages/iron-pages.js';
import '../../node_modules/@polymer/iron-selector/iron-selector.js';
import '../../node_modules/@polymer/paper-icon-button/paper-icon-button.js';

class DashBoard extends PolymerElement {
  static get template() {
    return html`
<style>
  :host {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: block;
  }

 
  h3 {
    font-family: Comic Sans, Comic Sans MS, cursive;
  }
 
</style>

        <a name="login" href="[[rootPath]]itime-page">
          <paper-button>TSMS</paper-button>
        </a>

        <a name="about" href="[[rootPath]]leave-page">
          <paper-button>CVCS</paper-button>
        </a>
    




`;
  
}
static get properties() {
    return {
        prop1:{
            type:String,
            value:"This is your dashboard"
        }
       

    };
  }

}

  window.customElements.define('dashboard-page', DashBoard);