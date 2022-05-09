package com.Adacting_Base_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page2 {
	public static WebDriver driver;
	public Page2(WebDriver driver1)
	{
		Page2.driver=driver1;
		PageFactory.initElements(driver, this);
	}
	@FindBy(id = "location")
	private WebElement location;
	@FindBy(id = "hotels")
	private WebElement hotel;
	@FindBy(id = "room_type")
	private WebElement room;
	@FindBy(id = "room_nos")
	private WebElement room_no;
	@FindBy(id = "datepick_in")
	private WebElement checkin;
	@FindBy(id = "datepick_out")
	private WebElement checkout;
	@FindBy(id = "adult_room")
	private WebElement adult;
	@FindBy(id = "child_room")
	private WebElement child;
	@FindBy(id = "Submit")
	private WebElement search;

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoom() {
		return room;
	}
	public WebElement getRoom_no() {
		return room_no;
	}
	public WebElement getCheckin() {
		return checkin;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getAdult() {
		return adult;
	}

	public WebElement getChild() {
		return child;
	}

	public WebElement getSearch() {
		return search;
	}

	
}
