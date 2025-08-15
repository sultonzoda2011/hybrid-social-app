# Hybrid Social App

This project is a hybrid social application that combines features from Instagram and Telegram, built using React with TypeScript. It includes functionalities for user authentication, registration, and real-time chat.

## Features

- User Registration
- User Login
- Real-time Chat Interface
- Responsive Design

## Technologies Used

- React
- TypeScript
- Firebase
- CSS

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 5.6 or higher)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd hybrid-social-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

1. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your project and copy the Firebase configuration.
   - Update the `src/firebase/config.ts` file with your Firebase configuration.

### Running the Application

To start the development server, run:

```
npm start
```

The application will be available at `http://localhost:3000`.

### Build for Production

To create a production build, run:

```
npm run build
```

This will generate a `build` folder with the optimized application.

## Usage

- Navigate to the login page to authenticate or register a new account.
- Once logged in, you can access the chat interface to communicate with other users.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.