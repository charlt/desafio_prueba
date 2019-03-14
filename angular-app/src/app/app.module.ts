import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { app_routing } from './app.routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/body/menu/menu.component';
import { ContentComponent } from './components/body/content/content.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

//Servicios
import { MyserviceService } from './services/app.service';
import { DetailService } from './services/app.detailservice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    HttpClientModule,
    MyserviceService,
    DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
