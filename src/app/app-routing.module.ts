import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellbikeComponent } from './sell/sellbike/sellbike.component';
import { DoorstepComponent } from './sell/doorstep/doorstep.component';
import { PhysicalComponent } from './sell/physical/physical.component';
import { SuccessComponent } from './sell/success/success.component';
import { PayComponent } from './sell/pay/pay.component';
import { from } from 'rxjs';
import { LocationComponent } from './buy/location/location.component';
import { BikeDetailsComponent } from './buy/bike-details/bike-details.component';
import { BikeInfoComponent } from './buy/bike-info/bike-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sell', component: SellbikeComponent },
  { path: 'door', component: DoorstepComponent },
  { path: 'physical', component: PhysicalComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'pay', component: PayComponent },
  { path: 'location', component: LocationComponent },
  { path: 'bikes', component: BikeDetailsComponent },
  { path: 'details', component: BikeInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
