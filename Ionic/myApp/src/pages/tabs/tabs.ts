import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MetroPage } from '../metro/metro';
import { BusPage } from '../bus/bus';
import { AddPage } from '../add/add';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MetroPage;
  tab3Root = BusPage;
  tab4Root = AddPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
