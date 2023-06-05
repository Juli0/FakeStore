import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "@core/core.module";
import {ApiRestModule} from "@api-rest/api-rest.module";
import {PresentationModule} from "@presentation/presentation.module";
import {MaterialModule} from "@material/material.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  	ApiRestModule,
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		CoreModule,
		MaterialModule,
		PresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
