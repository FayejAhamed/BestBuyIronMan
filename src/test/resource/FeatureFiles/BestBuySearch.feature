@regression @smoke @SKYW-15 @E2E
Feature: BestBuy Search Functionality



	Scenario: Search for Samsung Tv
		Given Open BestBuy Homepage
		When Search for Samsung tv
		Then Item list should have only Samsung Tv related products