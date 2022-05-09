package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adacting_Base_Class.Base_Class_Adactin;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature//", glue = "com.adactin.stepdefinition", 
plugin = {
		"html:Report/Cucumber_Report",
		"pretty", 
		"json:Report/Cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/Extent_Report.html" }, 
		monochrome = true)
public class Runner_Class {
	public static WebDriver driver;
	// Pom_Manager_Adactin pom = new Pom_Manager_Adactin(driver);

	@BeforeClass
	public static void setup() {
		driver = Base_Class_Adactin.select_driver("chrome");
	}

	@AfterClass
	public static void close() throws InterruptedException {
		Thread.sleep(7000);
		driver.close();
	}
}
