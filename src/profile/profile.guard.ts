import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request & { user?: unknown }>();

    const expectedToken = process.env.PROFILE_API_KEY ?? process.env.API_KEY;

    if (!expectedToken) {
      if (process.env.NODE_ENV === 'production') {
        throw new UnauthorizedException('API key is not configured');
      }
      return true;
    }

    const authorizationHeader =
      (request as any)?.headers?.authorization ?? (request as any)?.headers?.Authorization;

    if (typeof authorizationHeader !== 'string') {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const [scheme, token] = authorizationHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
      throw new UnauthorizedException('Invalid Authorization header');
    }

    if (token !== expectedToken) {
      throw new UnauthorizedException('Invalid token');
    }

    (request as any).user = { token };
    return true;
  }
}
