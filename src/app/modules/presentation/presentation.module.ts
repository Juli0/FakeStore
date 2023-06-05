import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import {CoreModule} from "@core/core.module";



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
		CoreModule
  ],
	exports: [
		GridComponent
	]
})
export class PresentationModule { }
