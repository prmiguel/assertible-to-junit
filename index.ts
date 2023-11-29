var builder = require('junit-report-builder');

interface Result {
    requestScheme:        string;
    responseHeaders:      ResponseHeader[];
    requestHttpVersion:   string;
    test:                 string;
    result:               string;
    requestHost:          string;
    assertions:           Assertions;
    requestPath:          string;
    runId:                string;
    executionEnvironment: ExecutionEnvironment;
    testRun:              string;
    responseStatusCode:   number;
    requestHeaders:       any[];
    id:                   string;
    requestQuery:         null;
    timestamp:            Date;
    via:                  Via;
    responseBodySize:     number;
    requestMethod:        string;
    responseTime:         number;
    requestBody:          null;
}

interface Assertions {
    passed: Passed[];
    failed: Failed[];
}

interface Passed {
    property?:   null;
    enabled?:    boolean;
    test?:       string;
    comparator?: string;
    source:      string;
    id?:         string;
    target?:     string;
    msg?:        string;
}

interface Failed {
  property?:   null;
  enabled?:    boolean;
  test?:       string;
  comparator?: string;
  source:      string;
  id?:         string;
  target?:     string;
  msg?:        string;
  errors:     Array<string>;
}

interface ExecutionEnvironment {
    service:     string;
    variables:   any[];
    auth:        null;
    url:         string;
    transient:   boolean;
    headers:     any[];
    name:        string;
    validateSsl: boolean;
    id:          string;
}

interface ResponseHeader {
    enabled: boolean;
    value:   string;
    key:     string;
}

interface Via {
    origin:   string;
    username: string;
    account:  string;
    type:     string;
}


interface Test {
  useCookies:         boolean;
  createdAt:          Date;
  variables:          any[];
  auth:               null;
  responseTimeout:    null;
  uniqueImportId:     string;
  requestHttpVersion: string;
  params:             any[];
  headers:            any[];
  name:               string;
  method:             string;
  scheme:             null;
  id:                 string;
  updatedAt:          Date;
  api:                string;
  endpoint:           string;
  description:        string;
  requestBody:        null;
  redirectCount:      null;
}



console.log("Hi");
let resultString = `[
  {
    "requestScheme": "https",
    "responseHeaders": [
      {
        "enabled": true,
        "value": "Wed, 29 Nov 2023 08:43:55 GMT",
        "key": "Date"
      },
      {
        "enabled": true,
        "value": "application/json",
        "key": "Content-Type"
      },
      {
        "enabled": true,
        "value": "609",
        "key": "Content-Length"
      },
      {
        "enabled": true,
        "value": "keep-alive",
        "key": "Connection"
      },
      {
        "enabled": true,
        "value": "Accept",
        "key": "Vary"
      },
      {
        "enabled": true,
        "value": "GET, HEAD, OPTIONS",
        "key": "Allow"
      },
      {
        "enabled": true,
        "value": "SAMEORIGIN",
        "key": "X-Frame-Options"
      }
    ],
    "requestHttpVersion": "1.1",
    "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
    "result": "TestPass",
    "requestHost": "test-api.k6.io",
    "assertions": {
      "passed": [
        {
          "property": null,
          "enabled": true,
          "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
          "comparator": "AssertEquals",
          "source": "AssertStatusCode",
          "id": "44eeb108-8dbd-49b5-858a-2eec050eeff6",
          "target": "200"
        },
        {
          "msg": "TLS/SSL validated",
          "source": "AssertValidSsl"
        },
        {
          "msg": "Connected to host",
          "source": "AssertHttpRequestSuccess"
        },
        {
          "msg": "Loaded environment \`production\`",
          "source": "AssertValidEnvironment"
        }
      ],
      "failed": []
    },
    "requestPath": "/public/crocodiles/",
    "runId": "run_rforqwx",
    "executionEnvironment": {
      "service": "079280e2-e51d-43e9-a932-84f03c2be041",
      "variables": [],
      "auth": null,
      "url": "test-api.k6.io",
      "transient": false,
      "headers": [],
      "name": "production",
      "validateSsl": true,
      "id": "4652a6e3-31ad-4385-b9ea-94233aeba298"
    },
    "testRun": "0fff3be3-f68d-43e5-bcfb-a7a2d4889736",
    "responseStatusCode": 200,
    "requestHeaders": [],
    "id": "995b7f5e-e77b-4014-9bdc-160d200a93cf",
    "requestQuery": null,
    "timestamp": "2023-11-29T08:43:55.753837Z",
    "via": {
      "origin": "assertible.com",
      "username": "miangel-pr@outlook.com",
      "account": "75adab46-1772-47c9-a5bf-f135c73f30a5",
      "type": "ViaTrigger"
    },
    "responseBodySize": 609,
    "requestMethod": "GET",
    "responseTime": 292.68888799999996,
    "requestBody": null
  }
]`; 

