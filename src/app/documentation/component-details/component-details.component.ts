import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.scss']
})
export class ComponentDetailsComponent {
  components = [
    { id: 'header', name: 'Header', route: '/docs/components/header' },
    { id: 'footer', name: 'Footer', route: '/docs/components/footer' },
    { id: 'package-journey', name: 'Package Journey', route: '/docs/components/package-journey' },
    { id: 'delivery-options', name: 'Delivery Options', route: '/docs/components/delivery-options' }
  ];

  constructor(private router: Router) {}

  get activeComponent() {
    const url = this.router.url;
    const activeComponent = this.components.find(comp => url.includes(comp.id));
    return activeComponent ? activeComponent.name : '';
  }
}