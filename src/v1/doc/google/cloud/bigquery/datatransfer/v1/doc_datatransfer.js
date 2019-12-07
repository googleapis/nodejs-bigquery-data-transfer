// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Represents a data source parameter with validation rules, so that
 * parameters can be rendered in the UI. These parameters are given to us by
 * supported data sources, and include all needed information for rendering
 * and validation.
 * Thus, whoever uses this api can decide to generate either generic ui,
 * or custom data source specific forms.
 *
 * @property {string} paramId
 *   Parameter identifier.
 *
 * @property {string} displayName
 *   Parameter display name in the user interface.
 *
 * @property {string} description
 *   Parameter description.
 *
 * @property {number} type
 *   Parameter type.
 *
 *   The number should be among the values of [Type]{@link google.cloud.bigquery.datatransfer.v1.Type}
 *
 * @property {boolean} required
 *   Is parameter required.
 *
 * @property {boolean} repeated
 *   Deprecated. This field has no effect.
 *
 * @property {string} validationRegex
 *   Regular expression which can be used for parameter validation.
 *
 * @property {string[]} allowedValues
 *   All possible values for the parameter.
 *
 * @property {Object} minValue
 *   For integer and double values specifies minimum allowed value.
 *
 *   This object should have the same structure as [DoubleValue]{@link google.protobuf.DoubleValue}
 *
 * @property {Object} maxValue
 *   For integer and double values specifies maxminum allowed value.
 *
 *   This object should have the same structure as [DoubleValue]{@link google.protobuf.DoubleValue}
 *
 * @property {Object[]} fields
 *   Deprecated. This field has no effect.
 *
 *   This object should have the same structure as [DataSourceParameter]{@link google.cloud.bigquery.datatransfer.v1.DataSourceParameter}
 *
 * @property {string} validationDescription
 *   Description of the requirements for this field, in case the user input does
 *   not fulfill the regex pattern or min/max values.
 *
 * @property {string} validationHelpUrl
 *   URL to a help document to further explain the naming requirements.
 *
 * @property {boolean} immutable
 *   Cannot be changed after initial creation.
 *
 * @property {boolean} recurse
 *   Deprecated. This field has no effect.
 *
 * @property {boolean} deprecated
 *   If true, it should not be used in new transfers, and it should not be
 *   visible to users.
 *
 * @typedef DataSourceParameter
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.DataSourceParameter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const DataSourceParameter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Parameter type.
   *
   * @enum {number}
   * @memberof google.cloud.bigquery.datatransfer.v1
   */
  Type: {

    /**
     * Type unspecified.
     */
    TYPE_UNSPECIFIED: 0,

    /**
     * String parameter.
     */
    STRING: 1,

    /**
     * Integer parameter (64-bits).
     * Will be serialized to json as string.
     */
    INTEGER: 2,

    /**
     * Double precision floating point parameter.
     */
    DOUBLE: 3,

    /**
     * Boolean parameter.
     */
    BOOLEAN: 4,

    /**
     * Deprecated. This field has no effect.
     */
    RECORD: 5,

    /**
     * Page ID for a Google+ Page.
     */
    PLUS_PAGE: 6
  }
};

