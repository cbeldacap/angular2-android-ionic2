import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { MainPage } from './views/main/Main';
import { LoginPage } from './views/login/Login';
import { EntityComponent } from './views/main/entity/Entity';
import { DetailsComponent } from './views/main/details/Details';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    EntityComponent,
    DetailsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    EntityComponent,
    DetailsComponent
  ],
  providers: [
  ]
})
export class AppModule {}
