@Recall
Feature: As a user,
I want to be able to Login and Logout
 
Scenario:  Login and Logout
Given am on the "Landing" Page
And I enter my "Username" as "wegit" 
And I enter my "Password" as "12345678"
When I click "Login" button
Then am on the "Home" Page
