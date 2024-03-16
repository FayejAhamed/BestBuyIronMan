package bestbuy.pageAction;

import org.openqa.selenium.support.PageFactory;

import bestbuy.pageElements.BestbuyHomePageLocators;
import bestbuy.utilities.SetupDrivers;



public class BestbuyHomePageActions {
	
	BestbuyHomePageLocators BestbuyHomePageLocatorsObj;
	
	public  BestbuyHomePageActions() {
		BestbuyHomePageLocatorsObj = new BestbuyHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, BestbuyHomePageLocatorsObj);
	}
	
	
	public void searchSamsungTv(){
		BestbuyHomePageLocatorsObj.txbxSearch.sendKeys("samsung tv");

		BestbuyHomePageLocatorsObj.btnSearch.click();
	}
	
	public void clickReturnExchange(){
		BestbuyHomePageLocatorsObj.ClkReturn.click();
	}
}
