import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { EventsPage } from '../events/events';
import { UpcomingPage } from '../upcoming/upcoming';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})

export class CategoryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController) {

  }
  businessCheck: boolean = false;   
  concertsCheck: boolean = false;
  exhibitionsCheck: boolean = false;
  festivalsCheck: boolean = false;
  meetupsCheck: boolean = false;
  musicCheck: boolean = false;
  partiesCheck: boolean = false;
  performancesCheck: boolean = false;

  sportsCheck: boolean = false;
  workshopsCheck: boolean = false;

  select: string = 'Select All';
  secondary: string = 'secondary';
  allCheck: boolean = false;

  day: boolean = this.navParams.get('param');

  ionViewDidLoad() { 
  }
  check() {
    if (this.businessCheck &&
      this.concertsCheck &&
      this.exhibitionsCheck &&
      this.festivalsCheck &&
      this.meetupsCheck &&
      this.musicCheck &&
      this.partiesCheck &&
      this.performancesCheck &&
      this.sportsCheck &&
      this.workshopsCheck) {
        this.allCheck = true;
      }  
    else {
      this.allCheck = false;
    }
  }
  checking() {
    this.check();
    if (this.allCheck){
        this.redButton();
        console.log('True');
      }
    else if (!this.businessCheck &&
      !this.concertsCheck &&
      !this.exhibitionsCheck &&
      !this.festivalsCheck &&
      !this.meetupsCheck &&
      !this.musicCheck &&
      !this.partiesCheck &&
      !this.performancesCheck &&
      !this.sportsCheck &&
      !this.workshopsCheck){
        this.allCheck = false;
        this.greenButton();
        console.log('False');
      }
      else {
        this.greenButton();
      }
  }
  business() {
    if(this.businessCheck===false){
      this.businessCheck = true;
    }
    else{
      this.businessCheck = false;
    }
    this.checking();
  }
  concerts() {
    if (this.concertsCheck === false) {
      this.concertsCheck = true;
    }
    else {
      this.concertsCheck = false;
    }
    this.checking();
  }
  exhibitions() {
    if (this.exhibitionsCheck === false) {
      this.exhibitionsCheck = true;
    }
    else {
      this.exhibitionsCheck = false;
    }   
    this.checking();
  }
  festivals() {
    if (this.festivalsCheck === false) {
      this.festivalsCheck = true;
    }
    else {
      this.festivalsCheck = false;
    }   
    this.checking();
  }
  meetups() {
    if (this.meetupsCheck === false) {
      this.meetupsCheck = true;
    }
    else {
      this.meetupsCheck = false;
    }
    this.checking();
  }
  music() {
    if (this.musicCheck === false) {
      this.musicCheck = true;
    }
    else {
      this.musicCheck = false;
    }
    this.checking();
  }
  parties() {
    if (this.partiesCheck === false) {
      this.partiesCheck = true;
    }
    else {
      this.partiesCheck = false;
    }
    this.checking();
  }
  performances() {
    if (this.performancesCheck === false) {
      this.performancesCheck = true;
    }
    else {
      this.performancesCheck = false;
    }
    this.checking();
  }
  sports() {
    if (this.sportsCheck === false) {
      this.sportsCheck = true;
    }
    else {
      this.sportsCheck = false;
    }
    this.checking();
  }
  workshops() {
    if (this.workshopsCheck === false) {
      this.workshopsCheck = true;
    }
    else {
      this.workshopsCheck = false;
    }    
    this.checking();
  }
  selection() {
    this.check();
    if (!this.allCheck) {
      this.tick();
      this.redButton();
    }
    else {
      this.untick();
      this.greenButton();
   }
  }
  greenButton() {

    this.select = 'Select All';
    this.secondary = 'secondary';
  }
  redButton() {
    this.select = "Deslect All";
    this.secondary = "danger";

  }
  tick() {
    this.allCheck = false;
    this.businessCheck =
      this.concertsCheck =
      this.exhibitionsCheck =
      this.festivalsCheck =
      this.meetupsCheck =
      this.musicCheck =
      this.partiesCheck =
      this.performancesCheck =
      this.sportsCheck =
      this.workshopsCheck = true;
  }
  untick() {
    this.allCheck = true;
    this.businessCheck =
      this.concertsCheck =
      this.exhibitionsCheck =
      this.festivalsCheck =
      this.meetupsCheck =
      this.musicCheck =
      this.partiesCheck =
      this.performancesCheck =
      this.sportsCheck =
      this.workshopsCheck = false;
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'No category selected!',
      subTitle: 'Please select at least one category from the list',
      buttons: ['OK']
    });
    alert.present();
  }
  pageChange() {
    if (
      this.businessCheck ||
      this.concertsCheck ||
      this.exhibitionsCheck ||
      this.festivalsCheck ||
      this.meetupsCheck ||
      this.musicCheck ||
      this.partiesCheck ||
      this.performancesCheck ||
      this.sportsCheck ||
      this.workshopsCheck){
        if(this.day){
          this.navCtrl.push(EventsPage);
        }
        else {
          this.navCtrl.push(UpcomingPage);
        }
    }
    else{
     this.showAlert();
    }

  }
}
