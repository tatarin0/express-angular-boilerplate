import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { AboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about.html', component: AboutComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,
			{ enableTracing: false }
		)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class RoutingModule { }