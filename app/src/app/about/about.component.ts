import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get('/api/customer/list')
			.toPromise()
			.then(res => console.log(res));
	}

}
