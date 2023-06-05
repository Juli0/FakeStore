import {Component, Input, OnChanges} from '@angular/core';

export interface Tile {
	color: string;
	cols: number;
	rows: number;
	text: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnChanges {

	@Input() data: any;
	cols: number = 2;
	rows: number = 1;
	color: string = '#DDBDF1';

	ngOnChanges() {
		console.log('grid', this.data);
	}
}
