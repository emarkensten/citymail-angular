import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation-landing',
  templateUrl: './documentation-landing.component.html',
  styleUrls: ['./documentation-landing.component.scss']
})
export class DocumentationLandingComponent {
  components = [
    {
      name: 'Header',
      selector: 'app-header',
      description: 'Top navigation bar with CityMail branding',
      route: '/docs/components/header'
    },
    {
      name: 'Footer',
      selector: 'app-footer',
      description: 'Bottom navigation with links',
      route: '/docs/components/footer'
    },
    {
      name: 'Package Journey',
      selector: 'app-package-journey',
      description: 'Timeline showing package delivery status',
      route: '/docs/components/package-journey'
    },
    {
      name: 'Delivery Options',
      selector: 'app-delivery-options',
      description: 'Options to modify delivery',
      route: '/docs/components/delivery-options'
    }
  ];
}