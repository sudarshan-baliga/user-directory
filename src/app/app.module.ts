import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';
import { UsersdataService } from './usersdata.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    UsersinfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpModule,
    FormsModule
  ],
  providers: [UsersdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
