import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {PresentationModule} from "@presentation/presentation.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
	imports: [
		CommonModule,
		HomeRoutingModule,
		PresentationModule
	]
})
export class HomeModule { }
