import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { UsersdataService } from './usersdata.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersinfoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpModule
  ],
  providers: [UsersdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
