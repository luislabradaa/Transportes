import { render } from 'creditcardpayments/creditCardPayments';
import Swal from 'sweetalert2';
import { Component } from '@angular/core';

var paypal;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autobuses';

  constructor(){
    render({
      id:"#myPaypalButtons",
      currency:"MXN",
      value:"100.00",
      onApprove: (details) =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Pago realizado',
          showConfirmButton: false,
          timer: 1500
        })
      }

    })
  }
}
