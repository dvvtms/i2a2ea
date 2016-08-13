import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignInComponent } from './../../components/sign-in-component/sign-in-component';

/**
 * SignInPage
 *
 * @version 0.1.0
 */
@Component({
  templateUrl: 'build/pages/sign-in/sign-in.html',
  directives: [SignInComponent]
})

export class SignInPage {

  constructor(
    private navCtrl: NavController
  ) {
    this.navCtrl = navCtrl;
  }

}
