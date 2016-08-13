import { Component } from '@angular/core';

import { NavController, Modal, ModalController } from 'ionic-angular';

import {EmailSignUpComponent } from './../../components/email-sign-up-component/email-sign-up-component';
import {EmailSignInComponent } from './../../components/email-sign-in-component/email-sign-in-component';

/**
 * Create sign-in-form
 *
 * @export
 * @class SignInComponent
 * @version 0.2.0
 */
@Component({
  selector: 'sign-in-component',
  templateUrl: 'build/components/sign-in-component/sign-in-component.html'
})

export class SignInComponent {

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {
    this.navCtrl = navCtrl;
  }

  emailSignUpModal() {
    let signUpModal = this.modalController.create(EmailSignUpComponent);
    signUpModal.present();
  }

  emailSignInModal() {
    let signInModal = this.modalController.create(EmailSignInComponent);
    signInModal.present();
  }

}
