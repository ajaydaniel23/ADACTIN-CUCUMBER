$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Hotel",
  "description": "",
  "id": "booking-hotel",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Adactin Hotel Booking App",
  "description": "",
  "id": "booking-hotel;login-adactin-hotel-booking-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LaunchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "booking-hotel;login-adactin-hotel-booking-app;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "booking-hotel;login-adactin-hotel-booking-app;;1"
    },
    {
      "cells": [
        "aj23daniel",
        "charizard"
      ],
      "line": 11,
      "id": "booking-hotel;login-adactin-hotel-booking-app;;2"
    },
    {
      "cells": [
        "ajaydaniel",
        "charizard"
      ],
      "line": 12,
      "id": "booking-hotel;login-adactin-hotel-booking-app;;3"
    },
    {
      "cells": [
        "ronaldo",
        "manchester_United"
      ],
      "line": 13,
      "id": "booking-hotel;login-adactin-hotel-booking-app;;4"
    },
    {
      "cells": [
        "aj23daniel",
        "charizard"
      ],
      "line": 14,
      "id": "booking-hotel;login-adactin-hotel-booking-app;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Adactin Hotel Booking App",
  "description": "",
  "id": "booking-hotel;login-adactin-hotel-booking-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LaunchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the username as aj23daniel",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter password as charizard",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.launch_the_application()"
});
formatter.result({
  "duration": 11997514900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition_Class.click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Login Adactin Hotel Booking App",
  "description": "",
  "id": "booking-hotel;login-adactin-hotel-booking-app;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LaunchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the username as ajaydaniel",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter password as charizard",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.launch_the_application()"
});
formatter.result({
  "duration": 635400100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition_Class.click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Login Adactin Hotel Booking App",
  "description": "",
  "id": "booking-hotel;login-adactin-hotel-booking-app;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LaunchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the username as ronaldo",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter password as manchester_United",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.launch_the_application()"
});
formatter.result({
  "duration": 424208200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition_Class.click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Login Adactin Hotel Booking App",
  "description": "",
  "id": "booking-hotel;login-adactin-hotel-booking-app;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LaunchTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the username as aj23daniel",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter password as charizard",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.launch_the_application()"
});
formatter.result({
  "duration": 412253100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition_Class.click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Search Hotel by Entering the Required Options",
  "description": "",
  "id": "booking-hotel;search-hotel-by-entering-the-required-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Select the Location",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Select the Hotel from the  given options",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select the type of Room needed for your stay",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Choose the number of Rooms needed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter Check out Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter the Adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the CHildrens per room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.select_the_Location()"
});
formatter.result({
  "duration": 3076467900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#location\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6MPQ6O6R\u0027, ip: \u0027192.168.29.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ajayd\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9068c3c827b9bc2f12e97046d2ae2086\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.Adacting_Base_Class.Base_Class_Adactin.dropdown(Base_Class_Adactin.java:39)\r\n\tat com.adactin.stepdefinition.StepDefinition_Class.select_the_Location(StepDefinition_Class.java:61)\r\n\tat ✽.When Select the Location(Adactin.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition_Class.select_the_Hotel_from_the_given_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.select_the_type_of_Room_needed_for_your_stay()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.choose_the_number_of_Rooms_needed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_Check_In_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_Check_out_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_the_Adults_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_the_CHildrens_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Click on the Hotels available based on Required Options entered",
  "description": "",
  "id": "booking-hotel;click-on-the-hotels-available-based-on-required-options-entered",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "select the Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.select_the_Hotel()"
});
formatter.result({
  "duration": 21275600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#radiobutton_0\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6MPQ6O6R\u0027, ip: \u0027192.168.29.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ajayd\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9068c3c827b9bc2f12e97046d2ae2086\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.Adacting_Base_Class.Base_Class_Adactin.clickbutton(Base_Class_Adactin.java:36)\r\n\tat com.adactin.stepdefinition.StepDefinition_Class.select_the_Hotel(StepDefinition_Class.java:106)\r\n\tat ✽.When select the Hotel(Adactin.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition_Class.click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Enter the Personal Details",
  "description": "",
  "id": "booking-hotel;enter-the-personal-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Enter First name",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "choose the card type",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Choose the Expiry date",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Choose the Exiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter the CVV numebr",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click Book Now",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.enter_First_name()"
});
formatter.result({
  "duration": 21989500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#first_name\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6MPQ6O6R\u0027, ip: \u0027192.168.29.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ajayd\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9068c3c827b9bc2f12e97046d2ae2086\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.Adacting_Base_Class.Base_Class_Adactin.sendvalue(Base_Class_Adactin.java:29)\r\n\tat com.adactin.stepdefinition.StepDefinition_Class.enter_First_name(StepDefinition_Class.java:116)\r\n\tat ✽.When Enter First name(Adactin.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition_Class.enter_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_Billing_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_Credit_Card_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.choose_the_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.choose_the_Expiry_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.choose_the_Exiry_Month()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.enter_the_CVV_numebr()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition_Class.click_Book_Now()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Once the Booking is complete Log out",
  "description": "",
  "id": "booking-hotel;once-the-booking-is-complete-log-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Click the logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Class.click_the_logout_Button()"
});
formatter.result({
  "duration": 20034589300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#search_hotel\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6MPQ6O6R\u0027, ip: \u0027192.168.29.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ajayd\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9068c3c827b9bc2f12e97046d2ae2086\n*** Element info: {Using\u003did, value\u003dsearch_hotel}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.Adacting_Base_Class.Base_Class_Adactin.clickbutton(Base_Class_Adactin.java:36)\r\n\tat com.adactin.stepdefinition.StepDefinition_Class.click_the_logout_Button(StepDefinition_Class.java:162)\r\n\tat ✽.Then Click the logout Button(Adactin.feature:43)\r\n",
  "status": "failed"
});
});