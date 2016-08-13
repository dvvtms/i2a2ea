# i2a2ea - Ionic 2 AngularFire 2 Email Authentication
## Features
* Email Sign-In with form validation
* Email Sign-Up with form validation
* Password recovery
* In-app notifications (beta)

## Installation
#### Clone
```sh
$ git clone https://github.com/tomasvio/i2a2ea.git
$ cd i2a2ea
$ npm install
```
#### Install Angularfire 2
```sh
$ npm install angularfire2 firebase --save
```
#### Include Firebase SDK typings
```sh
$ typings install file:node_modules/angularfire2/firebase3.d.ts --save --global && typings install
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
