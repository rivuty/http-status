import { describe, it, expect } from 'vitest';

import { HttpStatusCodes } from './HttpStatusCodes';

describe('HttpStatusCodes', () => {
  describe('1xx Informational', () => {
    it('should have correct values', () => {
      expect(HttpStatusCodes.Continue).toBe(100);
      expect(HttpStatusCodes.SwitchingProtocols).toBe(101);
      expect(HttpStatusCodes.Processing).toBe(102);
      expect(HttpStatusCodes.EarlyHints).toBe(103);
    });
  });

  describe('2xx Success', () => {
    it('should have correct values', () => {
      expect(HttpStatusCodes.Ok).toBe(200);
      expect(HttpStatusCodes.Created).toBe(201);
      expect(HttpStatusCodes.Accepted).toBe(202);
      expect(HttpStatusCodes.NonAuthoritativeInformation).toBe(203);
      expect(HttpStatusCodes.NoContent).toBe(204);
      expect(HttpStatusCodes.ResetContent).toBe(205);
      expect(HttpStatusCodes.PartialContent).toBe(206);
      expect(HttpStatusCodes.MultiStatus).toBe(207);
      expect(HttpStatusCodes.AlreadyReported).toBe(208);
      expect(HttpStatusCodes.InstanceManipulationUsed).toBe(226);
    });
  });

  describe('3xx Redirection', () => {
    it('should have correct values', () => {
      expect(HttpStatusCodes.MultipleChoices).toBe(300);
      expect(HttpStatusCodes.MovedPermanently).toBe(301);
      expect(HttpStatusCodes.Found).toBe(302);
      expect(HttpStatusCodes.SeeOther).toBe(303);
      expect(HttpStatusCodes.NotModified).toBe(304);
      expect(HttpStatusCodes.UseProxy).toBe(305);
      expect(HttpStatusCodes.TemporaryRedirect).toBe(307);
      expect(HttpStatusCodes.PermanentRedirect).toBe(308);
    });
  });

  describe('4xx Client Errors', () => {
    it('should have correct values', () => {
      expect(HttpStatusCodes.BadRequest).toBe(400);
      expect(HttpStatusCodes.Unauthorized).toBe(401);
      expect(HttpStatusCodes.PaymentRequired).toBe(402);
      expect(HttpStatusCodes.Forbidden).toBe(403);
      expect(HttpStatusCodes.NotFound).toBe(404);
      expect(HttpStatusCodes.MethodNotAllowed).toBe(405);
      expect(HttpStatusCodes.NotAcceptable).toBe(406);
      expect(HttpStatusCodes.ProxyAuthenticationRequired).toBe(407);
      expect(HttpStatusCodes.RequestTimeout).toBe(408);
      expect(HttpStatusCodes.Conflict).toBe(409);
      expect(HttpStatusCodes.Gone).toBe(410);
      expect(HttpStatusCodes.LengthRequired).toBe(411);
      expect(HttpStatusCodes.PreconditionFailed).toBe(412);
      expect(HttpStatusCodes.PayloadTooLarge).toBe(413);
      expect(HttpStatusCodes.UriTooLong).toBe(414);
      expect(HttpStatusCodes.UnsupportedMediaType).toBe(415);
      expect(HttpStatusCodes.RangeNotSatisfiable).toBe(416);
      expect(HttpStatusCodes.ExpectationFailed).toBe(417);
      expect(HttpStatusCodes.MisdirectedRequest).toBe(421);
      expect(HttpStatusCodes.UnprocessableContent).toBe(422);
      expect(HttpStatusCodes.Locked).toBe(423);
      expect(HttpStatusCodes.FailedDependency).toBe(424);
      expect(HttpStatusCodes.TooEarly).toBe(425);
      expect(HttpStatusCodes.UpgradeRequired).toBe(426);
      expect(HttpStatusCodes.PreconditionRequired).toBe(428);
      expect(HttpStatusCodes.TooManyRequests).toBe(429);
      expect(HttpStatusCodes.RequestHeaderFieldsTooLarge).toBe(431);
      expect(HttpStatusCodes.UnavailableForLegalReasons).toBe(451);
    });
  });

  describe('5xx Server Errors', () => {
    it('should have correct values', () => {
      expect(HttpStatusCodes.InternalServerError).toBe(500);
      expect(HttpStatusCodes.NotImplemented).toBe(501);
      expect(HttpStatusCodes.BadGateway).toBe(502);
      expect(HttpStatusCodes.ServiceUnavailable).toBe(503);
      expect(HttpStatusCodes.GatewayTimeout).toBe(504);
      expect(HttpStatusCodes.HttpVersionNotSupported).toBe(505);
      expect(HttpStatusCodes.VariantAlsoNegotiates).toBe(506);
      expect(HttpStatusCodes.InsufficientStorage).toBe(507);
      expect(HttpStatusCodes.LoopDetected).toBe(508);
      expect(HttpStatusCodes.NotExtended).toBe(510);
      expect(HttpStatusCodes.NetworkAuthenticationRequired).toBe(511);
    });
  });
});
