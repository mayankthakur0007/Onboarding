import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
      </style>

    `;
  }
  static get properties() {
    return {
     
    };
  }
}

window.customElements.define('onboarding-app', OnboardingApp);
