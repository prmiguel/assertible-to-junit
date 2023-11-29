var builder = require('junit-report-builder');

interface Result {
  requestScheme: string;
  responseHeaders: ResponseHeader[];
  requestHttpVersion: string;
  test: string;
  result: string;
  requestHost: string;
  assertions: Assertions;
  requestPath: string;
  runId: string;
  executionEnvironment: ExecutionEnvironment;
  testRun: string;
  responseStatusCode: number;
  requestHeaders: any[];
  id: string;
  requestQuery: null;
  timestamp: Date;
  via: Via;
  responseBodySize: number;
  requestMethod: string;
  responseTime: number;
  requestBody: null;
}

interface Assertions {
  passed: Passed[];
  failed: Failed[];
}

interface Passed {
  property?: null;
  enabled?: boolean;
  test?: string;
  comparator?: string;
  source: string;
  id?: string;
  target?: string;
  msg?: string;
}

interface Failed {
  property?: null;
  enabled?: boolean;
  test?: string;
  comparator?: string;
  source: string;
  id?: string;
  target?: string;
  msg?: string;
  errors: Array<string>;
}

interface ExecutionEnvironment {
  service: string;
  variables: any[];
  auth: null;
  url: string;
  transient: boolean;
  headers: any[];
  name: string;
  validateSsl: boolean;
  id: string;
}

interface ResponseHeader {
  enabled: boolean;
  value: string;
  key: string;
}

interface Via {
  origin: string;
  username: string;
  account: string;
  type: string;
}


interface Test {
  useCookies: boolean;
  createdAt: Date;
  variables: any[];
  auth: null;
  responseTimeout: null;
  uniqueImportId: string;
  requestHttpVersion: string;
  params: any[];
  headers: any[];
  name: string;
  method: string;
  scheme: null;
  id: string;
  updatedAt: Date;
  api: string;
  endpoint: string;
  description: string;
  requestBody: null;
  redirectCount: null;
}

function generateReport(resultsJson: string, testsJson: string): void {
  let results: Array<Result> = JSON.parse(resultsJson);
  let tests: Array<Test> = JSON.parse(testsJson);

  results.forEach((result) => {
    let testName = tests.find((test) => test.id == result.test)?.name;
    var suite = builder.testSuite()
      .name(testName)
      .time(result.responseTime)
      .timestamp(result.timestamp)
      .property("test", result.test)
      .property("requestHost", result.requestHost)
      .property("requestPath", result.requestPath)
      .property("runId", result.runId)
      .property("testRun", result.testRun)
      .property("executionEnvironment", result.executionEnvironment.name);

    result.assertions.passed.forEach((passed) => {
      if (passed.id) {
        suite.testCase()
          .className(testName)
          .name(`${passed.source} ${passed.property} ${passed.comparator} ${passed.target}`);
      }
    });

    result.assertions.failed.forEach((failed) => {
      if (failed.id) {
        suite.testCase()
          .className(testName)
          .name(`${failed.source} ${failed.property} ${failed.comparator} ${failed.target}`)
          .failure(failed.errors[0]);
      }
    });
  });

  builder.writeTo('test-report.xml');
}

module.exports = generateReport;
