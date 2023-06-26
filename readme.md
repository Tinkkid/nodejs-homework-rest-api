## Backend application REST API
Backend application for a RESTful API built using:
 - [Node.js](https://nodejs.org/en)
 - [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js. 
 - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
 - [Multer](github.com/expressjs/multer#readme) - Middleware for handling multipart/form-data, used for file uploads.
 - [Nodemailer](https://nodemailer.com/about/) -
 - [Joi](https://joi.dev/api/) - Schema description language and data validator for JavaScript.
 - [bcryptjs](https://github.com/kelektiv/node.bcrypt.js#readme): Library for hashing passwords.
 - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme): JSON Web Token implementation for Node.js.

 
 The API allows users to register, log in, log out, uploading avatars with Multer, send emails with nodemailer.
 Also includes additional endpoints for getting the current user, updating the subscription, updating avatars, verifying email addresses, resending verification emails, managing a collection of contacts.

### Getting Started
1. Clone this repository:

```bash
git clone https://github.com/Tinkkid/nodejs-homework-rest-api
```

2. Install all dependencies:

```bash
npm install
```

3. Set up the necessary environment variables in the .env file. Example you can find in .env.example file.
4. Start project:

```bash
npm start
```


### API Endpoints

The following endpoints are available:

#### Authentication:
1. `POST /api/auth/signup` - register a new user.
2. `POST /api/auth/login` - log in with existing credentials.
3. `GET /api/auth/logout` - log out the authenticated user.

#### Email Verification:
1. `GET /api/auth/verify/:verificationToken` - verify the user's email address using the provided verification token.
2. `POST /api/auth/verify` - resend a verification email to the user's email address.

#### User Operations:
1. `GET /api/users/current` - get the details of the currently authenticated user.
2. `PATCH /api/users/` - update the subscription details of the currently authenticated user.
3. `PATCH /api/users/avatars` - upload a new avatar for the currently authenticated user.

#### Contact Operations
1. `GET /api/contacts/` - get all contacts (requires authentication).
2. `GET /api/contacts/:contactId` - get a specific contact by ID (requires authentication).
3. `POST /api/contacts` - add a new contact (requires authentication).
4. `PUT /api/contacts/:contactId` - update a contact by ID (requires authentication).
5. `PATCH /api/contacts/:contactId/favorite` - update the favorite status of a contact by ID (requires authentication).
6. `DELETE /api/contacts/:contactId` - delete a contact by ID (requires authentication).

