import { Component, AfterViewInit } from '@angular/core';

// Declaration for Bootstrap
declare var bootstrap: any;

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.scss']
})
export class DeliveryOptionsComponent implements AfterViewInit {
  email: string = '';
  termsAccepted: boolean = false;
  
  earlyDeliveryModal: any;
  changeDeliveryModal: any;
  
  ngAfterViewInit() {
    try {
      // Initialize Bootstrap modals
      this.earlyDeliveryModal = new bootstrap.Modal(document.getElementById('earlyDeliveryModal'));
      this.changeDeliveryModal = new bootstrap.Modal(document.getElementById('changeDeliveryModal'));
    } catch (error) {
      console.error('Error initializing modals:', error);
    }
  }
  
  openEarlyDeliveryModal() {
    try {
      this.earlyDeliveryModal.show();
    } catch (error) {
      console.error('Error opening early delivery modal:', error);
    }
  }
  
  openChangeDeliveryModal() {
    try {
      this.changeDeliveryModal.show();
    } catch (error) {
      console.error('Error opening change delivery modal:', error);
    }
  }
}