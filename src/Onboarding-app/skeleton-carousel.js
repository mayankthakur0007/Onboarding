import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@fabricelements/skeleton-carousel/skeleton-carousel.js";
/**
 * @customElement
 * @polymer
 */
class SkeletonCarousel extends PolymerElement {
  static get template() {
    return html`
 
    <style>
        :host {
          display: block;
        }
      </style>
      <skeleton-carousel loop auto duration=2000>
      <template is="dom-repeat" items="{{dataCarousel}}">
      <div>
      <img src="{{item.image}}"/>
    </div>
    </template>
      </skeleton-carousel>
    `;
  }
  static get properties() {
    return {
        dataCarousel: {
            type: Array
          }
    };
  }
  connectedCallback(){
      super.connectedCallback();
  }
}

window.customElements.define('skeleton-page', SkeletonCarousel);
