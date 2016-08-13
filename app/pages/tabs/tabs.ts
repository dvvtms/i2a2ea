import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {NgFor} from '@angular/common';

/**
 *
 *
 * @export
 * @class TabsPage
 * @version 0.1
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
      { title: 'HomePage', component: HomePage, icon: 'home' },
    ];

  }
}
