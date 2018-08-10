import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RoutingModule } from '../config/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		PageNotFoundComponent,
		AboutComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule,
		RoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
