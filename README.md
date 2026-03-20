# @rivuty/http-status

Type-safe HTTP status codes for TypeScript and JavaScript projects.

## Installation

```sh
npm install @rivuty/http-status
# or
pnpm add @rivuty/http-status
```

## Usage

```ts
import { HttpStatusCode } from '@rivuty/http-status';

response.status(HttpStatusCode.Ok);           // 200
response.status(HttpStatusCode.NotFound);     // 404
response.status(HttpStatusCode.Unauthorized); // 401
```

## API

### `HttpStatusCode`

A readonly object mapping semantic names to their numeric HTTP status codes.

#### 1xx Informational

| Name                 | Code |
| -------------------- | ---- |
| `Continue`           | 100  |
| `SwitchingProtocols` | 101  |
| `Processing`         | 102  |
| `EarlyHints`         | 103  |

#### 2xx Success

| Name                          | Code |
| ----------------------------- | ---- |
| `Ok`                          | 200  |
| `Created`                     | 201  |
| `Accepted`                    | 202  |
| `NonAuthoritativeInformation` | 203  |
| `NoContent`                   | 204  |
| `ResetContent`                | 205  |
| `PartialContent`              | 206  |
| `MultiStatus`                 | 207  |
| `AlreadyReported`             | 208  |
| `InstanceManipulationUsed`    | 226  |

#### 3xx Redirection

| Name                | Code |
| ------------------- | ---- |
| `MultipleChoices`   | 300  |
| `MovedPermanently`  | 301  |
| `Found`             | 302  |
| `SeeOther`          | 303  |
| `NotModified`       | 304  |
| `UseProxy`          | 305  |
| `TemporaryRedirect` | 307  |
| `PermanentRedirect` | 308  |

#### 4xx Client Errors

| Name                          | Code |
| ----------------------------- | ---- |
| `BadRequest`                  | 400  |
| `Unauthorized`                | 401  |
| `PaymentRequired`             | 402  |
| `Forbidden`                   | 403  |
| `NotFound`                    | 404  |
| `MethodNotAllowed`            | 405  |
| `NotAcceptable`               | 406  |
| `ProxyAuthenticationRequired` | 407  |
| `RequestTimeout`              | 408  |
| `Conflict`                    | 409  |
| `Gone`                        | 410  |
| `LengthRequired`              | 411  |
| `PreconditionFailed`          | 412  |
| `PayloadTooLarge`             | 413  |
| `UriTooLong`                  | 414  |
| `UnsupportedMediaType`        | 415  |
| `RangeNotSatisfiable`         | 416  |
| `ExpectationFailed`           | 417  |
| `MisdirectedRequest`          | 421  |
| `UnprocessableContent`        | 422  |
| `Locked`                      | 423  |
| `FailedDependency`            | 424  |
| `TooEarly`                    | 425  |
| `UpgradeRequired`             | 426  |
| `PreconditionRequired`        | 428  |
| `TooManyRequests`             | 429  |
| `RequestHeaderFieldsTooLarge` | 431  |
| `UnavailableForLegalReasons`  | 451  |

#### 5xx Server Errors

| Name                            | Code |
| ------------------------------- | ---- |
| `InternalServerError`           | 500  |
| `NotImplemented`                | 501  |
| `BadGateway`                    | 502  |
| `ServiceUnavailable`            | 503  |
| `GatewayTimeout`                | 504  |
| `HttpVersionNotSupported`       | 505  |
| `VariantAlsoNegotiates`         | 506  |
| `InsufficientStorage`           | 507  |
| `LoopDetected`                  | 508  |
| `NotExtended`                   | 510  |
| `NetworkAuthenticationRequired` | 511  |

## License

@rivuty/http-status is open-sourced under the [MIT license](LICENSE)
