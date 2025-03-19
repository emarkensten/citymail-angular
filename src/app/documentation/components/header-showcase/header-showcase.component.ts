import { Component } from '@angular/core';

@Component({
  selector: 'app-header-showcase',
  templateUrl: './header-showcase.component.html',
  styleUrls: ['./header-showcase.component.scss']
})
export class HeaderShowcaseComponent {
  logoSrc = 'assets/images/citymail-logo.svg';
  
  usageExample = `<app-header></app-header>`;
  
  toggleLogoSrc() {
    if (this.logoSrc === 'assets/images/citymail-logo.svg') {
      this.logoSrc = 'https://placeholder.com/42x42';
    } else {
      this.logoSrc = 'assets/images/citymail-logo.svg';
    }
  }
}