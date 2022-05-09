package com.Adacting_Base_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page5 {
	
	public static WebDriver driver;
	@FindBy(id="search_hotel")
	private WebElement searchagain;
	@FindBy(id="my_itinerary")
	private WebElement itineray;
	@FindBy(id="logout")
	private WebElement logginout;
	public Page5(WebDriver driver5) {
		Page5.driver=driver5;
		PageFactory.initElements(driver, this);
	}
	public static WebDriver getDriver() {
		return driver;
	}
	public WebElement getSearchagain() {
		return searchagain;
	}
	public WebElement getItineray() {
		return itineray;
	}
	public WebElement getLogginout() {
		return logginout;
	}
	

}
