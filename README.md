# Citymail Delivery Tracking (Angular + Bootstrap)

A modern delivery tracking interface for Citymail packages, built with Angular and Bootstrap, featuring a sleek mobile-first design with animated bottom sheets and a comprehensive component documentation system.

## Features

- 📦 Track package status and location
- 🚚 Change delivery options
- ⚡ Early delivery booking
- 🔄 Switch delivery method
- 📱 Mobile-first responsive design
- 🔼 Animated bottom sheets for modals
- 📚 Interactive component documentation

## Tech Stack

- **Framework:** Angular 17
- **Styling:** Bootstrap 5
- **Icons:** Bootstrap Icons
- **Language:** TypeScript

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
ng serve
```

Visit [http://localhost:4200](http://localhost:4200) to view the app.
Access component documentation at [http://localhost:4200/assets/docs/index.html](http://localhost:4200/assets/docs/index.html).

## Development

```bash
# Start development server
ng serve

# Build for production
ng build

# Start production build locally
ng serve --configuration=production

# Run linting
ng lint
```

## Project Structure

```
├── src/
│   ├── app/                    # Angular app directory
│   │   ├── components/         # Shared components
│   │   │   ├── header/         # Header component
│   │   │   ├── footer/         # Footer component
│   │   │   ├── package-journey/ # Package journey component
│   │   │   └── delivery-options/ # Delivery options with bottom sheets
│   │   ├── delivery-page/      # Main delivery page component
│   │   └── documentation/      # Interactive component documentation
│   ├── assets/                 # Static assets
│   │   ├── images/             # Image assets
│   │   └── docs/               # Component documentation HTML
│   └── styles.scss             # Global styles with bottom sheet animations
```

## Component Documentation

The project includes an interactive component documentation system:

- **Access:** Navigate to `/assets/docs/index.html` to view the documentation
- **Features:**
  - Live examples of each component
  - Code snippets for usage
  - API documentation for each component
  - Visual representation of component styling
  - Implementation details and best practices

## UI Components

The project uses Bootstrap components, including:
- Custom animated bottom sheets for modals
- Buttons for actions
- Form controls for email collection and checkboxes
- Cards for content sections
- Timeline visualization for package journey

## Browser Support

The app supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.