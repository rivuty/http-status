import { type HttpStatusCodes } from './HttpStatusCodes';

export type HttpStatusCode = (typeof HttpStatusCodes)[keyof typeof HttpStatusCodes];
