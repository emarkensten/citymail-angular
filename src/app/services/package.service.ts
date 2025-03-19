import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PackageInfo {
  id: string;
  trackingNumber: string;
  status: string;
  estimatedDelivery: string;
  address: string;
  deliveryTime: string;
  journeyPoints: JourneyPoint[];
}

export interface JourneyPoint {
  location: string;
  timestamp: string;
  description: string;
  icon: string;
  status: 'completed' | 'pending';
}

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  // Mock data for the package
  private packageData: PackageInfo = {
    id: '12345',
    trackingNumber: 'CM12345678SE',
    status: 'On the way',
    estimatedDelivery: 'tor 6 feb',
    address: 'Rosenlundsgatan 29A',
    deliveryTime: 'torsdag 6 februari runt 13:00',
    journeyPoints: [
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
    ]
  };

  private packageSubject = new BehaviorSubject<PackageInfo>(this.packageData);
  
  constructor() { }

  // Get package data
  getPackageInfo() {
    return this.packageSubject.asObservable();
  }

  // Update delivery options (mock implementation)
  updateDeliveryOption(option: string, price: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Delivery option updated to: ${option} for ${price} kr`);
        resolve(true);
      }, 500);
    });
  }
}