import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import {EmailAuth} from './../../providers/email-auth/email-auth';

import {AppNotify} from './../../components/app-notify/app-notify';

import {
  disableDeprecatedForms,
  provideForms,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Validator
} from '@angular/forms';

/**
 *
 *
 * @export
 * @class EmailSignUpComponent
 * @version 0.6.1
 *
 * @todo add username & username validation ...
 */
@Component({
  selector: 'email-sign-up-component',
  templateUrl: 'build/components/email-sign-up-component/email-sign-up-component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [provideForms, disableDeprecatedForms, EmailAuth, AppNotify]
})

export class EmailSignUpComponent {

  public emailSignUpForm: FormGroup;
  public userName: FormControl;
  public email: FormControl;
  public password: FormControl;
  public passwordConfirm: FormControl;

  public error: any;

  constructor(
    private emailAuth: EmailAuth,
    private formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public appNotify: AppNotify
  ) {

    this.emailAuth = emailAuth;
    this.formBuilder = formBuilder;
    this.viewCtrl = viewCtrl;
    this.appNotify = appNotify;

    this.userName = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24)
    ]));

    // @todo add better email-validation pattern...
    this.email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
      Validators.minLength(6),
      Validators.maxLength(64)
    ]));

    this.password = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24)
    ]));

    this.passwordConfirm = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24),
    ]));

    this.emailSignUpForm = formBuilder.group({
      'userName': this.userName,
      'email': this.email,
      'password': this.password,
      'passwordConfirm': this.passwordConfirm,
    });

  }

onSubmit(_formData: { userName: string, email: string, password: string, passwordConfirm: string }) {

    event.preventDefault();

    this.emailAuth.signUp(_formData)
      .then((succes) => {
        this.viewCtrl.dismiss()
          .then((success) => {
            this.appNotify.onSuccess({ message: 'Succesfully signed-up!' });
          });
      })
      .catch((error) => {
        this.error = error;
        this.appNotify.onError({ message: this.error.message || this.error });
        console.log(this.error);
        this.password.updateValue('');
      });
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }
}
