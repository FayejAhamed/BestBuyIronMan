package bestbuy.pageAction;

import org.openqa.selenium.support.PageFactory;

import bestbuy.pageElements.BestbuySearchResultLocators;
import bestbuy.utilities.SetupDrivers;
import junit.framework.Assert;

public class BestbuySearchResultActions {

	BestbuySearchResultLocators BestbuySearchResultLocatorsObj;
	
	public BestbuySearchResultActions(){
		BestbuySearchResultLocatorsObj = new BestbuySearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, BestbuySearchResultLocatorsObj);
	}
	
	public void verifySamsungtv(){
		//option 1
		Assert.assertTrue(BestbuySearchResultLocatorsObj.txSamsungTv.isDisplayed());
		
		//option 2
		//Assert.assertEquals(BestbuySearchResultLocatorsObj.txSamsungTv.getText(), "samsung tv");
		
		//option 3
		//BestbuySearchResultLocatorsObj.txSamsungTv.isDisplayed();
	
	}
	public void displayReturnExchange(){
	
		
		//option 3
		BestbuySearchResultLocatorsObj.ReturnExchange.isDisplayed();
		
	}
	public void newBranchGit(){
		System.out.println("Hello, World!");
	}
	
}
