# Authorization prototype

Build a prototype authentication setup using github OAuth authentication.

Acceptance criteria:

- The user should be able to register
- The user should be able to sign in
- The user should be able to log out
- When the is signed in, display the text “logged in” in the bottom of the page.

Resources: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

##Start developing

To start developing first create a `.env` file at the root of the project and set the environment variables stated below. Then open two terminal instances and first run `npm run server` then in the other terminal instance run `npm start`.
Change the loginbutton.jsx file, so that the login and the logout buttons point to the absolute path `http://localhost:9001/auth/github` and `http://localhost:9001/auth/github/logout`
so it will work in local development.

## Environmental variables used.

- CALLBACK= The callback used when registering your app at OAuth2.0 provider.
- DB_DATABASE= Database Name.
- DB_HOST= Database Host.
- DB_PASSWORD= Database Password
- DB_PORT= Database Port
- DB_USERNAME= Database username
- CLIENT_ID= Client ID of you get from OAuth2.0 provider.
- CLIENT_SECRET=Client Secret you get from OAuth2.0 provider.
- COOKIE_KEY=Secret string to encrypt cookie.

To use .env file. create a `.env` file at project root. Then `npm install dotenv` and write `require('dotenv').config()` at the top of you server file, then make sure you have added `.env` to your `.gitignore` and then your done!
