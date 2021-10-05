import { CODE, TOKEN, TOKEN_FAILURE, TOKEN_SUCCESS } from './interface';
import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';
import { loginResponseType } from '../../../../constance/login';

export const setCode = createAction(CODE)<string>();
export const getToken = createAction(TOKEN)();
export const getTokenSuccess = createAction(TOKEN_SUCCESS)<loginResponseType>();
export const getTokenFailure = createAction(TOKEN_FAILURE)<error>();

export type loginActionType =
  | ReturnType<typeof setCode>
  | ReturnType<typeof getToken>
  | ReturnType<typeof getTokenSuccess>
  | ReturnType<typeof getTokenFailure>;
