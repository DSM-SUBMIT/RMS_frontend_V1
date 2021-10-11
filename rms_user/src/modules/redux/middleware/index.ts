import { all } from 'redux-saga/effects';
import mainSaga from './main';
import detailReportSaga from './detailReport';
import loginSaga from './login';
import detailPlanSaga from './detailPlan';
import headerSaga from './header';
import infoSaga from './info';
import viewProjectSaga from './viewProject';

export default function* rootSaga() {
  yield all([
    mainSaga(),
    detailReportSaga(),
    loginSaga(),
    headerSaga(),
    infoSaga(),
    detailPlanSaga(),
    viewProjectSaga(),
  ]);
}
