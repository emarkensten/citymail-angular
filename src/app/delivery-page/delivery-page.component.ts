import { Component, OnInit } from '@angular/core';
import { PackageService, PackageInfo } from '../services/package.service';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.scss']
})
export class DeliveryPageComponent implements OnInit {
  packageInfo: PackageInfo | null = null;
  loading: boolean = true;
  error: string | null = null;
  
  constructor(private packageService: PackageService) {}
  
  ngOnInit() {
    this.loadPackageInfo();
  }
  
  // Make this public so it can be called from the template
  public loadPackageInfo() {
    this.loading = true;
    this.packageService.getPackageInfo().subscribe({
      next: (data) => {
        this.packageInfo = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading package info:', err);
        this.error = 'Could not load package information. Please try again later.';
        this.loading = false;
      }
    });
  }
}