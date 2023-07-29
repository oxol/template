import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AmbulanteArbeitComponent } from './ambulante-arbeit/ambulante-arbeit.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { StationaereArbeitComponent } from './stationaere-arbeit/stationaere-arbeit.component';
import { StellenausschreibungenComponent } from './stellenausschreibungen/stellenausschreibungen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AmbulanteArbeitComponent,
    UeberUnsComponent,
    KontaktComponent,
    StationaereArbeitComponent,
    StellenausschreibungenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
