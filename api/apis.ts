export * from './agentApi';
import { AgentApi } from './agentApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './configurationApi';
import { ConfigurationApi } from './configurationApi';
export * from './corpusApi';
import { CorpusApi } from './corpusApi';
export * from './documentApi';
import { DocumentApi } from './documentApi';
export * from './flywayApi';
import { FlywayApi } from './flywayApi';
export * from './keyApi';
import { KeyApi } from './keyApi';
export * from './postApi';
import { PostApi } from './postApi';
export * from './privateApi';
import { PrivateApi } from './privateApi';
export * from './publicApi';
import { PublicApi } from './publicApi';
export * from './sessionApi';
import { SessionApi } from './sessionApi';
export * from './usageApi';
import { UsageApi } from './usageApi';
export * from './userApi';
import { UserApi } from './userApi';
export * from './widgetApi';
import { WidgetApi } from './widgetApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AgentApi, AuthApi, ConfigurationApi, CorpusApi, DocumentApi, FlywayApi, KeyApi, PostApi, PrivateApi, PublicApi, SessionApi, UsageApi, UserApi, WidgetApi];
