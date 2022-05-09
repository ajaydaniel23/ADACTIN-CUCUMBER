package com.Adacting_Base_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class Pom_Manager_Adactin {
	public static WebDriver driver;
	private Page1 p1;
	private Page2 p2;
	private Page3 p3;
	private Page4 p4;
	private Page5 p5;
	public Pom_Manager_Adactin(WebDriver driver6) {
		Pom_Manager_Adactin.driver=driver6;
		PageFactory.initElements(driver, this);
	}
	public static WebDriver getDriver() {
		return driver;
	}
	public Page1 getP1() {
		p1 = new Page1(driver);
		return p1;
	}
	public Page2 getP2() {
		p2 = new Page2(driver);
		return p2;
	}
	public Page3 getP3() {
		p3 = new Page3(driver);
		return p3;
	}
	public Page4 getP4() {
		p4 = new Page4(driver);
		return p4;
	}
	public Page5 getP5() {
		p5 = new Page5(driver);
		return p5;
	}
	

}
