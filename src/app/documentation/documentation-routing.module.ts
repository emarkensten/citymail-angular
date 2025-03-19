import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationLandingComponent } from './documentation-landing/documentation-landing.component';
import { ComponentDetailsComponent } from './component-details/component-details.component';
import { HeaderShowcaseComponent } from './components/header-showcase/header-showcase.component';
import { FooterShowcaseComponent } from './components/footer-showcase/footer-showcase.component';
import { DeliveryOptionsShowcaseComponent } from './components/delivery-options-showcase/delivery-options-showcase.component';
import { PackageJourneyShowcaseComponent } from './components/package-journey-showcase/package-journey-showcase.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationLandingComponent
  },
  {
    path: 'components',
    component: ComponentDetailsComponent,
    children: [
      { path: '', redirectTo: 'header', pathMatch: 'full' },
      { path: 'header', component: HeaderShowcaseComponent },
      { path: 'footer', component: FooterShowcaseComponent },
      { path: 'delivery-options', component: DeliveryOptionsShowcaseComponent },
      { path: 'package-journey', component: PackageJourneyShowcaseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }