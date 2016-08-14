import { Injectable } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import {AppUser} from './../../providers/app-user/app-user';

import * as Firebase from 'firebase';

@Injectable()

/**
 * EmailAuth provider
 * @version 0.4
 */
export class EmailAuth {

  constructor(
    public af: AngularFire,
    public appUser: AppUser
  ) {
    this.af = af;
    this.appUser = appUser;
  }

  signIn(_formData, _isSignUp?: boolean) {

    return this.af.auth.login(_formData, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
      .then((user) => {
        this.appUser.addOrUpdate(user, { userName: _formData.userName, }, _isSignUp);
      });
  }

  signUp(_formData) {

    return this.af.auth.createUser(_formData)
      .then((user) => {
        return this.signIn(_formData, true);
      });
  }

  resetPassword(_email: string) {
    return firebase.auth().sendPasswordResetEmail(_email);
  }

}

