import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {NgFor} from '@angular/common';
import {SettingsPage} from '../settings/settings';
/**
 *
 *
 * @export
 * @class TabsPage
 * @version 0.2
 */
@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
  directives: [NgFor]
})
export class TabsPage {

  public tabPages: Array<{
    title: string,
    component: any,
    icon?: string
  }>;

  constructor() {

    this.tabPages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Settings', component: SettingsPage, icon: 'settings' },
    ];

  }
}
