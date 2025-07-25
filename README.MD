# Hello World OAuth Application 🌍

A modern Hello World website with Google OAuth 2.0 authentication, built with Express.js and Passport.js.

## Features ✨

- **Secure OAuth Authentication**: Google OAuth 2.0 integration
- **Modern UI**: Responsive design with glassmorphism effects
- **User Dashboard**: Personalized user experience after login
- **Session Management**: Secure session-based authentication
- **Error Handling**: Comprehensive error handling and user feedback
- **Testing**: Full test coverage with Jest and Supertest

## Quick Start 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google OAuth 2.0 credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hello-world-oauth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Google OAuth credentials:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   SESSION_SECRET=your_super_secret_session_key
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Visit the application**
   Open your browser and go to `http://localhost:3000`

## Google OAuth Setup 🔧

To get your Google OAuth credentials:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (or Google People API)
4. Go to "Credentials" and create "OAuth 2.0 Client IDs"
5. Set the authorized redirect URI to: `http://localhost:3000/auth/google/callback`
6. Copy the Client ID and Client Secret to your `.env` file

### Production Setup

For production deployment, make sure to:
- Set `NODE_ENV=production`
- Use a strong, randomly generated `SESSION_SECRET`
- Update the redirect URI to your production domain
- Enable HTTPS

## Project Structure 📁

```
hello-world-oauth/
├── server.js              # Main application server
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
├── jest.config.js        # Jest testing configuration
├── public/               # Static files
│   └── styles.css        # Application styles
├── views/                # EJS templates
│   ├── index.ejs         # Home page
│   ├── dashboard.ejs     # User dashboard
│   ├── error.ejs         # Error page
│   └── layout.ejs        # Base layout
└── tests/                # Test files
    ├── setup.js          # Test configuration
    ├── app.test.js       # Main application tests
    └── auth.test.js      # Authentication tests
```

## API Routes 🛣️

| Route | Method | Description | Authentication |
|-------|--------|-------------|----------------|
| `/` | GET | Home page | Public |
| `/dashboard` | GET | User dashboard | Required |
| `/auth/google` | GET | Initiate Google OAuth | Public |
| `/auth/google/callback` | GET | OAuth callback | Public |
| `/logout` | GET | Logout user | Public |

## Testing 🧪

Run the test suite:

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## Technologies Used 🛠️

- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js, Google OAuth 2.0
- **Templating**: EJS
- **Styling**: CSS3 with modern features
- **Testing**: Jest, Supertest
- **Session Management**: express-session

## Security Features 🔒

- **OAuth 2.0**: Secure authentication flow
- **Session Security**: Secure session configuration
- **CSRF Protection**: Built-in protection mechanisms
- **Environment Variables**: Sensitive data protection
- **Input Validation**: Request validation and sanitization

## Development 👨‍💻

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run the test suite
- `npm test -- --coverage` - Run tests with coverage report

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |
| `SESSION_SECRET` | Session encryption key | Yes |
| `PORT` | Server port (default: 3000) | No |
| `NODE_ENV` | Environment (development/production) | No |

## Deployment 🚀

### Heroku

1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Update OAuth redirect URI to your Heroku domain
4. Deploy using Git or GitHub integration

### Other Platforms

The application is compatible with most Node.js hosting platforms. Make sure to:
- Set all required environment variables
- Update OAuth redirect URIs
- Use HTTPS in production

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💬

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Review the Google OAuth documentation
3. Ensure your environment variables are correctly set
4. Verify your OAuth redirect URIs match your configuration

## Acknowledgments 🙏

- [Passport.js](http://www.passportjs.org/) for authentication middleware
- [Express.js](https://expressjs.com/) for the web framework
- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) for secure authentication

---

**Happy coding! 🎉**