/**
 * Represents data source metadata. Metadata is sufficient to
 * render UI and request proper OAuth tokens.
 *
 * @property {string} name
 *   Output only. Data source resource name.
 *
 * @property {string} dataSourceId
 *   Data source id.
 *
 * @property {string} displayName
 *   User friendly data source name.
 *
 * @property {string} description
 *   User friendly data source description string.
 *
 * @property {string} clientId
 *   Data source client id which should be used to receive refresh token.
 *
 * @property {string[]} scopes
 *   Api auth scopes for which refresh token needs to be obtained. These are
 *   scopes needed by a data source to prepare data and ingest them into
 *   BigQuery, e.g., https://www.googleapis.com/auth/bigquery
 *
 * @property {number} transferType
 *   Deprecated. This field has no effect.
 *
 *   The number should be among the values of [TransferType]{@link google.cloud.bigquery.datatransfer.v1.TransferType}
 *
 * @property {boolean} supportsMultipleTransfers
 *   Deprecated. This field has no effect.
 *
 * @property {number} updateDeadlineSeconds
 *   The number of seconds to wait for an update from the data source
 *   before the Data Transfer Service marks the transfer as FAILED.
 *
 * @property {string} defaultSchedule
 *   Default data transfer schedule.
 *   Examples of valid schedules include:
 *   `1st,3rd monday of month 15:30`,
 *   `every wed,fri of jan,jun 13:15`, and
 *   `first sunday of quarter 00:00`.
 *
 * @property {boolean} supportsCustomSchedule
 *   Specifies whether the data source supports a user defined schedule, or
 *   operates on the default schedule.
 *   When set to `true`, user can override default schedule.
 *
 * @property {Object[]} parameters
 *   Data source parameters.
 *
 *   This object should have the same structure as [DataSourceParameter]{@link google.cloud.bigquery.datatransfer.v1.DataSourceParameter}
 *
 * @property {string} helpUrl
 *   Url for the help document for this data source.
 *
 * @property {number} authorizationType
 *   Indicates the type of authorization.
 *
 *   The number should be among the values of [AuthorizationType]{@link google.cloud.bigquery.datatransfer.v1.AuthorizationType}
 *
 * @property {number} dataRefreshType
 *   Specifies whether the data source supports automatic data refresh for the
 *   past few days, and how it's supported.
 *   For some data sources, data might not be complete until a few days later,
 *   so it's useful to refresh data automatically.
 *
 *   The number should be among the values of [DataRefreshType]{@link google.cloud.bigquery.datatransfer.v1.DataRefreshType}
 *
 * @property {number} defaultDataRefreshWindowDays
 *   Default data refresh window on days.
 *   Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
 *
 * @property {boolean} manualRunsDisabled
 *   Disables backfilling and manual run scheduling
 *   for the data source.
 *
 * @property {Object} minimumScheduleInterval
 *   The minimum interval for scheduler to schedule runs.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef DataSource
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.DataSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const DataSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The type of authorization needed for this data source.
   *
   * @enum {number}
   * @memberof google.cloud.bigquery.datatransfer.v1
   */
  AuthorizationType: {

    /**
     * Type unspecified.
     */
    AUTHORIZATION_TYPE_UNSPECIFIED: 0,

    /**
     * Use OAuth 2 authorization codes that can be exchanged
     * for a refresh token on the backend.
     */
    AUTHORIZATION_CODE: 1,

    /**
     * Return an authorization code for a given Google+ page that can then be
     * exchanged for a refresh token on the backend.
     */
    GOOGLE_PLUS_AUTHORIZATION_CODE: 2
  },

  /**
   * Represents how the data source supports data auto refresh.
   *
   * @enum {number}
   * @memberof google.cloud.bigquery.datatransfer.v1
   */
  DataRefreshType: {

    /**
     * The data source won't support data auto refresh, which is default value.
     */
    DATA_REFRESH_TYPE_UNSPECIFIED: 0,

    /**
     * The data source supports data auto refresh, and runs will be scheduled
     * for the past few days. Does not allow custom values to be set for each
     * transfer config.
     */
    SLIDING_WINDOW: 1,

    /**
     * The data source supports data auto refresh, and runs will be scheduled
     * for the past few days. Allows custom values to be set for each transfer
     * config.
     */
    CUSTOM_SLIDING_WINDOW: 2
  }
};

