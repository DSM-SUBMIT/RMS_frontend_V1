import { combineReducers } from 'redux';
import mypageReducer from './mypage';
import detailPlanReducer from './detailPlan';
import detailReportReducer from './detailReport';
import mainReducer from './main';
import headerReducer from './header';
import loginReducer from './login';
import infoReducer from './info';
import ModalReducer from './modal';

const rootReducer = combineReducers({
  main: mainReducer,
  detailReport: detailReportReducer,
  login: loginReducer,
  mypage: mypageReducer,
  header: headerReducer,
  info: infoReducer,
  detailPlan: detailPlanReducer,
  modal: ModalReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