resultString = `[
  {
      "requestScheme": "https",
      "responseHeaders": [
          {
              "enabled": true,
              "value": "Wed, 29 Nov 2023 11:48:21 GMT",
              "key": "Date"
          },
          {
              "enabled": true,
              "value": "application/json",
              "key": "Content-Type"
          },
          {
              "enabled": true,
              "value": "609",
              "key": "Content-Length"
          },
          {
              "enabled": true,
              "value": "keep-alive",
              "key": "Connection"
          },
          {
              "enabled": true,
              "value": "Accept",
              "key": "Vary"
          },
          {
              "enabled": true,
              "value": "GET, HEAD, OPTIONS",
              "key": "Allow"
          },
          {
              "enabled": true,
              "value": "SAMEORIGIN",
              "key": "X-Frame-Options"
          }
      ],
      "requestHttpVersion": "1.1",
      "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
      "result": "TestPass",
      "requestHost": "test-api.k6.io",
      "assertions": {
          "passed": [
              {
                  "property": ".length()",
                  "enabled": true,
                  "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
                  "comparator": "AssertGreaterThan",
                  "source": "AssertJsonData",
                  "id": "2ae554b1-332d-4424-8b73-e2e442023965",
                  "target": "1"
              },
              {
                  "property": null,
                  "enabled": true,
                  "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
                  "comparator": "AssertEquals",
                  "source": "AssertStatusCode",
                  "id": "44eeb108-8dbd-49b5-858a-2eec050eeff6",
                  "target": "200"
              },
              {
                  "msg": "TLS/SSL validated",
                  "source": "AssertValidSsl"
              },
              {
                  "msg": "Connected to host",
                  "source": "AssertHttpRequestSuccess"
              },
              {
                  "msg": "Loaded environment \`production\`",
                  "source": "AssertValidEnvironment"
              }
          ],
          "failed": []
      },
      "requestPath": "/public/crocodiles/",
      "runId": "run_oosklzn",
      "executionEnvironment": {
          "service": "079280e2-e51d-43e9-a932-84f03c2be041",
          "variables": [],
          "auth": null,
          "url": "test-api.k6.io",
          "transient": false,
          "headers": [],
          "name": "production",
          "validateSsl": true,
          "id": "4652a6e3-31ad-4385-b9ea-94233aeba298"
      },
      "testRun": "9abb75ed-5a27-45e1-be4f-f798c8cd57d5",
      "responseStatusCode": 200,
      "requestHeaders": [],
      "id": "8895a4b1-7e67-4a30-bfc8-7a131c843e60",
      "requestQuery": null,
      "timestamp": "2023-11-29T11:48:21.844871Z",
      "via": {
          "username": "miangel-pr@outlook.com",
          "account": "75adab46-1772-47c9-a5bf-f135c73f30a5",
          "type": "ViaDashboard"
      },
      "responseBodySize": 609,
      "requestMethod": "GET",
      "responseTime": 339.469295,
      "requestBody": null
  }
]`; 