/**
 * A request to get data source info.
 *
 * @property {string} name
 *   Required. The field will contain name of the resource requested, for example:
 *   `projects/{project_id}/dataSources/{data_source_id}` or
 *   `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
 *
 * @typedef GetDataSourceRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const GetDataSourceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list supported data sources and their data transfer settings.
 *
 * @property {string} parent
 *   Required. The BigQuery project id for which data sources should be returned.
 *   Must be in the form: `projects/{project_id}` or
 *   `projects/{project_id}/locations/{location_id}
 *
 * @property {string} pageToken
 *   Pagination token, which can be used to request a specific page
 *   of `ListDataSourcesRequest` list results. For multiple-page
 *   results, `ListDataSourcesResponse` outputs
 *   a `next_page` token, which can be used as the
 *   `page_token` value to request the next page of list results.
 *
 * @property {number} pageSize
 *   Page size. The default page size is the maximum value of 1000 results.
 *
 * @typedef ListDataSourcesRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListDataSourcesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Returns list of supported data sources and their metadata.
 *
 * @property {Object[]} dataSources
 *   List of supported data sources and their transfer settings.
 *
 *   This object should have the same structure as [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource}
 *
 * @property {string} nextPageToken
 *   Output only. The next-pagination token. For multiple-page list results,
 *   this token can be used as the
 *   `ListDataSourcesRequest.page_token`
 *   to request the next page of list results.
 *
 * @typedef ListDataSourcesResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListDataSourcesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to create a data transfer configuration. If new credentials are
 * needed for this transfer configuration, an authorization code must be
 * provided. If an authorization code is provided, the transfer configuration
 * will be associated with the user id corresponding to the
 * authorization code. Otherwise, the transfer configuration will be associated
 * with the calling user.
 *
 * @property {string} parent
 *   Required. The BigQuery project id where the transfer configuration should be created.
 *   Must be in the format projects/{project_id}/locations/{location_id} or
 *   projects/{project_id}. If specified location and location of the
 *   destination bigquery dataset do not match - the request will fail.
 *
 * @property {Object} transferConfig
 *   Required. Data transfer configuration to create.
 *
 *   This object should have the same structure as [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}
 *
 * @property {string} authorizationCode
 *   Optional OAuth2 authorization code to use with this transfer configuration.
 *   This is required if new credentials are needed, as indicated by
 *   `CheckValidCreds`.
 *   In order to obtain authorization_code, please make a
 *   request to
 *   https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
 *
 *   * client_id should be OAuth client_id of BigQuery DTS API for the given
 *     data source returned by ListDataSources method.
 *   * data_source_scopes are the scopes returned by ListDataSources method.
 *   * redirect_uri is an optional parameter. If not specified, then
 *     authorization code is posted to the opener of authorization flow window.
 *     Otherwise it will be sent to the redirect uri. A special value of
 *     urn:ietf:wg:oauth:2.0:oob means that authorization code should be
 *     returned in the title bar of the browser, with the page text prompting
 *     the user to copy the code and paste it in the application.
 *
 * @property {string} versionInfo
 *   Optional version info. If users want to find a very recent access token,
 *   that is, immediately after approving access, users have to set the
 *   version_info claim in the token request. To obtain the version_info, users
 *   must use the "none+gsession" response type. which be return a
 *   version_info back in the authorization response which be be put in a JWT
 *   claim in the token request.
 *
 * @property {string} serviceAccountName
 *   Optional service account name. If this field is set, transfer config will
 *   be created with this service account credentials. It requires that
 *   requesting user calling this API has permissions to act as this service
 *   account.
 *
 * @typedef CreateTransferConfigRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const CreateTransferConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to update a transfer configuration. To update the user id of the
 * transfer configuration, an authorization code needs to be provided.
 *
 * @property {Object} transferConfig
 *   Required. Data transfer configuration to create.
 *
 *   This object should have the same structure as [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}
 *
 * @property {string} authorizationCode
 *   Optional OAuth2 authorization code to use with this transfer configuration.
 *   If it is provided, the transfer configuration will be associated with the
 *   authorizing user.
 *   In order to obtain authorization_code, please make a
 *   request to
 *   https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
 *
 *   * client_id should be OAuth client_id of BigQuery DTS API for the given
 *     data source returned by ListDataSources method.
 *   * data_source_scopes are the scopes returned by ListDataSources method.
 *   * redirect_uri is an optional parameter. If not specified, then
 *     authorization code is posted to the opener of authorization flow window.
 *     Otherwise it will be sent to the redirect uri. A special value of
 *     urn:ietf:wg:oauth:2.0:oob means that authorization code should be
 *     returned in the title bar of the browser, with the page text prompting
 *     the user to copy the code and paste it in the application.
 *
 * @property {Object} updateMask
 *   Required. Required list of fields to be updated in this request.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {string} versionInfo
 *   Optional version info. If users want to find a very recent access token,
 *   that is, immediately after approving access, users have to set the
 *   version_info claim in the token request. To obtain the version_info, users
 *   must use the "none+gsession" response type. which be return a
 *   version_info back in the authorization response which be be put in a JWT
 *   claim in the token request.
 *
 * @property {string} serviceAccountName
 *   Optional service account name. If this field is set and
 *   "service_account_name" is set in update_mask, transfer config will be
 *   updated to use this service account credentials. It requires that
 *   requesting user calling this API has permissions to act as this service
 *   account.
 *
 * @typedef UpdateTransferConfigRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const UpdateTransferConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to get data transfer information.
 *
 * @property {string} name
 *   Required. The field will contain name of the resource requested, for example:
 *   `projects/{project_id}/transferConfigs/{config_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
 *
 * @typedef GetTransferConfigRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const GetTransferConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to delete data transfer information. All associated transfer runs
 * and log messages will be deleted as well.
 *
 * @property {string} name
 *   Required. The field will contain name of the resource requested, for example:
 *   `projects/{project_id}/transferConfigs/{config_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
 *
 * @typedef DeleteTransferConfigRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const DeleteTransferConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to get data transfer run information.
 *
 * @property {string} name
 *   Required. The field will contain name of the resource requested, for example:
 *   `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
 *
 * @typedef GetTransferRunRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const GetTransferRunRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to delete data transfer run information.
 *
 * @property {string} name
 *   Required. The field will contain name of the resource requested, for example:
 *   `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
 *
 * @typedef DeleteTransferRunRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const DeleteTransferRunRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to list data transfers configured for a BigQuery project.
 *
 * @property {string} parent
 *   Required. The BigQuery project id for which data sources
 *   should be returned: `projects/{project_id}` or
 *   `projects/{project_id}/locations/{location_id}`
 *
 * @property {string[]} dataSourceIds
 *   When specified, only configurations of requested data sources are returned.
 *
 * @property {string} pageToken
 *   Pagination token, which can be used to request a specific page
 *   of `ListTransfersRequest` list results. For multiple-page
 *   results, `ListTransfersResponse` outputs
 *   a `next_page` token, which can be used as the
 *   `page_token` value to request the next page of list results.
 *
 * @property {number} pageSize
 *   Page size. The default page size is the maximum value of 1000 results.
 *
 * @typedef ListTransferConfigsRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListTransferConfigsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The returned list of pipelines in the project.
 *
 * @property {Object[]} transferConfigs
 *   Output only. The stored pipeline transfer configurations.
 *
 *   This object should have the same structure as [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}
 *
 * @property {string} nextPageToken
 *   Output only. The next-pagination token. For multiple-page list results,
 *   this token can be used as the
 *   `ListTransferConfigsRequest.page_token`
 *   to request the next page of list results.
 *
 * @typedef ListTransferConfigsResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListTransferConfigsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to list data transfer runs. UI can use this method to show/filter
 * specific data transfer runs. The data source can use this method to request
 * all scheduled transfer runs.
 *
 * @property {string} parent
 *   Required. Name of transfer configuration for which transfer runs should be retrieved.
 *   Format of transfer configuration resource name is:
 *   `projects/{project_id}/transferConfigs/{config_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
 *
 * @property {number[]} states
 *   When specified, only transfer runs with requested states are returned.
 *
 *   The number should be among the values of [TransferState]{@link google.cloud.bigquery.datatransfer.v1.TransferState}
 *
 * @property {string} pageToken
 *   Pagination token, which can be used to request a specific page
 *   of `ListTransferRunsRequest` list results. For multiple-page
 *   results, `ListTransferRunsResponse` outputs
 *   a `next_page` token, which can be used as the
 *   `page_token` value to request the next page of list results.
 *
 * @property {number} pageSize
 *   Page size. The default page size is the maximum value of 1000 results.
 *
 * @property {number} runAttempt
 *   Indicates how run attempts are to be pulled.
 *
 *   The number should be among the values of [RunAttempt]{@link google.cloud.bigquery.datatransfer.v1.RunAttempt}
 *
 * @typedef ListTransferRunsRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListTransferRunsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Represents which runs should be pulled.
   *
   * @enum {number}
   * @memberof google.cloud.bigquery.datatransfer.v1
   */
  RunAttempt: {

    /**
     * All runs should be returned.
     */
    RUN_ATTEMPT_UNSPECIFIED: 0,

    /**
     * Only latest run per day should be returned.
     */
    LATEST: 1
  }
};

