import { Component, OnInit } from '@angular/core';
import { global } from '../../config/constants';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	title = global.layout.header.title || 'Boilerplate App';
	constructor() { }

	ngOnInit(): void { }

}
