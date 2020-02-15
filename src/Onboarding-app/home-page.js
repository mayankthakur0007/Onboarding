import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import "@fabricelements/skeleton-carousel/skeleton-carousel.js";
import './skeleton-carousel';
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
opacity:0.2;
height:70%;
left:25%;
position:absolute;
top: 22%;
border-radius: 10px;
width:50%;
  }
  skeleton-page{
      margin-top:30px;
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
    _handleOnboarding() {
        this.set('route.path', './registration-form')
    }
    _handleLogin() {
        this.set('route.path', './login')
    }
}

window.customElements.define('home-page', HomePage);