import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ApiAiClient } from 'api-ai-javascript';
import { AppRoutingModule } from  './app.routes';

import { ChatDialogService } from './chat/chat-dialog.service';
import { GlobalsService } from './service/globals.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,//Initializing routes
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ApiAiClient
  ],
  // exports: [ ChatComponent ], // <-- export here
  providers: [
    ChatDialogService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    GlobalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
