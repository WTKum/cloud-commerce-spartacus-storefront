import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
import { ErrorModel, HttpErrorModel } from '../model/misc.model';

export const UNKNOWN_ERROR = {
  error: 'unknown error',
};

export function makeErrorSerializable(
  error: HttpErrorResponse | ErrorModel | any
): HttpErrorModel | Error | any {
  if (error instanceof Error) {
    return {
      message: error.message,
      type: error.name,
      reason: error.stack,
    } as ErrorModel;
  }

  if (error instanceof HttpErrorResponse) {
    let serializableError = error.error;
    if (isObject(error.error)) {
      serializableError = JSON.stringify(error.error);
    }

    return {
      message: error.message,
      error: serializableError,
      status: error.status,
      statusText: error.statusText,
      url: error.url,
    } as HttpErrorModel;
  }

  return isObject(error) ? UNKNOWN_ERROR : error;
}
