import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { MetroPage } from '../pages/metro/metro';
import { BusPage } from '../pages/bus/bus';
import { AddPage } from '../pages/add/add';
import { AboutPage } from '../pages/about/about';

import { CategoryPage } from '../pages/category/category';
import { EventsPage } from '../pages/events/events';
import { UpcomingPage } from '../pages/upcoming/upcoming';

import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    MetroPage,
    BusPage,
    AddPage,
    AboutPage,
    CategoryPage,
    EventsPage,
    UpcomingPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    MetroPage,
    BusPage,
    AddPage,
    AboutPage,
    CategoryPage,
    EventsPage,
    UpcomingPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
