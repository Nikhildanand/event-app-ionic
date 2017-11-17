import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  day: boolean;
  
  constructor(public navCtrl: NavController) {

  }

  today() {
    this.day = true;
    this.navCtrl.push(CategoryPage, {param: this.day });
  }

  upcoming() {
    this.day = false;
    this.navCtrl.push(CategoryPage, {param: this.day});
  }

  search() {
    console.log('Search');
    this.navCtrl.push(SearchPage);
  }
}
