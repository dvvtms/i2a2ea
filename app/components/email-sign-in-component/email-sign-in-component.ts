import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import {EmailAuth} from './../../providers/email-auth/email-auth';
import {AppNotify} from './../../components/app-notify/app-notify';

import {EmailPasswordReset} from './../../components/email-password-reset/email-password-reset';
import { Modal, ModalController } from 'ionic-angular';

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
 * @class EmailSignInComponent
 * @version 0.8
 *
 * @todo add username & username validation ...
 */
@Component({
  selector: 'email-sign-in-component',
  templateUrl: 'build/components/email-sign-in-component/email-sign-in-component.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [provideForms, disableDeprecatedForms, EmailAuth, AppNotify]
})

export class EmailSignInComponent {

  public emailSignInForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  public error: any;

  constructor(
    private emailAuth: EmailAuth,
    private formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public appNotify: AppNotify,
    private modalController: ModalController
  ) {

    this.emailAuth = emailAuth;
    this.formBuilder = formBuilder;
    this.viewCtrl = viewCtrl;
    this.appNotify = appNotify;

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

    this.emailSignInForm = formBuilder.group({
      'email': this.email,
      'password': this.password
    });

  }

  onSubmit(formData: { email: string, password: string }) {

    event.preventDefault();

    this.emailAuth.signIn(formData)
      .then((succes) => {
        this.viewCtrl.dismiss()
          .then((success) => {
            this.appNotify.onSuccess({ message: 'Succesfully signed-in!' });
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

  forgotPassword() {

    let forgotPassModal = this.modalController.create(EmailPasswordReset);
    forgotPassModal.present();

  }

}
