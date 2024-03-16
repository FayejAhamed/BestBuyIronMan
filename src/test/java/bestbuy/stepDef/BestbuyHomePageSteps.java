package bestbuy.stepDef;

import bestbuy.pageAction.BestbuyHomePageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class BestbuyHomePageSteps {
	BestbuyHomePageActions BestbuyHomePageActionsObj = new BestbuyHomePageActions();

@Given("^Open BestBuy Homepage$")
public void open_BestBuy_Homepage() throws Throwable {
  
}

@When("^Search for Samsung tv$")
public void search_for_Samsung_tv() throws Throwable {
	BestbuyHomePageActionsObj.searchSamsungTv();
}


@When("^Click on the Returns and Exchanges$")
public void click_on_the_Returns_and_Exchanges() throws Throwable {
	BestbuyHomePageActionsObj.clickReturnExchange();;
}

}
