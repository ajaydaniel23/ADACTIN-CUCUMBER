package com.Adacting_Base_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page1 {
	public static WebDriver driver;
	@FindBy(name="username")
	private WebElement username;
	@FindBy(name="password")
	private WebElement password;
	@FindBy(name="login")
	private WebElement login;
	public Page1(WebDriver driver2)
	{
		Page1.driver=driver2;
		PageFactory.initElements(driver, this);
	}
	public static WebDriver getDriver() {
		return driver;
	}
	public WebElement getUsername() {
		return username;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getLogin() {
		return login;
	}
	
	
	

}
