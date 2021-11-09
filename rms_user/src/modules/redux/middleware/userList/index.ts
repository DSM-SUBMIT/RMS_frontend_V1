import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { USERSLIST } from '../../action/porject/interface';
import { getUserList } from '../../../../util/api/project';
import userListState from '../../reducer/userList/interface';
const getStateFunc = (state: reducerType): userListState => state.userList;

const userListGetSaga = function* (): any {
  const type = 'PROJECT/GET_USERSLIST';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getUserList, accessToken);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

function* userListSaga() {
  yield takeLatest(USERSLIST, userListGetSaga);
}

export default userListSaga;
