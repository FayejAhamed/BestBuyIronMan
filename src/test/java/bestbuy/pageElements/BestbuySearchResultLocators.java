package bestbuy.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestbuySearchResultLocators {

	
	//Validate samsung items
	@FindBy(xpath="//h1[contains(text(), 'samsung tv')]")
	public WebElement txSamsungTv;
	
	
	//validating ReturnExchange
	@FindBy(xpath="	//h1[contains(text(), 'Returns and Exchanges')]")
	public WebElement ReturnExchange;

}
