import { Injectable } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/**
 * AppUser
 *
 * @export
 * @class AppUser
 * @version 0.0.2
 */
@Injectable()
export class AppUser {

  constructor(
    public af: AngularFire
  ) {
    this.af = af;
  }

  addOrUpdate(_authData) {
    const itemObservable = this.af.database.object('/users/' + _authData.uid);
    itemObservable.set({
      "provider": _authData.auth.providerData[0].providerId,
      "avatar": _authData.auth.photoURL || "MISSING",
      "displayName": _authData.auth.providerData[0].displayName || _authData.auth.email,
      "email": _authData.auth.email,
    });
  }

}

