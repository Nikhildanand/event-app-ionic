import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetroPage } from './metro';

@NgModule({
  declarations: [
    MetroPage,
  ],
  imports: [
    IonicPageModule.forChild(MetroPage),
  ],
})
export class MetroPageModule {}
