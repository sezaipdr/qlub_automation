@us2
  Feature: As a customer, when I click on “Pay my Bill”, I should be able to choose to see the bill
    that I ordered on my table
  Background: Customer should be able to scan the QR code
    When User scans QR Code
    Then User can navigate to Diner's QA Page
    @US2_TC3
    Scenario: Customer should be able to choose to see the bill that user ordered on the user's own table
      When User clicks "Pay my Bill" button
      And User sees the bill that user ordered on the user's own table

