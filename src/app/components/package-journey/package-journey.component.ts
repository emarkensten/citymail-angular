import { Component, OnInit } from '@angular/core';
import { PackageService, JourneyPoint } from '../../services/package.service';

@Component({
  selector: 'app-package-journey',
  templateUrl: './package-journey.component.html',
  styleUrls: ['./package-journey.component.scss']
})
export class PackageJourneyComponent implements OnInit {
  journeyPoints: JourneyPoint[] = [];
  showAllPoints: boolean = false;
  
  constructor(private packageService: PackageService) {}
  
  ngOnInit() {
    this.packageService.getPackageInfo().subscribe(data => {
      this.journeyPoints = data.journeyPoints;
    });
  }
  
  toggleShowAll() {
    this.showAllPoints = !this.showAllPoints;
  }
}