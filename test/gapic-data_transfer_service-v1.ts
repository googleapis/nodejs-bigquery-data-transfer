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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import { describe, it } from 'mocha';
const datatransferserviceModule = require('../src');


const FAKE_STATUS_CODE = 1;
class FakeError{
    name: string;
    message: string;
    code: number;
    constructor(n: number){
        this.name = 'fakeName';
        this.message = 'fake message';
        this.code = n;
    }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError|null, response?: {} | null): void;
}

export class Operation{
    constructor(){};
    promise() {};
}
function mockSimpleGrpcMethod(expectedRequest: {}, response: {} | null, error: FakeError | null) {
    return (actualRequest: {}, options: {}, callback: Callback) => {
        assert.deepStrictEqual(actualRequest, expectedRequest);
        if (error) {
            callback(error);
        } else if (response) {
            callback(null, response);
        } else {
            callback(null);
        }
    };
}
describe('v1.DataTransferServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = datatransferserviceModule.v1.DataTransferServiceClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = datatransferserviceModule.v1.DataTransferServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = datatransferserviceModule.v1.DataTransferServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new datatransferserviceModule.v1.DataTransferServiceClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new datatransferserviceModule.v1.DataTransferServiceClient({
            fallback: true,
        });
        assert(client);
    });
    describe('getDataSource', () => {
        it('invokes getDataSource without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IGetDataSourceRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getDataSource = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getDataSource(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getDataSource with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IGetDataSourceRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getDataSource = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getDataSource(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('createTransferConfig', () => {
        it('invokes createTransferConfig without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.ICreateTransferConfigRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createTransferConfig = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.createTransferConfig(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes createTransferConfig with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.ICreateTransferConfigRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createTransferConfig = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.createTransferConfig(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('updateTransferConfig', () => {
        it('invokes updateTransferConfig without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IUpdateTransferConfigRequest = {};
            request.transferConfig = {};
            request.transferConfig.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateTransferConfig = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.updateTransferConfig(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes updateTransferConfig with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IUpdateTransferConfigRequest = {};
            request.transferConfig = {};
            request.transferConfig.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateTransferConfig = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.updateTransferConfig(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('deleteTransferConfig', () => {
        it('invokes deleteTransferConfig without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IDeleteTransferConfigRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteTransferConfig = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.deleteTransferConfig(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes deleteTransferConfig with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IDeleteTransferConfigRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteTransferConfig = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.deleteTransferConfig(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getTransferConfig', () => {
        it('invokes getTransferConfig without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IGetTransferConfigRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getTransferConfig = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getTransferConfig(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getTransferConfig with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IGetTransferConfigRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getTransferConfig = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getTransferConfig(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('scheduleTransferRuns', () => {
        it('invokes scheduleTransferRuns without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IScheduleTransferRunsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.scheduleTransferRuns = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.scheduleTransferRuns(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes scheduleTransferRuns with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IScheduleTransferRunsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.scheduleTransferRuns = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.scheduleTransferRuns(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('startManualTransferRuns', () => {
        it('invokes startManualTransferRuns without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IStartManualTransferRunsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.startManualTransferRuns = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.startManualTransferRuns(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes startManualTransferRuns with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IStartManualTransferRunsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.startManualTransferRuns = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.startManualTransferRuns(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getTransferRun', () => {
        it('invokes getTransferRun without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IGetTransferRunRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getTransferRun = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getTransferRun(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getTransferRun with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IGetTransferRunRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getTransferRun = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getTransferRun(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('deleteTransferRun', () => {
        it('invokes deleteTransferRun without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IDeleteTransferRunRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteTransferRun = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.deleteTransferRun(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes deleteTransferRun with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IDeleteTransferRunRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteTransferRun = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.deleteTransferRun(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('checkValidCreds', () => {
        it('invokes checkValidCreds without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.ICheckValidCredsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.checkValidCreds = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.checkValidCreds(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes checkValidCreds with error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.ICheckValidCredsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.checkValidCreds = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.checkValidCreds(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('listDataSources', () => {
        it('invokes listDataSources without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListDataSourcesRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listDataSources = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listDataSources(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listDataSourcesStream', () => {
        it('invokes listDataSourcesStream without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListDataSourcesRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listDataSources = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listDataSourcesStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(request);
        });
    });
    describe('listTransferConfigs', () => {
        it('invokes listTransferConfigs without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListTransferConfigsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listTransferConfigs = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listTransferConfigs(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listTransferConfigsStream', () => {
        it('invokes listTransferConfigsStream without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListTransferConfigsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listTransferConfigs = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listTransferConfigsStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(request);
        });
    });
    describe('listTransferRuns', () => {
        it('invokes listTransferRuns without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListTransferRunsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listTransferRuns = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listTransferRuns(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listTransferRunsStream', () => {
        it('invokes listTransferRunsStream without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListTransferRunsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listTransferRuns = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listTransferRunsStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(request);
        });
    });
    describe('listTransferLogs', () => {
        it('invokes listTransferLogs without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListTransferLogsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listTransferLogs = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listTransferLogs(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listTransferLogsStream', () => {
        it('invokes listTransferLogsStream without error', done => {
            const client = new datatransferserviceModule.v1.DataTransferServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Mock request
            const request: protosTypes.google.cloud.bigquery.datatransfer.v1.IListTransferLogsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listTransferLogs = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listTransferLogsStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(request);
        });
    });
});
