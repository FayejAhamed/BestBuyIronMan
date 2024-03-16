package bestbuy.stepDef;

import bestbuy.api.restassured.PetStoreRestAssuredActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class PetStoreRestAssuredSteps {
	PetStoreRestAssuredActions PetStoreRestAssuredActionsObj =new PetStoreRestAssuredActions();
	
	@Given("^Update pet$")
	public void update_pet() throws Throwable {
		PetStoreRestAssuredActionsObj.updatePet();
	}
	
	@Then("^Delete pet$")
	public void delete_pet() throws Throwable {
		PetStoreRestAssuredActionsObj.deletePet();
	}

}
