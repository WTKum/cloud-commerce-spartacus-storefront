import { Action } from '@ngrx/store';

export const CLEAR_MISCS_DATA = '[Checkout] Clear Titles And Countries';

export class ClearMiscsData implements Action {
  readonly type = CLEAR_MISCS_DATA;
}

export type MiscsDataAction = ClearMiscsData;

export * from './user-token.action';
export * from './user-details.action';
export * from './login-logout.action';
export * from './user-addresses.action';
export * from './payment-methods.action';
export * from './user-register.action';
export * from './titles.action';
