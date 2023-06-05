import { Component, OnInit } from '@angular/core';
import { ProductService } from "@api-rest/services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	products: any[] = [];

	constructor(private homeService: ProductService){
	}

	ngOnInit(): void {
		this.homeService.getProducts().subscribe(prod => this.products = prod);
	}



}
