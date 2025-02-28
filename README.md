# Test Automation Challenge

## 1. Python Script: Automation Testing of a Login API

### Description
The Python script automates the testing of a login API using the `requests` library. 
It includes test cases for both valid and invalid credentials, 
demonstrating how to verify successful authentication and handle failure scenarios.

#### Key Features
- Uses the `requests` library for HTTP operations.
- Verifies responses for valid and invalid credentials.
- Implements structured exception handling to manage connection and runtime errors.

#### Usage
1. Install dependencies: `pip install requests`.
2. Update the API endpoint and credentials in the script.
3. Run the script using `python login_API.py`.

#### Code Overview
- **`test_login_api()`**: Verifies responses for valid and invalid credentials.
- **`send_login_request()`**: Sends POST requests to the login API.
- **Exception Handling**: Ensures graceful error handling.

### 2. React Component: ItemList.jsx

#### Description
The `ItemList` React component renders a list of items passed as props. 
Each item is displayed in a `<li>` element, ensuring proper mapping of dynamic data.

#### Key Features
- Dynamically renders items from props.
- Includes PropTypes for type checking.
- Displays a message when no items are available.

#### Code Overview
- **`ItemList` Component**: Renders a list of items dynamically.
- **PropTypes**: Ensures the `items` prop is an array.
- **Fallback Behavior**: Displays a message if the `items` prop is empty.

### 3. Unit Test: ItemList.test.js

#### Description
The test suite verifies the functionality of the `ItemList` component. 
It ensures that the component correctly renders items and handles edge cases like empty arrays.

#### Key Features
- Uses **Jest** and **React Testing Library** for testing.
- Verifies the number of items rendered matches the props.
- Includes tests for fallback behavior when no items are passed.

#### Test Cases
- **Valid Items**: Confirms correct rendering of list items.
- **Empty Items**: Validates fallback message.

#### Usage
1. Install dependencies: `npm install jest @testing-library/react`.
2. Run tests using `npm test`.
