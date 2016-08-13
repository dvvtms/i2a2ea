import { Component } from '@angular/core';

import {EmailAuth} from './../../providers/email-auth/email-auth';
import { ViewController } from 'ionic-angular';
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
 * @class EmailPasswordReset
 * @version 0.2
 */
@Component({
  selector: 'email-password-reset',
  templateUrl: 'build/components/email-password-reset/email-password-reset.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [provideForms, disableDeprecatedForms, EmailAuth, AppNotify]
})
export class EmailPasswordReset {

  public passwordResetForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  private error: any;

  constructor(
    private emailAuth: EmailAuth,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    public appNotify: AppNotify
  ) {
    this.emailAuth = emailAuth;
    this.viewCtrl = viewCtrl;
    this.formBuilder = formBuilder;
    this.appNotify = appNotify;

    // @todo add better email-validation pattern...
    this.email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
      Validators.minLength(6),
      Validators.maxLength(64)
    ]));

    this.passwordResetForm = formBuilder.group({
      'email': this.email,
    });
  }

  onSubmit(formData: { email: string }) {

    event.preventDefault();

    return this.emailAuth.resetPassword(formData.email)
      .then((success) => {
        this.viewCtrl.dismiss()
          .then((success) => {
            this.appNotify.onSuccess({ message: 'Password reset mail sent... ' });
          });
      })
      .catch((error) => {
        this.error = error;
        this.appNotify.onError({ message: this.error.message || this.error });
      });

  }

  onCancel() {
    this.viewCtrl.dismiss();
  }
}
