Feature: Login
  As a user
  I want to login to my account
  So that I can access my profile

  Scenario: Login with correct credentials
    Given I am on the login page
    When I enter my username and password
    And I click the login button
    Then I should be redirected to the dashboard
