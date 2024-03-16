package bestbuy.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestbuyHomePageLocators {

	//Search text Box
	@FindBy(xpath="//input[@placeholder='What can we help you find today?']")
	public WebElement txbxSearch;
	
	//Search Button
	
	@FindBy(xpath="//button[@type='submit']")
	public WebElement btnSearch;
	
	//button[@type='submit']
	
	
	//click ReturnExchange

	@FindBy(xpath="//strong[contains(text(), 'Returns & Exchanges')]")
	public WebElement ClkReturn;
	
	//
}



