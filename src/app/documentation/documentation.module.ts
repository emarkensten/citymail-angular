import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationLandingComponent } from './documentation-landing/documentation-landing.component';
import { ComponentDetailsComponent } from './component-details/component-details.component';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { DeliveryOptionsComponent } from '../components/delivery-options/delivery-options.component';
import { PackageJourneyComponent } from '../components/package-journey/package-journey.component';

import { HeaderShowcaseComponent } from './components/header-showcase/header-showcase.component';
import { FooterShowcaseComponent } from './components/footer-showcase/footer-showcase.component';
import { DeliveryOptionsShowcaseComponent } from './components/delivery-options-showcase/delivery-options-showcase.component';
import { PackageJourneyShowcaseComponent } from './components/package-journey-showcase/package-journey-showcase.component';

@NgModule({
  declarations: [
    DocumentationLandingComponent,
    ComponentDetailsComponent,
    HeaderShowcaseComponent,
    FooterShowcaseComponent,
    DeliveryOptionsShowcaseComponent,
    PackageJourneyShowcaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DocumentationRoutingModule,
    HeaderComponent,
    FooterComponent,
    DeliveryOptionsComponent,
    PackageJourneyComponent
  ]
})
export class DocumentationModule { }