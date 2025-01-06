import requests

BASE_URL = "https://example.com/api/login"  # Replace with the actual endpoint


def test_login_api():
    """
    Test the login API using POST requests with valid and invalid credentials.

    This function performs the following:
    1. Sends a POST request with valid credentials to verify successful authentication.
    2. Sends a POST request with invalid credentials to ensure proper rejection.

    Both tests log the status code and relevant responses, such as the token
    or error messages, for verification.

    Returns:
        None
    """
    # Test Case: Valid Credentials
    valid_payload = {
        "username": "test_user",
        "password": "secure_password"
    }
    response = requests.post(BASE_URL, json=valid_payload)
    print("Valid Credentials Test:")
    print(f"Status Code: {response.status_code}")
    if response.status_code == 200:
        print(f"Token: {response.json().get('token')}")
    else:
        print("Authentication failed for valid credentials.")
    print()

    # Test Case: Invalid Credentials
    invalid_payload = {
        "username": "test_user",
        "password": "wrong_password"
    }
    response = requests.post(BASE_URL, json=invalid_payload)
    print("Invalid Credentials Test:")
    print(f"Status Code: {response.status_code}")
    if response.status_code == 401:
        print("Properly rejected invalid credentials.")
    else:
        print("Unexpected response for invalid credentials.")
    print()


if __name__ == "__main__":
    """
    Main entry point for the script.

    Calls the `test_login_api()` function to execute the test cases for the 
    login API and logs the results to the console.

    Returns:
        None
    """
    test_login_api()
