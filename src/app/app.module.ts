import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewCmpComponent } from 'app/new-cmp/new-cmp.component';

import { MyNewServiceService } from 'app/services/my-new-service/my-new-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyNewServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
