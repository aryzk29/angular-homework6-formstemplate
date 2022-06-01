import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubs = 'advanced';
  @ViewChild('f') signupForm: NgForm;
  user = {
    email: '',
    subs: '',
    password: ''
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subs = this.signupForm.value.subs;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
