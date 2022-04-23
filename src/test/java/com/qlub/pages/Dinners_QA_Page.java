package com.qlub.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Dinners_QA_Page extends BasePage {
    @FindBy(xpath = "//div[@class='Vendor_title__8bzdD']")
    public WebElement dinnersSubTitle;
    @FindBy(xpath = "//div[@class='text-base font-medium text-black']")
    public WebElement viewTheMenuButton;

}
