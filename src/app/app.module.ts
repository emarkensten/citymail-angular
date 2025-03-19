import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PackageJourneyComponent } from './components/package-journey/package-journey.component';
import { DeliveryOptionsComponent } from './components/delivery-options/delivery-options.component';

// Services
import { PackageService } from './services/package.service';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryPageComponent,
    HeaderComponent,
    FooterComponent,
    PackageJourneyComponent,
    DeliveryOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PackageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }