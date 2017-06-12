$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "As a user,",
  "description": "I want to be able to Login and Logout",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Recall"
    }
  ]
});
formatter.before({
  "duration": 66963522742,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login and Logout",
  "description": "",
  "id": "as-a-user,;login-and-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "am on the \"Landing\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter my \"Username\" as \"wegit\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"Password\" as \"12345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "am on the \"Home\" Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing",
      "offset": 11
    }
  ],
  "location": "Login.am_on_the_Page(String)"
});
formatter.result({
  "duration": 9032968672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "wegit",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 520518697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 2261969480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 9
    }
  ],
  "location": "Login.i_click_button(String)"
});
formatter.result({
  "duration": 947021767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 11
    }
  ],
  "location": "Login.am_on_the_Page(String)"
});
formatter.result({
  "duration": 5271641451,
  "status": "passed"
});
formatter.after({
  "duration": 25721964117,
  "status": "passed"
});
});