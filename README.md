# Ice-Task-3_Insy7314_ST10443456
Write Unit Test

# ICE Task 3 - Unit Testing

## Student Number
ST10443456

## Description

This project demonstrates unit testing of backend validation logic using Jest.

A `validateUser` function validates user information before it is processed by the application.

## Technologies Used

- Node.js
- JavaScript
- Jest

## Validation Rules

The `validateUser` function checks that:

- Name, email, and password are provided.
- The email address contains an `@` symbol.
- The password contains at least 6 characters.
- Valid user information returns `null`.

## Unit Tests

The following unit tests were implemented:

1. Returns an error when required fields are missing.
2. Returns an error when the email address is invalid.
3. Returns an error when the password is shorter than 6 characters.
4. Returns `null` when valid user information is provided.

## Running the Tests

Install the project dependencies:

    npm install

Run the unit tests:

    npm test

A successful test run should show:

    Tests: 4 passed, 4 total

## Project Structure

    api/
    ├── tests/
    │   └── validateUser.test.js
    ├── utils/
    │   └── validateUser.js
    ├── package.json
    └── package-lock.json