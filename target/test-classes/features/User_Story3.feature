@us3
  Feature: As a customer, when I see the bill, I should be able to see the payment option, which are
    card payment or wallet payment (ApplePay/GooglePay)
    Background: Customer should be able to scan the QR code
      When User scans QR Code
      Then User can navigate to Diner's QA Page
      @US3_TC4
      Scenario: Customer should be ableto chooseto see the bill that customer ordered on customer's table
        When User clicks "Pay the Bill" button
        Then User sees the bill
        And User sees the payment option
        And User sees card payment or wallet payment(ApplePay/GooglePay)