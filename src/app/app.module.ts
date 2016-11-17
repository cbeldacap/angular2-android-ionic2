import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { MainPage } from './views/main/Main';
import { LoginPage } from './views/login/Login';
import { EntityComponent } from './views/main/entity/Entity';
import { EntityDetails } from './views/main/entity-detail/entity-detail.component';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    EntityComponent,
    EntityDetails
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
    EntityDetails
  ],
  providers: [
  ]
})
export class AppModule {}
