import { MODAL_ON, MODAL_OFF } from './interface';
import { createAction } from 'typesafe-actions';

export const setModalOn = createAction(MODAL_ON)<string>();
export const setModalOff = createAction(MODAL_OFF)<string>();

export type modalActionType = ReturnType<typeof setModalOn> | ReturnType<typeof setModalOff>;