/**
 * The returned list of pipelines in the project.
 *
 * @property {Object[]} transferRuns
 *   Output only. The stored pipeline transfer runs.
 *
 *   This object should have the same structure as [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}
 *
 * @property {string} nextPageToken
 *   Output only. The next-pagination token. For multiple-page list results,
 *   this token can be used as the
 *   `ListTransferRunsRequest.page_token`
 *   to request the next page of list results.
 *
 * @typedef ListTransferRunsResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListTransferRunsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to get user facing log messages associated with data transfer run.
 *
 * @property {string} parent
 *   Required. Transfer run name in the form:
 *   `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
 *
 * @property {string} pageToken
 *   Pagination token, which can be used to request a specific page
 *   of `ListTransferLogsRequest` list results. For multiple-page
 *   results, `ListTransferLogsResponse` outputs
 *   a `next_page` token, which can be used as the
 *   `page_token` value to request the next page of list results.
 *
 * @property {number} pageSize
 *   Page size. The default page size is the maximum value of 1000 results.
 *
 * @property {number[]} messageTypes
 *   Message types to return. If not populated - INFO, WARNING and ERROR
 *   messages are returned.
 *
 *   The number should be among the values of [MessageSeverity]{@link google.cloud.bigquery.datatransfer.v1.MessageSeverity}
 *
 * @typedef ListTransferLogsRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListTransferLogsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The returned list transfer run messages.
 *
 * @property {Object[]} transferMessages
 *   Output only. The stored pipeline transfer messages.
 *
 *   This object should have the same structure as [TransferMessage]{@link google.cloud.bigquery.datatransfer.v1.TransferMessage}
 *
 * @property {string} nextPageToken
 *   Output only. The next-pagination token. For multiple-page list results,
 *   this token can be used as the
 *   `GetTransferRunLogRequest.page_token`
 *   to request the next page of list results.
 *
 * @typedef ListTransferLogsResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ListTransferLogsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to determine whether the user has valid credentials. This method
 * is used to limit the number of OAuth popups in the user interface. The
 * user id is inferred from the API call context.
 * If the data source has the Google+ authorization type, this method
 * returns false, as it cannot be determined whether the credentials are
 * already valid merely based on the user id.
 *
 * @property {string} name
 *   Required. The data source in the form:
 *   `projects/{project_id}/dataSources/{data_source_id}` or
 *   `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
 *
 * @typedef CheckValidCredsRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const CheckValidCredsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A response indicating whether the credentials exist and are valid.
 *
 * @property {boolean} hasValidCreds
 *   If set to `true`, the credentials exist and are valid.
 *
 * @typedef CheckValidCredsResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const CheckValidCredsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to schedule transfer runs for a time range.
 *
 * @property {string} parent
 *   Required. Transfer configuration name in the form:
 *   `projects/{project_id}/transferConfigs/{config_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
 *
 * @property {Object} startTime
 *   Required. Start time of the range of transfer runs. For example,
 *   `"2017-05-25T00:00:00+00:00"`.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Required. End time of the range of transfer runs. For example,
 *   `"2017-05-30T00:00:00+00:00"`.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef ScheduleTransferRunsRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ScheduleTransferRunsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A response to schedule transfer runs for a time range.
 *
 * @property {Object[]} runs
 *   The transfer runs that were scheduled.
 *
 *   This object should have the same structure as [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}
 *
 * @typedef ScheduleTransferRunsResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const ScheduleTransferRunsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to start manual transfer runs.
 *
 * @property {string} parent
 *   Transfer configuration name in the form:
 *   `projects/{project_id}/transferConfigs/{config_id}` or
 *   `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
 *
 * @property {Object} requestedTimeRange
 *   Time range for the transfer runs that should be started.
 *
 *   This object should have the same structure as [TimeRange]{@link google.cloud.bigquery.datatransfer.v1.TimeRange}
 *
 * @property {Object} requestedRunTime
 *   Specific run_time for a transfer run to be started. The
 *   requested_run_time must not be in the future.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef StartManualTransferRunsRequest
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.StartManualTransferRunsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const StartManualTransferRunsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A specification for a time range, this will request transfer runs with
   * run_time between start_time (inclusive) and end_time (exclusive).
   *
   * @property {Object} startTime
   *   Start time of the range of transfer runs. For example,
   *   `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than
   *   the end_time. Creates transfer runs where run_time is in the range betwen
   *   start_time (inclusive) and end_time (exlusive).
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @property {Object} endTime
   *   End time of the range of transfer runs. For example,
   *   `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future.
   *   Creates transfer runs where run_time is in the range betwen start_time
   *   (inclusive) and end_time (exlusive).
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @typedef TimeRange
   * @memberof google.cloud.bigquery.datatransfer.v1
   * @see [google.cloud.bigquery.datatransfer.v1.StartManualTransferRunsRequest.TimeRange definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
   */
  TimeRange: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * A response to start manual transfer runs.
 *
 * @property {Object[]} runs
 *   The transfer runs that were created.
 *
 *   This object should have the same structure as [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}
 *
 * @typedef StartManualTransferRunsResponse
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.StartManualTransferRunsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/datatransfer.proto}
 */
const StartManualTransferRunsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};