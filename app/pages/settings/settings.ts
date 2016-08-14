import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AppUser } from './../../providers/app-user/app-user';
import {AppSettings } from './../../providers/app-settings/app-settings';
import {AppNotify} from './../../components/app-notify/app-notify';

/**
 *
 *
 * @export
 * @class SettingsPage
 * @version 0.3
 */
@Component({
  templateUrl: 'build/pages/settings/settings.html',
  providers: [AppNotify]
})
export class SettingsPage {

  constructor(
    private navCtrl: NavController,
    private appUser: AppUser,
    public appNotify: AppNotify
  ) {

    this.navCtrl = navCtrl;
    this.appUser = appUser;
    this.appNotify = appNotify;

  }

  signOut() {
    this.appUser.signOut()
      .then((success) => {
        this.appNotify.onSuccess({ message: 'Succesfully signed-out!' });
      })
      .catch((error) => {
        this.appNotify.onError({ message: error });
      });
  }

}
