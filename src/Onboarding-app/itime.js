import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';

class Itime extends PolymerElement {
  static get template() {
    return html`
<style>
  :host {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: block;
  }

  table, th, td{
    border: 1px solid black;
    border-collapse: collapse;
    }
th, td{
    text-align: left;
    padding: 15px;
}

#tab1{
    width: 100%;
}

#tab1 th{
    color: white;
}

#tab1 tr:nth-child(even)
{
    background-color: white;
}

#tab1 tr:nth-child(odd)
{
    background-color: rgb(204, 63, 87);
}
#add{
    background-color:blue;
    margin:20px;
}


 
</style>

<h2>TSMS: {{prop1}}</h2>



<paper-input label="Number of hours" id="hours" allowed-pattern=[0-9] type="text" value={{hour}} name="hour"  maxlength="2" 
required error-message="fill your time sheet" ></paper-input>
<paper-button raised id="add" on-click="_handleAdd">Add</paper-button>



<table id="tab1">
        
            <tr>
                <th>Date</th>
                <th>Employee Name</th>
                <th>Today Time Entry </th>  
            </tr>

        <template is="dom-repeat" items={{data}}>
        <tr>
            <td>{{item.date}}</td>
            <td>{{name}}</td>
            <td>{{item.hours}}</td>
        </tr>
        </template>
</table>
<iron-ajax id="ajax" handle-as="json" on-response="_handleResponse" 
content-type="application/json" on-error="_handleError"></iron-ajax>
`;
  
}
static get properties() {
    return {
        data:{
            type:Array,
            value:[]
        }
       ,name:{
        type: String,
        value: sessionStorage.getItem('name')
       },
        action: {
            type: String,
            value: 'list'
          }
    };
  }
 

connectedCallback(){
    super.connectedCallback();
   let id =  sessionStorage.getItem('id')
    this._makeAjax(`http://10.117.189.55:9090/timesheetmanagement/timesheets/${id}`, 'get', null);
}
  _handleAdd(){
    let addHour = this.hour;
    let id =  sessionStorage.getItem('id')
    let postObj={hours:parseInt(addHour) , employeeId:parseInt(id)};
    this._makeAjax('http://10.117.189.55:9090/timesheetmanagement/timesheets', 'post', postObj);
    this.action = 'post';

  }

   // getting response from server and storing user name and id in session storage
   _handleResponse(event) {
       event.model.response;
    switch (this.action) {
      case 'list':
        this.data = event.detail.response;
        console.log(this.data)
        break;
      case 'post':
        this.data = event.detail.response;
        console.log(this.data)
        this._makeAjax('http://localhost:3000/schemes', 'get', null);
        this.action = 'list';
    

        break;


    }

  }



    // calling main ajax call method 
    _makeAjax(url, method, postObj) {
        let ajax = this.$.ajax;
        ajax.method = method;
        ajax.url = url;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        ajax.generateRequest();
    }
  

}

  window.customElements.define('itime-page', Itime);