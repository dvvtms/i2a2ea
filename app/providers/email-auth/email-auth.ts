import { Injectable } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import {AppUser} from './../../providers/app-user/app-user';

import * as Firebase from 'firebase';

@Injectable()

/**
 * EmailAuth provider
 * @version 0.3
 */
export class EmailAuth {

  constructor(
    public af: AngularFire,
    public appUser: AppUser
  ) {
    this.af = af;
    this.appUser = appUser;
  }

  signIn(_credentials) {

    return this.af.auth.login(_credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
      .then((user) => {
        this.appUser.addOrUpdate(user);
      });

  }

  signUp(_credentials) {

    return this.af.auth.createUser(_credentials)
      .then((user) => {
        return this.signIn(_credentials);
      });
  }

  resetPassword(_email: string) {
    return firebase.auth().sendPasswordResetEmail(_email);
  }

}

