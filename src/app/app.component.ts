import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-support';

  form = new FormGroup({
    orderNumber: new FormControl<null | number>(null, { validators: [Validators.required, Validators.min(100000000), Validators.max(999999999)] })
  })

  logFormValue() {
    const value: number = this.form.controls.orderNumber.value
  }
}
