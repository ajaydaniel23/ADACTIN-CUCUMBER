Feature: Booking Hotel
@LaunchTest
Scenario Outline: Login Adactin Hotel Booking App
Given Launch the application
When Enter the username as <username>
And Enter password as <password>
Then Click Login Button

Examples:
|username|password|
|aj23daniel|charizard|
|ajaydaniel|charizard|
|ronaldo|manchester_United|
|aj23daniel|charizard|

Scenario: Search Hotel by Entering the Required Options
When Select the Location
And Select the Hotel from the  given options
And Select the type of Room needed for your stay
And Choose the number of Rooms needed
And Enter Check In Date
And Enter Check out Date
And Enter the Adults per room
And Enter the CHildrens per room
Then Click Search Button

Scenario: Click on the Hotels available based on Required Options entered
When select the Hotel
Then click search button

Scenario: Enter the Personal Details
When Enter First name
And Enter Last Name
And Enter Billing Address 
And Enter Credit Card Number
And choose the card type
And Choose the Expiry date
And Choose the Exiry Month
And Enter the CVV numebr 
Then Click Book Now

Scenario: Once the Booking is complete Log out
Then Click the logout Button