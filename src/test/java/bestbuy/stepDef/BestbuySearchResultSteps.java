package bestbuy.stepDef;

import bestbuy.pageAction.BestbuySearchResultActions;
import cucumber.api.java.en.Then;

public class BestbuySearchResultSteps {
	BestbuySearchResultActions BestbuySearchResultActionsObj = new BestbuySearchResultActions();
	@Then("^Item list should have only Samsung Tv related products$")
	public void item_list_should_have_only_Samsung_Tv_related_products() throws Throwable {
		BestbuySearchResultActionsObj.verifySamsungtv();
	}
	
	@Then("^Returns and Exchanges should be displayed$")
	public void returns_and_Exchanges_should_be_displayed() throws Throwable {
		BestbuySearchResultActionsObj.displayReturnExchange();
	}
	
}
