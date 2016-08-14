import { Injectable } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/**
 * AppUser
 *
 * @export
 * @class AppUser
 * @version 0.5
 */
@Injectable()
export class AppUser {

  constructor(
    public af: AngularFire
  ) {
    this.af = af;
  }

  addOrUpdate(_authData: any, _appUserInfo?: any, _isSignUp?: boolean) {
    const itemObservable = this.af.database.object('/users/' + _authData.uid);

    if (_isSignUp) {
      itemObservable.set({
        "avatar": _authData.auth.photoURL || "MISSING",
        "displayName": _appUserInfo.userName || _authData.auth.providerData[0].displayName || _authData.auth.email,
        "provider": _authData.auth.providerData[0].providerId,
        "email": _authData.auth.email
      });
    } else {
      itemObservable.update({
        "avatar": _authData.auth.photoURL || "MISSING",
        "email": _authData.auth.email
      });
    }
  }

  signOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let signOutFunc = this.af.auth.logout();
      resolve(signOutFunc);
      reject(new Error('Something happened...'));
    });
  }

}