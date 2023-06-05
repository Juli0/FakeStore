import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from '@environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  	constructor(private http: HttpClient) { }

	getProducts(): Observable<any[]> {
		const url = `${environment.apiBase}/products`;
		return this.http.get<any[]>(url);
	}
}
