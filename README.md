[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google BigQuery Data Transfer Service: Node.js Client](https://github.com/googleapis/nodejs-bigquery-data-transfer)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-data-transfer.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-data-transfer)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-bigquery-data-transfer/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-bigquery-data-transfer)




BigQuery Data Transfer API client for Node.js


* [Google BigQuery Data Transfer Service Node.js Client API Reference][client-docs]
* [Google BigQuery Data Transfer Service Documentation][product-docs]
* [github.com/googleapis/nodejs-bigquery-data-transfer](https://github.com/googleapis/nodejs-bigquery-data-transfer)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google BigQuery Data Transfer Service API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bigquery-data-transfer
```


### Using the client library

```javascript
const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
const client = new bigqueryDataTransfer.v1.DataTransferServiceClient();

async function quickstart() {
  const projectId = await client.getProjectId();

  // Iterate over all elements.
  const formattedParent = client.projectPath(projectId, 'us-central1');
  let nextRequest = {parent: formattedParent};
  const options = {autoPaginate: false};
  console.log('Data sources:');
  do {
    // Fetch the next page.
    const responses = await client.listDataSources(nextRequest, options);
    // The actual resources in a response.
    const resources = responses[0];
    // The next request if the response shows that there are more responses.
    nextRequest = responses[1];
    // The actual response object, if necessary.
    // const rawResponse = responses[2];
    resources.forEach(resource => {
      console.log(`  ${resource.name}`);
    });
  } while (nextRequest);

  console.log('\n\n');
  console.log('Sources via stream:');

  client
    .listDataSourcesStream({parent: formattedParent})
    .on('data', element => {
      console.log(`  ${element.name}`);
    });
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-bigquery-data-transfer/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-bigquery-data-transfer/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-data-transfer&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google BigQuery Data Transfer Service Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-bigquery-data-transfer/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-bigquery-data-transfer/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/bigquery-data-transfer/latest
[product-docs]: https://cloud.google.com/bigquery/transfer/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquerydatatransfer.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