resultString = `[
  {
      "requestScheme": "https",
      "responseHeaders": [
          {
              "enabled": true,
              "value": "Wed, 29 Nov 2023 11:47:52 GMT",
              "key": "Date"
          },
          {
              "enabled": true,
              "value": "application/json",
              "key": "Content-Type"
          },
          {
              "enabled": true,
              "value": "609",
              "key": "Content-Length"
          },
          {
              "enabled": true,
              "value": "keep-alive",
              "key": "Connection"
          },
          {
              "enabled": true,
              "value": "Accept",
              "key": "Vary"
          },
          {
              "enabled": true,
              "value": "GET, HEAD, OPTIONS",
              "key": "Allow"
          },
          {
              "enabled": true,
              "value": "SAMEORIGIN",
              "key": "X-Frame-Options"
          }
      ],
      "requestHttpVersion": "1.1",
      "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
      "result": "TestFail",
      "requestHost": "test-api.k6.io",
      "assertions": {
          "passed": [
              {
                  "property": null,
                  "enabled": true,
                  "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
                  "comparator": "AssertEquals",
                  "source": "AssertStatusCode",
                  "id": "44eeb108-8dbd-49b5-858a-2eec050eeff6",
                  "target": "200"
              },
              {
                  "msg": "TLS/SSL validated",
                  "source": "AssertValidSsl"
              },
              {
                  "msg": "Connected to host",
                  "source": "AssertHttpRequestSuccess"
              },
              {
                  "msg": "Loaded environment \`production\`",
                  "source": "AssertValidEnvironment"
              }
          ],
          "failed": [
              {
                  "property": ".length()",
                  "enabled": true,
                  "test": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
                  "comparator": "AssertContains",
                  "source": "AssertJsonData",
                  "id": "2ae554b1-332d-4424-8b73-e2e442023965",
                  "errors": [
                      "JSON selection \`8\` does not contain \`8\`"
                  ],
                  "target": "8"
              }
          ]
      },
      "requestPath": "/public/crocodiles/",
      "runId": "run_kovtnbj",
      "executionEnvironment": {
          "service": "079280e2-e51d-43e9-a932-84f03c2be041",
          "variables": [],
          "auth": null,
          "url": "test-api.k6.io",
          "transient": false,
          "headers": [],
          "name": "production",
          "validateSsl": true,
          "id": "4652a6e3-31ad-4385-b9ea-94233aeba298"
      },
      "testRun": "b4b9079c-99dd-462f-a696-743ea7aa57d6",
      "responseStatusCode": 200,
      "requestHeaders": [],
      "id": "d0d10aa7-dbfa-45c9-8f99-403bc97d457f",
      "requestQuery": null,
      "timestamp": "2023-11-29T11:47:52.611422Z",
      "via": {
          "username": "miangel-pr@outlook.com",
          "account": "75adab46-1772-47c9-a5bf-f135c73f30a5",
          "type": "ViaDashboard"
      },
      "responseBodySize": 609,
      "requestMethod": "GET",
      "responseTime": 301.294268,
      "requestBody": null
  }
]`;


let testsJSON = `[
  {
    "useCookies": true,
    "createdAt": "2023-11-04T06:44:13.52194Z",
    "variables": [],
    "auth": null,
    "responseTimeout": null,
    "uniqueImportId": "djFfdXJsXyJHRVQiXy9wdWJsaWMvY3JvY29kaWxlcy8=",
    "requestHttpVersion": "1.1",
    "params": [],
    "headers": [],
    "name": "List all public crocodiles",
    "method": "GET",
    "scheme": null,
    "id": "ddc46977-a410-454b-ae46-d0b0e99a54cc",
    "updatedAt": "2023-11-04T06:47:51.604995Z",
    "api": "079280e2-e51d-43e9-a932-84f03c2be041",
    "endpoint": "/public/crocodiles/",
    "description": "Ensure the HTTP request returns a 200 OK",
    "requestBody": null,
    "redirectCount": null
  }
]`;

let results : Array<Result> = JSON.parse(resultString);

let tests : Array<Test> = JSON.parse(testsJSON);


results.forEach((result) => {
  let testName = tests.find((test) => test.id == result.test)?.name;
  var suite = builder.testSuite().name(testName);

  result.assertions.passed.forEach((passed) => {
    if(passed.id) {
      var testCase = suite.testCase()
        .className(testName)
        .name(`${passed.source} ${passed.property} ${passed.comparator} ${passed.target}`);      
    }
  });

  result.assertions.failed.forEach((failed) => {
    if(failed.id) {
      var testCase = suite.testCase()
        .className(testName)
        .name(`${failed.source} ${failed.property} ${failed.comparator} ${failed.target}`)
        .failure(failed.errors[0]);  
    }
  });
});

builder.writeTo('test-report.xml');
