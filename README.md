# AngularFire CRUD Template
A ready-to-go template to kickstart your Angular and Firebase applications. This repo provides a solid foundation with a CRUD structure using AngularFire, enabling you to quickly move forward with your projects.

:star2: If you find this project helpful or useful, a click on **star** button would be much appreciated to show your support! :)

### Features:
- **Angular 16**
- Pre-Built CRUD service template.
- Easy setup and customization.
- Error handling practices.
  
### Section
- [Setup](#Setup)
- [Testing](#testing)
- [Usage](#usage)
- [Version](#version)
- [Resources](#resources)
- [Contributing](#contributing)
  
## Setup

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/en/) and [Angular CLI](https://angular.io/cli) installed.
- Create a [Firebase project](console.firebase.google.com).

### Getting Started

1. Clone the repository to your local:
   
```
git clone https://github.com/devin-cheung/AngularFire-CRUD-Template.git
cd AngularFire-CRUD-Template
npm install
```

2. After you "Register app" on firebase console, you can copy configuration into `src/environments/environment.ts`

```typescript
export const environment = {
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

3. Good to go:

```
ng serve
```

## Testing

1. Replace `Your_Collection_Name` in `src/app/app.component.ts` with one of your Firestore collection name.

2. Navigate to `http://localhost:4200/`, ensure there are no console errors regarding Firestore connectivity.

## Usage

- The primary implementation of the CRUD template can be found in `app/services/firebase.service.ts`. Feel free to modify it according to your personal needs.

```typescript
// Import the pre-built service template
import { FirebaseService } from './services/firebase.service';
```

```typescript
// Inject FirebaseService in the constructor
constructor(private db:FirebaseService){}
```

```typescript
// Fetch a document from a specific collection by calling getDocument
const data = await this.db.getDocument("Collection_Name","Collection_ID")
```

## Version

Key dependencies used in this template:

| Dependency    | Version |
|---------------|---------|
| Angular       | 16.1.0  |
| @angular/fire | 7.6.1   |
| rxfire        | 6.0.3   |

## Resources

- [Register app guide](https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#9)
- [Angularfire official repository](https://github.com/angular/angularfire)

## Contributing

Feel free to open issues and pull requests to make this template even better!

⭐️ Don't forget to hit the **star** if you like this template, your support is greatly appreciated!
