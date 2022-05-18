import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

interface ClassConstructor {
  new (...args: any[]): {};
}

// Costum decorator..
export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run smth before a request is handled
    console.log('Im running before the handler');

    return handler.handle().pipe(
      map((data: any) => {
        // Run smthing before the response is sent out
        console.log('Im running before response is sent out', data);
        return plainToClass(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
