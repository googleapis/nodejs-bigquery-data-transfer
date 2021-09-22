// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START datatransfer_check_valid_creds_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The data source in the form:
   *  `projects/{project_id}/dataSources/{data_source_id}` or
   *  `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
   */
  // const name = 'abc123'

  // Imports the Datatransfer library
  const {DataTransferServiceClient} =
    require('@google-cloud/bigquery-data-transfer').v1;

  // Instantiates a client
  const datatransferClient = new DataTransferServiceClient();

  async function checkValidCreds() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await datatransferClient.checkValidCreds(request);
    console.log(response);
  }

  checkValidCreds();
  // [END datatransfer_check_valid_creds_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
