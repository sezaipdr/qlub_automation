$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/User_Story1.feature");
formatter.feature({
  "name": "As a customer, when I scan the QR code, I should be able to choose to see restaurant’s",
  "description": "  menu",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@us1"
    }
  ]
});
formatter.scenario({
  "name": "Customer should be able to choose to see  restaurant\u0027s menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us1"
    },
    {
      "name": "@US1_TC2"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User scans QR Code",
  "keyword": "When "
});
formatter.match({
  "location": "com.qlub.step_definitions.User_Story1_StepDefinition.user_scans_QR_Code()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can navigate to Diner\u0027s QA Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qlub.step_definitions.User_Story1_StepDefinition.user_can_navigate_to_Diner_s_QA_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees \"View the Menu\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks \"View the Menu\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User sees restaurant\u0027s menu",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User chooses menu",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});