package com.qlub.step_definitions;

import com.qlub.pages.Dinners_QA_Page;
import com.qlub.utilities.ConfigurationReader;
import com.qlub.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class User_Story1_StepDefinition {

    Dinners_QA_Page dinners_qa_page = new Dinners_QA_Page();

    @When("User scans QR Code")
    public void user_scans_QR_Code() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Then("User can navigate to Diner's QA Page")
    public void user_can_navigate_to_Diner_s_QA_Page() throws InterruptedException {
        Assert.assertTrue(dinners_qa_page.dinnersSubTitle.isDisplayed());
    }

    @And("User clicks View the Menu button")
    public void userClicksViewTheMenuButton() {
        dinners_qa_page.viewTheMenuButton.click();
    }

    @And("User sees restaurant's menu")
    public void userSeesRestaurantSMenu() {
        String expectedResult = "Qlub_ | qa-assignment Menu";
        String actualResult = Driver.get().getTitle();
        Assert.assertEquals(expectedResult, actualResult);
    }
}
