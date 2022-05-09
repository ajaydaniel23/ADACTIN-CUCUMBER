package com.Adacting_Base_Class;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Base_Class_Adactin {
	public static WebDriver driver;
	
	public static WebDriver select_driver(String value) {
		
		if (value.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\ajayd\\eclipse-workspace\\Adactincucumber\\driver\\chromedriver.exe");
			driver = new ChromeDriver();
			return driver;
		}
		else if (value.equalsIgnoreCase("mozilla")) {
			
			
		}
		return driver;
		
	}
	
	public static void sendvalue(WebElement element, String input) {
		element.sendKeys(input);	
	}
	
	public static void geturl(String website) {
		driver.get(website);
	}
	public static void clickbutton(WebElement element) {
		element.click();
	}
	public static void dropdown(WebElement element,String value) {
		Select s = new Select(element);
		s.selectByValue(value);
	}
	public static void implicwait() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

}
