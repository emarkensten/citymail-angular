# Angular CityMail Component Documentation

## Component Overview

| Component | Selector | Purpose | Screenshot |
|-----------|----------|---------|------------|
| Header | `app-header` | Navigation header with CityMail logo and info icons | N/A |
| Footer | `app-footer` | Page footer with links and contact info | N/A |
| DeliveryPage | `app-delivery-page` | Main page container for package tracking | N/A |
| DeliveryOptions | `app-delivery-options` | Options to modify delivery (early delivery, change method, etc.) | N/A |
| PackageJourney | `app-package-journey` | Timeline showing package delivery status | N/A |

## Components in Detail

### Header Component
**Selector:** `app-header`  
**Purpose:** Top navigation bar with CityMail branding  
**Features:**
- CityMail logo
- Globe icon (left)
- Info icon (right)

### Footer Component  
**Selector:** `app-footer`  
**Purpose:** Bottom navigation with links  
**Features:**
- Contact links
- Legal information

### DeliveryPage Component
**Selector:** `app-delivery-page`  
**Purpose:** Main container that orchestrates the package tracking experience  
**Features:**
- Displays package details (tracking number, status)
- Coordinates child components (header, footer, options, journey)
- Handles loading states and error messages

### DeliveryOptions Component
**Selector:** `app-delivery-options`  
**Purpose:** Presents delivery modification options  
**Features:**
- Early delivery option (19 kr)
- Change delivery method (29-39 kr)
- Share delivery tracking
- Modal windows for each option
- Payment flow with email collection

### PackageJourney Component
**Selector:** `app-package-journey`  
**Purpose:** Visual timeline of package's delivery journey  
**Features:**
- Timeline with status points
- Location and timestamp for each point
- Expandable view with "Show more"/"Show less"
- Icon indicators for each status point

## Usage Examples

### Basic Page Layout
```html
<app-header></app-header>
<app-delivery-page></app-delivery-page>
<app-footer></app-footer>
```

### Delivery Page Implementation
```html
<div class="container">
  <app-package-journey></app-package-journey>
  <app-delivery-options></app-delivery-options>
</div>
```

## Component Dependencies
- DeliveryPage depends on PackageService
- PackageJourney depends on PackageService
- DeliveryOptions uses Bootstrap modals

## Component Styling
All components use Bootstrap 5.3.2 along with custom SCSS for CityMail branding.
Key custom classes include:
- `.citymail-card`: Card container with proper padding/margins
- `.text-citymail`: CityMail brand color for text
- `.btn-citymail`: CityMail styled button
- `.journey-point` and `.journey-line`: Custom styling for package journey