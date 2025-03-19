import { Component } from '@angular/core';
import { JourneyPoint } from '../../../services/package.service';

@Component({
  selector: 'app-package-journey-showcase',
  templateUrl: './package-journey-showcase.component.html',
  styleUrls: ['./package-journey-showcase.component.scss']
})
export class PackageJourneyShowcaseComponent {
  usageExample = `<app-package-journey></app-package-journey>`;
  
  sampleJourneyPoints: JourneyPoint[] = [
    {
      location: 'Årsta',
      timestamp: 'Igår 16:48',
      description: 'Paketet har ankommit till terminal',
      icon: 'check-square',
      status: 'completed'
    },
    {
      location: 'Citymail',
      timestamp: '26 jan 18:40',
      description: 'Paketet har aviserats, men ännu inte lämnats in till Citymail',
      icon: 'building',
      status: 'completed'
    }
  ];
  
  // Sample journey point for interactive creation
  newPoint: JourneyPoint = {
    location: '',
    timestamp: '',
    description: '',
    icon: 'circle',
    status: 'pending'
  };
  
  // Add a new journey point to the sample
  addJourneyPoint() {
    if (this.newPoint.location && this.newPoint.timestamp && this.newPoint.description) {
      this.sampleJourneyPoints.unshift({...this.newPoint});
      // Reset form
      this.newPoint = {
        location: '',
        timestamp: '',
        description: '',
        icon: 'circle',
        status: 'pending'
      };
    }
  }
}