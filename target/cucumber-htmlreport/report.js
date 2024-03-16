$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BestBuyPetStore.feature");
formatter.feature({
  "line": 2,
  "name": "Petstore API Testing",
  "description": "",
  "id": "petstore-api-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 5492199700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Pet CRUD API",
  "description": "",
  "id": "petstore-api-testing;pet-crud-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Update pet",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Delete pet",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStoreRestAssuredSteps.update_pet()"
});
formatter.result({
  "duration": 1802582800,
  "status": "passed"
});
formatter.match({
  "location": "PetStoreRestAssuredSteps.delete_pet()"
});
formatter.result({
  "duration": 87883600,
  "status": "passed"
});
formatter.after({
  "duration": 700691200,
  "status": "passed"
});
formatter.uri("BestBuySearch.feature");
formatter.feature({
  "line": 2,
  "name": "BestBuy Search Functionality",
  "description": "",
  "id": "bestbuy-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 4815793400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Search for Samsung Tv",
  "description": "",
  "id": "bestbuy-search-functionality;search-for-samsung-tv",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open BestBuy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Search for Samsung tv",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should have only Samsung Tv related products",
  "keyword": "Then "
});
formatter.match({
  "location": "BestbuyHomePageSteps.open_BestBuy_Homepage()"
});
formatter.result({
  "duration": 16364500,
  "status": "passed"
});
formatter.match({
  "location": "BestbuyHomePageSteps.search_for_Samsung_tv()"
});
formatter.result({
  "duration": 5621894600,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchResultSteps.item_list_should_have_only_Samsung_Tv_related_products()"
});
formatter.result({
  "duration": 89415800,
  "status": "passed"
});
formatter.after({
  "duration": 763805400,
  "status": "passed"
});
formatter.uri("BestBuyWallConnector.feature");
formatter.feature({
  "line": 2,
  "name": "BestBuy Click EV Charger",
  "description": "",
  "id": "bestbuy-click-ev-charger",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 7294369900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Universal Wall Connector",
  "description": "",
  "id": "bestbuy-click-ev-charger;universal-wall-connector",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open BestBuy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on the Universal Wall Connector",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Universal Wall Connector should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BestbuyHomePageSteps.open_BestBuy_Homepage()"
});
formatter.result({
  "duration": 109300,
  "status": "passed"
});
formatter.match({
  "location": "BestbuyHomePageSteps.click_on_the_Universal_Wall_Connector()"
});
formatter.result({
  "duration": 26038200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"\t//a[contains(text(), \u0027Universal Wall Connector\u0027)]\"}\n  (Session info: chrome\u003d122.0.6261.129)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AHAMED\u0027, ip: \u0027192.168.1.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.129, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: C:\\Users\\fayej\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07e0d98c583267270f553015f6c09b78\n*** Element info: {Using\u003dxpath, value\u003d\t//a[contains(text(), \u0027Universal Wall Connector\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat bestbuy.pageAction.BestbuyHomePageActions.clickWallConnector(BestbuyHomePageActions.java:27)\r\n\tat bestbuy.stepDef.BestbuyHomePageSteps.click_on_the_Universal_Wall_Connector(BestbuyHomePageSteps.java:22)\r\n\tat ✽.When Click on the Universal Wall Connector(BestBuyWallConnector.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BestbuySearchResultSteps.universal_Wall_Connector_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1223360100,
  "status": "passed"
});
});