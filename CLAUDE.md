# Angular Citymail Project Guidelines

## Build Commands
- `npm start` - Start development server
- `npm run build` - Build for production 
- `npm run watch` - Watch mode for development
- `npm test` - Run all tests
- `ng test --include=**/your-component.spec.ts` - Run single test
- `npm run lint` - Lint codebase

## Code Style Guidelines
- **Architecture**: Component-based with separate HTML, SCSS, and TS files
- **Typing**: Use strict typing (interfaces for data models)
- **Naming**: camelCase for methods/variables, PascalCase for classes/interfaces
- **Imports**: Use path aliases (@app/*, @env/*, @assets/*)
- **Error Handling**: Use try/catch blocks with console.error
- **State Management**: RxJS BehaviorSubject for service state
- **Styling**: Bootstrap 5.3.2 with Bootstrap Icons
- **Component Structure**: Follow Angular lifecycle hooks properly (ngOnInit, ngAfterViewInit)
- **Services**: Injectable with providedIn: 'root'
- **Comments**: Document complex logic and public API methods