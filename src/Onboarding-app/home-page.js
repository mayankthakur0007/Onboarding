import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import "@fabricelements/skeleton-carousel/skeleton-carousel.js";
import'./skeleton-carousel';
import '@polymer/polymer/lib/elements/dom-if.js'
import '@polymer/iron-icons/places-icons.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
class HomePage extends PolymerElement {
  static get template() {
    return html`
<style>
  :host {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: block;
  }

  paper-button{
    margin:20px;
    width:200px;
    border-radius: 20px;
    height:60px;
    background-color: black;
color: white;
  }
  #buttons{
position: absolute;
left:33%;
top: 48%;
  }
  #box{
background-color: black;
opacity:0.3;
height:70%;
left:25%;
position:absolute;
top: 22%;
border-radius: 10px;
width:50%;
  }

</style>
<app-location route="{{route}}">
</app-location>
<skeleton-page data-carousel={{dataCarousel}}>
</skeleton-page>
  <div id="box">
  </div>
  <div id="buttons">
    <paper-button raised on-click="_handleOnboarding">New Joinee</paper-button>
    <paper-button raised on-click="_handleLogin">Existing Employee</paper-button>
  </div>

`;
  }
  _handleOnboarding(){
      this.set('route.path','./registration-form')
  }
  _handleLogin(){
    this.set('route.path','./login')
}
}

window.customElements.define('home-page', HomePage);