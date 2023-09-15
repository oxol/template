import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AmbulanteArbeitComponent } from './ambulante-arbeit/ambulante-arbeit.component';
import { StationaereArbeitComponent } from './stationaere-arbeit/stationaere-arbeit.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { StellenausschreibungenComponent } from './stellenausschreibungen/stellenausschreibungen.component';
import { AnsprechpartnerComponent } from './ansprechpartner/ansprechpartner.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'ambulant', component: AmbulanteArbeitComponent },
  { path: 'stationaer', component: StationaereArbeitComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'ueberuns', component: UeberUnsComponent },
  { path: 'stellenausschreibungen', component: StellenausschreibungenComponent },
  { path: 'ansprechpartner', component: AnsprechpartnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
