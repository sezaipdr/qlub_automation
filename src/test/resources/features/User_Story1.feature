@us1
Feature: As a customer, when I scan the QR code, I should be able to choose to see restaurant’s
  menu

  @US1_TC1
  Scenario: Customer should be able to scan the QR code
    When User scans QR Code
    Then User can navigate to Diner's QA Page

  @US1_TC2
  Scenario: Customer should be able to choose to see  restaurant's menu
    When User scans QR Code
    Then User can navigate to Diner's QA Page
    When User clicks View the Menu button
    Then User sees restaurant's menu


