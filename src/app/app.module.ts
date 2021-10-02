import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/commmon Components/header/header.component';
import { FooterComponent } from '../app/commmon Components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from '../app/commmon Components/testimonials/testimonials.component';
import { PopularBikesComponent } from '../app/commmon Components/popular-bikes/popular-bikes.component';
import { SliderComponent } from './slider/slider.component';
import { AccordianComponent } from './accordian/accordian.component';
import { SellbikeComponent } from './sell/sellbike/sellbike.component';
import { StepperComponent } from './sell/stepper/stepper.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { EstimatedcostComponent } from './sell/estimatedcost/estimatedcost.component';
import { PhysicalComponent } from './sell/physical/physical.component';
import { DoorstepComponent } from './sell/doorstep/doorstep.component';
import { PayComponent } from './sell/pay/pay.component';
import { SuccessComponent } from './sell/success/success.component';
import { LocationComponent } from './buy/location/location.component';
import { BikeDetailsComponent } from './buy/bike-details/bike-details.component';
import { BikeInfoComponent } from './buy/bike-info/bike-info.component';
import { Slider1Component } from './buy/slider1/slider1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestimonialsComponent,
    PopularBikesComponent,
    SliderComponent,
    AccordianComponent,
    SellbikeComponent,
    StepperComponent,
    EstimatedcostComponent,
    PhysicalComponent,
    DoorstepComponent,
    PayComponent,
    SuccessComponent,
    LocationComponent,
    BikeDetailsComponent,
    BikeInfoComponent,
    Slider1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxOtpInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
