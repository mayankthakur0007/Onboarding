import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@fabricelements/skeleton-carousel/skeleton-carousel.js";
import'./skeleton-carousel';
/**
 * @customElement
 * @polymer
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
      </app-toolbar>
    </app-header>
    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
    <home-page name="home"></home-page>
    <registration-form name="registration-form"></registration-form>
  </iron-pages>
  </app-header-layout>
</app-drawer-layout>
<skeleton-page data-carousel={{dataCarousel}}>
      
</skeleton-page>

`;


    

  }
  static get properties() {
    return {
      dataCarousel: {
        type: Array,
        value: [
          {
            image: "../images/pic1.jpg",
            title: "Title1"
          },
          {
            image: "../images/pic2.jpg",
            title: "Title2"
          },
          {
            image: "../images/pic3.jpg",
            title: "Title3"
          },
          {
            image: "../images/pic4.jpg",
            title: "Title4"
          }
        ]
      }
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
  // _handleClear() {
  // sessionStorage.clear();
  // }
  _handleAdmin() {
    this.shadowRoot.querySelector('#guestTag1').style.display = 'block'
    this.shadowRoot.querySelector('#adminTag').style.display = 'none'
  }
  _handleLogout() {
    sessionStorage.clear();
    this.login = false;
  }
  _handleGuest() {
    this.shadowRoot.querySelector('#guestTag1').style.display = 'none'
    this.shadowRoot.querySelector('#adminTag').style.display = 'block'
  }
  /**
  * Show the corresponding page according to the route.
  * If no page was found in the route data, page will be an empty string.
  * Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
  */
  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'registration-form'].indexOf(page) !== -1) {
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
    }
  }

}

window.customElements.define('onboarding-app', OnboardingApp);
