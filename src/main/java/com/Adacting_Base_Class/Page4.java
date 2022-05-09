package com.Adacting_Base_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page4 {
	public static WebDriver driver;
	@FindBy(id="first_name")
	private WebElement Fname;
	@FindBy(name="last_name")
	private WebElement Lname;
	@FindBy(id="address")
	private WebElement addres;
	public Page4(WebDriver driver4) {
		Page4.driver=driver4;
		PageFactory.initElements(driver, this);
	}
	public static WebDriver getDriver() {
		return driver;
	}
	public WebElement getFname() {
		return Fname;
	}
	public WebElement getLname() {
		return Lname;
	}
	public WebElement getAddres() {
		return addres;
	}
	public WebElement getCredit_card() {
		return credit_card;
	}
	public WebElement getCredit_type() {
		return credit_type;
	}
	public WebElement getExpmonth() {
		return expmonth;
	}
	public WebElement getCredit_year() {
		return credit_year;
	}
	public WebElement getCvv() {
		return cvv;
	}
	public WebElement getBooknow() {
		return booknow;
	}
	@FindBy(id="cc_num")
	private WebElement credit_card;
	@FindBy(id="cc_type")
	private WebElement credit_type;
	@FindBy(id="cc_exp_month")
	private WebElement expmonth;
	@FindBy(id="cc_exp_year")
	private WebElement credit_year;
	@FindBy(id="cc_cvv")
	private WebElement cvv;
	@FindBy(id="book_now")
	private WebElement booknow;
}
