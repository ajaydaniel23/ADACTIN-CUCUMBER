package com.Adacting_Base_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page3 {
	public static WebDriver driver;
	@FindBy(id = "radiobutton_0")
	private WebElement select;
	@FindBy(id = "continue")
	private WebElement continue_next;
	public Page3(WebDriver driver3)
	{
		Page3.driver=driver3;
		PageFactory.initElements(driver, this);
	}
	public static WebDriver getDriver() {
		return driver;
		
	}
	public WebElement getSelect() {
		return select;
	}
	public WebElement getContinue_next() {
		return continue_next;
	}
}
