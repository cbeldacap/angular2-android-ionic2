import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { MainPage } from './views/main/Main';

@NgModule({
  declarations: [
    MyApp,
    MainPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
  ],
  providers: [
  ]
})
export class AppModule {}
