package bestbuy.api.restassured;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;

import java.io.File;

public class PetStoreRestAssuredActions {

	


	public void updatePet(){
		given().														//Request Payload
		body(new File(System.getProperty("user.dir") 
				+ "/src/test/resource/ApiRequestPayloads/UpdatePetRequest.json")).
	when().															//Setting the Header & Request url
		header("Content-Type", "application/json").
		put("https://petstore.swagger.io/v2/pet").
	then().															//Printing Response in console
		log().body().
	and().															//Verify status code
		assertThat().statusCode(200).
	and().															//Verify Response using json schema
		body(matchesJsonSchema(new File(System.getProperty("user.dir") 
				+ "/src/test/resource/ApiResponseSchemas/UpdatePetResponse.json")));
		
	}

	public void deletePet(){
		given().														//Request Payload
		when().															//Setting the Header & Request url
			header("Content-Type", "application/json").
			delete("https://petstore.swagger.io/v2/pet/89").
		then().															//Printing Response in console
			log().body().
		and().															//Verify status code
			assertThat().statusCode(200).
		and().															//Verify Response using json schema
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/DeletePetResponse.json")));
	}
	
	
	
	

}
