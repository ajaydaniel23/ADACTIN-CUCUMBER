package com.adactin.stepdefinition;

import com.Adacting_Base_Class.Base_Class_Adactin;
import com.Adacting_Base_Class.Pom_Manager_Adactin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.asm.Advice.OffsetMapping.ForAllArguments;
import net.bytebuddy.dynamic.scaffold.MethodRegistry.Handler.ForAbstractMethod;

public class StepDefinition_Class extends Base_Class_Adactin {
	Pom_Manager_Adactin pom = new Pom_Manager_Adactin(driver);

	@Given("^Launch the application$")
	public void launch_the_application() throws Throwable {

		geturl("https://adactinhotelapp.com/");
	}
	
	@When("^Enter the username as \"([^\"]*)\"$")
	public void enter_the_username_as(String username) throws Throwable {
		sendvalue(pom.getP1().getUsername(), username);
	}

	@When("^Enter password as \"([^\"]*)\"$")
	public void enter_password_as(String password) throws Throwable {
		sendvalue(pom.getP1().getPassword(), password);
	}
	
//	@When("^Enter the username as \"([^\"]*)\"$")
//	public void enter_the_username_as(String username) throws Throwable {
//	sendvalue(pom.getP1().getUsername(), username);
//	}
//
//	@When("^Enter password as \"([^\"]*)\"$")
//	public void enter_password_as(String password) throws Throwable {
//		sendvalue(pom.getP1().getPassword(), password);
//	}

//	@When("^Enter the username$")
//	public void enter_the_username() throws Throwable {
//		sendvalue(pom.getP1().getUsername(), "aj23daniel");
//
//	}
//
//	@When("^Enter password$")
//	public void enter_password() throws Throwable {
//		sendvalue(pom.getP1().getPassword(), "charizard");
//	}

	@Then("^Click Login Button$")
	public void click_Login_Button() throws Throwable {
		clickbutton(pom.getP1().getLogin());
	}
	
	@When("^Select the Location$")
	public void select_the_Location() throws Throwable {
		Thread.sleep(3000);
		dropdown(pom.getP2().getLocation(), "London");
	}

	@When("^Select the Hotel from the  given options$")
	public void select_the_Hotel_from_the_given_options() throws Throwable {
		dropdown(pom.getP2().getHotel(), "Hotel Hervey");
	}

	@When("^Select the type of Room needed for your stay$")
	public void select_the_type_of_Room_needed_for_your_stay() throws Throwable {
		dropdown(pom.getP2().getRoom(), "Super Deluxe");
	}

	@When("^Choose the number of Rooms needed$")
	public void choose_the_number_of_Rooms_needed() throws Throwable {
		dropdown(pom.getP2().getRoom_no(), "5");
	}

	@When("^Enter Check In Date$")
	public void enter_Check_In_Date() throws Throwable {
		sendvalue(pom.getP2().getCheckin(), "06/05/2022");
	}

	@When("^Enter Check out Date$")
	public void enter_Check_out_Date() throws Throwable {
		sendvalue(pom.getP2().getCheckout(), "07/05/2022");
	}

	@When("^Enter the Adults per room$")
	public void enter_the_Adults_per_room() throws Throwable {
		dropdown(pom.getP2().getAdult(), "3");
	}

	@When("^Enter the CHildrens per room$")
	public void enter_the_CHildrens_per_room() throws Throwable {
		dropdown(pom.getP2().getChild(), "1");
	}

	@Then("^Click Search Button$")
	public void click_Search_Button() throws Throwable {
		clickbutton(pom.getP2().getSearch());
	}

	@When("^select the Hotel$")
	public void select_the_Hotel() throws Throwable {
		clickbutton(pom.getP3().getSelect());
	}

	@Then("^click search button$")
	public void click_search_button() throws Throwable {
		clickbutton(pom.getP3().getContinue_next());
	}

	@When("^Enter First name$")
	public void enter_First_name() throws Throwable {
		sendvalue(pom.getP4().getFname(), "Ajay Daniel");
	}

	@When("^Enter Last Name$")
	public void enter_Last_Name() throws Throwable {
		sendvalue(pom.getP4().getLname(), "J");
	}

	@When("^Enter Billing Address$")
	public void enter_Billing_Address() throws Throwable {
		sendvalue(pom.getP4().getAddres(), "Porur Chennai");
	}

	@When("^Enter Credit Card Number$")
	public void enter_Credit_Card_Number() throws Throwable {
		sendvalue(pom.getP4().getCredit_card(), "1111111111111111");
	}

	@When("^choose the card type$")
	public void choose_the_card_type() throws Throwable {
		dropdown(pom.getP4().getCredit_type(), "VISA");
	}

	@When("^Choose the Expiry date$")
	public void choose_the_Expiry_date() throws Throwable {
		dropdown(pom.getP4().getExpmonth(), "7");
	}

	@When("^Choose the Exiry Month$")
	public void choose_the_Exiry_Month() throws Throwable {
		dropdown(pom.getP4().getCredit_year(), "2022");
	}

	@When("^Enter the CVV numebr$")
	public void enter_the_CVV_numebr() throws Throwable {
		sendvalue(pom.getP4().getCvv(), "1234");
	}

	@Then("^Click Book Now$")
	public void click_Book_Now() throws Throwable {
		clickbutton(pom.getP4().getBooknow());
	}

	@Then("^Click the logout Button$")
	public void click_the_logout_Button() throws Throwable {
		implicwait();
		clickbutton(pom.getP5().getSearchagain());
	}
}
