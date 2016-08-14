# i2a2ea - Ionic 2 AngularFire 2 Email Authentication
## Features
* Email Sign-In with form validation
* Email Sign-Up with form validation
* Password recovery
* In-app notifications (beta)

## Installation
#### Clone & npm install
```sh
$ git clone https://github.com/tomasvio/i2a2ea.git
$ cd i2a2ea
$ npm install
```

https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md

## Before serve
Update Firebase 3 credentials in ```app.ts```
```ts
 const firebaseConfig = {
 apiKey: "<your-key>",
 authDomain: "<your-project-authdomain>",
 databaseURL: "<your-database-URL>",
 storageBucket: "<your-storage-bucket>"
 }
```

## Ionic info
```
Cordova CLI: 6.3.0
Ionic Framework Version: 2.0.0-beta.11
Ionic CLI Version: 2.0.0-beta.36
Ionic App Lib Version: 2.0.0-beta.19
ios-deploy version: 1.8.6
ios-sim version: 5.0.8
OS: Mac OS X El Capitan
Node Version: v6.3.1
Xcode version: Xcode 7.3.1 Build version 7D1014
```
## Issues
**White screen after ```ionic serve``` ?**
Dont forget Update Firebase 3 credentials.

**Angular2 && Ionic 2 && still in beta... the starter falls on some testing enviroments... sorry.**
**We upate recently our repo, thank you**
