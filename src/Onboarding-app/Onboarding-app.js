/**
* this is the main routing page of this application.
*/
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
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
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);
// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);
/**
* main class that provides the core API for Polymer and main
* features including template,routing and property change observation.
*/
class OnboardingApp extends PolymerElement {
  static get template() {
    return html`

<style>
  :host {
    --app-primary-color: #ff7424;
    --app-secondary-color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: block;
  }
  app-drawer-layout:not([narrow]) [drawer-toggle] {
    display: none;
  }
  app-header {
    color: #fff;
    background-color: var(--app-primary-color);
  }
 h3{
   color:white
 }
  .drawer-list {
    margin: 0 20px;

  }
  .drawer-list a {
    display: block;
    padding: 0 16px;
    text-decoration: none;
    color: var(--app-secondary-color);
    line-height: 40px;
  }
  .drawer-list a.iron-selected {
    color: black;
    font-weight: bold;
  }
  header{
    float:right;
    background-color:black;
    color:white;
  }
</style>
<app-location route="{{route}}">
</app-location>
<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
</app-route>
<app-drawer-layout fullbleed="" narrow="{{narrow}}">
  <!-- Drawer content -->
  <!-- Main content -->
  <app-header-layout has-scrolling-region="">
    <app-header slot="header" condenses="" reveals="" effects="waterfall">
      <app-toolbar>
        <div main-title="">
          <h3>
            Employee Management
          </h3>
        </div>
        <paper-button raised class="header" on-click="_handleHome">HOME</paper-button>
        <template is="dom-if" if={{login}}>
        <paper-button raised class="header" on-click="_handleLogout">Logout</paper-button>
        </template>
      </app-toolbar>
    </app-header>
    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
    <home-page name="home"></home-page>
    <registration-form name="registration-form"></registration-form>
    <login-page name="login"></login-page>
  </iron-pages>
  </app-header-layout>
</app-drawer-layout>

`;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      schemeId: {
        type: Number,
        value: 0,
        observer: '_idChanged'
      },
      login: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_loginChanged'
      },
      routeData: Object,
      subroute: Object,
  
    };
  }
  // observing the page change
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
  _loginChanged() {
    this.addEventListener('refresh-login', (event) => {
      this.login = event.detail.login;
    })
  }
  // // _handleClear() {
  // // sessionStorage.clear();
  // // }
  // _handleAdmin() {
  //   this.shadowRoot.querySelector('#guestTag1').style.display = 'block'
  //   this.shadowRoot.querySelector('#adminTag').style.display = 'none'
  // }
  _handleHome(){
    sessionStorage.clear();
    this.login = false;
    this.set('route.path', './home')
  }
  _handleLogout() {
    sessionStorage.clear();
    this.login = false;
    this.set('route.path', './home')
  }
  // _handleGuest() {
  //   this.shadowRoot.querySelector('#guestTag1').style.display = 'none'
  //   this.shadowRoot.querySelector('#adminTag').style.display = 'block'
  // }
  /**
  * Show the corresponding page according to the route.
  * If no page was found in the route data, page will be an empty string.
  * Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
  */
  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'registration-form','login'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'home';
    }
  }
  /**
  * Import the page component on demand.
  * Note: `polymer build` doesn't like string concatenation in the import
  * statement, so break it up.
  */
  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./home-page.js');
        break;
      case 'registration-form':
        import('./registration-form.js');
        break;
        case 'login':
          import('./login-page.js');
          break;
    }
  }

}

window.customElements.define('onboarding-app', OnboardingApp);
