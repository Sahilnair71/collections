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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
