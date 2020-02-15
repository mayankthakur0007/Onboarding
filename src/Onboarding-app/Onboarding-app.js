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
          display: block;
        }
        #home{
          height:100px;
          width:100px;
          background-color:pink;
        }
      </style>
  

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
}

window.customElements.define('onboarding-app', OnboardingApp);
